package com.microservice.product;

import java.util.ArrayList;
import java.util.List;

import com.microservice.product.models.Product;
import com.microservice.product.service.ProductService;

import jakarta.ejb.EJB;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/product")
public class RestResource {

    @EJB
    private ProductService productService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get/{id}")
    public Response getProduct(@PathParam("id") Long id) {
        Product product = this.productService.getProdugtById(id);
        return Response.ok(product).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Response allProduct() {
        List<Product> products = this.productService.allProduct();
        return Response.ok(products).build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/create")
    public Response createProduct(Product product) {
        Product response = this.productService.createProduct(product);
        return Response.ok(response).build();
    }

}