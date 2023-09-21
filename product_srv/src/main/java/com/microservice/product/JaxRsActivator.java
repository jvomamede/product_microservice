package com.microservice.product;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/api/v1/")
public class JaxRsActivator extends Application {}
