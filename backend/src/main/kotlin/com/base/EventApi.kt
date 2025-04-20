package com.base

import jakarta.inject.Singleton
import jakarta.servlet.http.HttpServletRequest
import jakarta.ws.rs.Consumes
import jakarta.ws.rs.PUT
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.Context
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@Singleton
@Path("/event")
class EventApi {
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    fun processEvent(@Context request: HttpServletRequest): Response {
        val forwardedFor = request.getHeader("X-Forwarded-For")
        val clientIp = if (!forwardedFor.isNullOrEmpty()) {
            // Can be a list of IPs: client, proxy1, proxy2, ...
            forwardedFor.split(",")[0].trim()
        } else {
            // Fallback to remote address
            request.remoteAddr
        }
        println(request.reader.use { it.readText() })
        return Response.ok().build()
    }

}