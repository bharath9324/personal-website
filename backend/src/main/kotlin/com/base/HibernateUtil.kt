package com.base

import io.github.cdimascio.dotenv.dotenv
import org.hibernate.SessionFactory
import org.hibernate.cfg.Configuration

object HibernateUtil {
    private val dotenv = dotenv { directory = System.getProperty("user.home") }

    val sessionFactory: SessionFactory  = Configuration()
        .setProperty("hibernate.connection.driver_class", "com.mysql.cj.jdbc.Driver")
        .setProperty("hibernate.connection.url", dotenv["DB_URL"])
        .setProperty("hibernate.connection.username", dotenv["DB_USER"])
        .setProperty("hibernate.connection.password", dotenv["DB_PASSWORD"])
        .setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL8Dialect")
        .setProperty("hibernate.hbm2ddl.auto", "update")
        .setProperty("hibernate.show_sql", "true")
        .addAnnotatedClass(DbEvent::class.java)
        .buildSessionFactory()
}