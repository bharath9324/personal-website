package com.base

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.servlet.ServletContextHandler
import org.eclipse.jetty.servlet.ServletHolder
import org.glassfish.jersey.server.ResourceConfig
import org.glassfish.jersey.servlet.ServletContainer

const val PORT = 8080

fun main() {
    val resourceConfig = ResourceConfig().packages("com.base")

    val servlet = ServletHolder(ServletContainer(resourceConfig))

    val server = Server(PORT)
    val context = ServletContextHandler(server, "/")
    context.addServlet(servlet, "/*")

    server.start()
    println("Server running at http://localhost:$PORT/")
    server.join()
}