package com.microservice.product.service;

import java.util.List;

import com.microservice.product.exceptions.ProductNotFoundException;
import com.microservice.product.models.Product;

public interface ProductService {
    public Product getProdugtById(Long id) throws ProductNotFoundException;
    public List<Product> allProduct();
    public Product createProduct(Product product);
}
