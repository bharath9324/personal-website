import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
    kotlin("jvm") version "2.1.10"
    id("com.github.johnrengelman.shadow") version "8.1.1"
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

val jettyVersion = "11.0.25"
val jerseyVersion = "3.1.10"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.eclipse.jetty:jetty-server:${jettyVersion}")
    implementation("org.eclipse.jetty:jetty-servlet:${jettyVersion}")
    implementation("org.eclipse.jetty:jetty-servlets:${jettyVersion}")

    implementation("org.glassfish.jersey.containers:jersey-container-servlet:${jerseyVersion}")
    implementation("org.glassfish.jersey.inject:jersey-hk2:${jerseyVersion}")
    implementation("org.glassfish.jersey.media:jersey-media-json-jackson:${jerseyVersion}")

    testImplementation(kotlin("test"))
}


application {
    mainClass.set("com.base.MainKt")
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(23)
}

tasks.withType<ShadowJar> {
    archiveClassifier.set("") // so it replaces the default jar
    mergeServiceFiles()
    manifest {
        attributes["Main-Class"] = "com.example.MainKt"
    }
}