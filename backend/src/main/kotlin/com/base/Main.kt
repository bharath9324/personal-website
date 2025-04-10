package com.base

import org.glassfish.jersey.jdkhttp.JdkHttpServerFactory
import jakarta.ws.rs.core.UriBuilder
import org.glassfish.jersey.server.ResourceConfig


const val PORT = 8080

fun main() {
    val baseUri = UriBuilder.fromUri("http://localhost/").port(PORT).build()
    val config = ResourceConfig()
        .packages("com.base")
    JdkHttpServerFactory.createHttpServer(baseUri, config)
    println("Server running at http://localhost:$PORT/")
}