package com.example.be.order.service;

import com.example.be.order.model.Order;

import java.util.List;

public interface IOrderService {
    List<Order> getAll();

    void deleteOrder(Integer id);

    List<Order> findById(Integer id);

    void createOrder(Order order);
}
