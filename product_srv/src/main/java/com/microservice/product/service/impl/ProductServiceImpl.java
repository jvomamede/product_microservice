package com.microservice.product.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.microservice.product.models.Product;
import com.microservice.product.service.ProductService;

import jakarta.ejb.Stateless;

@Stateless
public class ProductServiceImpl implements ProductService {

    private List<Product> products = new ArrayList<>();

    @Override
    public Product getProdugtById(Long id) {
        for (Product product : products) {
            if(product.getId().equals(id)) {
                return product;
            }
        }

        return null;
    }

    @Override
    public List<Product> allProduct() {
        return this.products;
    }

    @Override
    public Product createProduct(Product product) {
       this.products.add(product);
       return product;
    }

    
    
}
