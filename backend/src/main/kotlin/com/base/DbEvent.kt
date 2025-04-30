package com.base

import jakarta.inject.Singleton
import jakarta.persistence.*
import java.sql.Timestamp

@Entity
@Table(name = "events")
class DbEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private var id: Long = 0

    @Column
    private lateinit var ipAddress: String

    @Column
    private lateinit var eventType: EventType

    @Column
    private lateinit var timestamp: Timestamp

    @Singleton
    class Factory {
        fun create(ipAddress: String, eventType: EventType, timestamp: Timestamp) {
            val session = HibernateUtil.sessionFactory.openSession()
            val event = DbEvent()
            event.ipAddress = ipAddress
            event.eventType = eventType
            event.timestamp = timestamp
            session.use {
                val tx = session.beginTransaction()
                session.persist(event)
                tx.commit()
            }

        }
    }

}