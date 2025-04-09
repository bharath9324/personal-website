package com.base

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJaxbJsonProvider
import org.glassfish.jersey.server.ResourceConfig
import org.glassfish.jersey.servlet.ServletContainer

const val PORT = 8080

fun main() {
    val server = Server(PORT)
    val context = ServletContextHandler(ServletContextHandler.NO_SESSIONS)
    context.contextPath = "/"

    val resourceConfig = ResourceConfig()
        .packages("com.base") // package to scan for resources
        .register(JacksonJaxbJsonProvider::class.java)

    val servlet = ServletHolder(ServletContainer(resourceConfig))
    context.addServlet(servlet, "/*")

    server.handler = context

    server.start()
    println("Server running at http://localhost:$PORT/")
    server.join()
}