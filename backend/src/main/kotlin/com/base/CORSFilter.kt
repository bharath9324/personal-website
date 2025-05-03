package com.base

import com.base.DonEnvUtils.dotenv
import jakarta.servlet.*
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse

class CORSFilter : Filter {
    override fun init(filterConfig: FilterConfig?) {}

    override fun doFilter(req: ServletRequest, res: ServletResponse, chain: FilterChain) {
        val request = req as HttpServletRequest
        val response = res as HttpServletResponse

        response.setHeader("Access-Control-Allow-Origin", dotenv["FE_DOMAIN"])
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")
        response.setHeader("Access-Control-Allow-Credentials", "true")

        if (request.method.equals("OPTIONS", ignoreCase = true)) {
            response.status = HttpServletResponse.SC_OK
            return
        }
        chain.doFilter(req, res)
    }

    override fun destroy() {}
}