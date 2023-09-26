package com.microservice.product.exceptions;

public class ErrorResponse {
    private int status;
    private String message;

    public ErrorResponse() {}

    public String getMessage() {
        return message;
    }

    public int getStatus() {
        return status;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setStatus(int status) {
        this.status = status;
    }

}
