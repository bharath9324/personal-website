package com.base

import com.fasterxml.jackson.annotation.JsonProperty
import jakarta.inject.Singleton
import jakarta.servlet.http.HttpServletRequest
import jakarta.ws.rs.PUT
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.Context
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response
import com.fasterxml.jackson.databind.ObjectMapper
import java.time.Instant
import java.sql.Timestamp


@Singleton
@Path("/event")
class EventApi {
    private val dbEventFactory = DbEvent.Factory()

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    fun processEvent(@Context request: HttpServletRequest): Response {
        val forwardedFor = request.getHeader("X-Forwarded-For")
        val clientIp = if (!forwardedFor.isNullOrEmpty()) {
            forwardedFor.split(",")[0].trim()
        } else {
            // Fallback to remote address
            request.remoteAddr
        }
        val eventRequest = request.toEventRequest()
        val timestamp = Timestamp.from(Instant.now())
        dbEventFactory.create(ipAddress = clientIp, eventType = eventRequest.eventType, timestamp = timestamp)
        return Response.ok("Event recorded").build()
    }
}

data class EventRequest(
    @JsonProperty("event_type")
    val eventType: EventType,
)

fun HttpServletRequest.toEventRequest(): EventRequest {
    val objectMapper = ObjectMapper()
    return this.inputStream.use {
        objectMapper.readValue(it, EventRequest::class.java)
    }
}
