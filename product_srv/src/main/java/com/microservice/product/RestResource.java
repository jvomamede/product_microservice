package com.microservice.product;

import java.util.ArrayList;
import java.util.List;

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
    @Path("/get/{id}")
    public Response getProduct(@PathParam("id") Long id) {
        Product product = new Product();
        product.setId(1L);
        product.setName("First Product");

        return Response.ok(product).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Response allProduct() {
        List<Product> products = new ArrayList<>();
        Product product = new Product();
        product.setId(1L);
        product.setName("First Product");
        products.add(product);

        return Response.ok(products).build();
    }

}