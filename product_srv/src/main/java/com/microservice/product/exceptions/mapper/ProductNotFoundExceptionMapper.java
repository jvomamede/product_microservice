package com.microservice.product.exceptions.mapper;

import com.microservice.product.exceptions.ErrorResponse;
import com.microservice.product.exceptions.ProductNotFoundException;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class ProductNotFoundExceptionMapper implements ExceptionMapper<ProductNotFoundException> {
    
    @Override
    public Response toResponse(ProductNotFoundException exception) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(Response.Status.NOT_FOUND.getStatusCode());
        errorResponse.setMessage(exception.getMessage());
        return Response.status(Response.Status.NOT_FOUND).entity(errorResponse).build();
    }

}
