package com.example.be.order.service.impl;

import com.example.be.order.model.Product;
import com.example.be.order.repository.IProductRepostory;
import com.example.be.order.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepostory productRepository;
    @Override
    public List<Product> getAll() {
        return productRepository.getAll();
    }
}
