package com.base

import io.github.cdimascio.dotenv.dotenv

object DonEnvUtils {
    val dotenv = dotenv { directory = System.getProperty("user.home") }
}