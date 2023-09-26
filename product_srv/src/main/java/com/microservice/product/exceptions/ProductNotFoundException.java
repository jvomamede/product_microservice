package com.microservice.product.exceptions;

public class ProductNotFoundException extends RuntimeException {
    
    public ProductNotFoundException(String message) {
        super(message);
    }

    public ProductNotFoundException(String message, Throwable e) {
        super(message, e);
    }

}
