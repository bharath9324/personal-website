package com.base

import jakarta.inject.Singleton
import jakarta.ws.rs.PUT
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@Singleton
@Path("/views")
class ViewsApi {
    private var counter = 0

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    fun getCount(): Response {
        counter++
        return Response.ok(counter).build()
    }

}