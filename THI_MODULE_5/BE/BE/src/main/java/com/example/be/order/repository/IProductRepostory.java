package com.example.be.order.repository;

import com.example.be.order.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepostory extends JpaRepository<Product,Integer> {
        @Query(value = "SELECT * FROM product",nativeQuery = true)
        List<Product> getAll();

//    List<Product> getAllProduct();
}
