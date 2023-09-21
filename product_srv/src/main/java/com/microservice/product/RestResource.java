package com.microservice.product;

import com.microservice.product.models.Product;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/product")
public class RestResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getproduct/{id}")
    public Response getProduct(@PathParam("id") Long id) {
        Product product = new Product();
        product.setId(1L);
        product.setName("First Product");

        return Response.ok(product).build();
    }

}