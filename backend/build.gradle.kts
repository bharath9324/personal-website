plugins {
    kotlin("jvm") version "2.1.10"
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.eclipse.jetty:jetty-server:12.0.12")
    implementation("org.eclipse.jetty:jetty-servlet:11.0.15")
    implementation("org.glassfish.jersey.containers:jersey-container-servlet:3.1.3")
    implementation("org.glassfish.jersey.inject:jersey-hk2:3.1.3")
    implementation("org.glassfish.jersey.media:jersey-media-json-jackson:3.1.3")
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

