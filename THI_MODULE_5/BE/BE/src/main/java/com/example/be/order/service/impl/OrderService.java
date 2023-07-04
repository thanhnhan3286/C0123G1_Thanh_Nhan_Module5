package com.example.be.order.service.impl;

import com.example.be.order.model.Order;
import com.example.be.order.repository.IOrderRepository;
import com.example.be.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public List<Order> getAll() {
        return orderRepository.getAll();
    }

    @Override
    public void deleteOrder(Integer id) {
        this.orderRepository.deleteOrder(id);
    }

    @Override
    public List<Order> findById(Integer id) {
        return  orderRepository.findByIdOrder(id);
    }

    @Override
    public void createOrder(Order order) {
        this.orderRepository.createOrder(order.getBuyDay(),order.getQuantity(),order.getTotalPrice(),order.getProduct().getId(),order.getProduct().getPrice());
    }
}
