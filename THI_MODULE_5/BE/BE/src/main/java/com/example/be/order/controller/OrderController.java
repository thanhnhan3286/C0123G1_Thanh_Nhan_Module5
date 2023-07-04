package com.example.be.order.controller;

import com.example.be.order.model.Order;
import com.example.be.order.model.Product;
import com.example.be.order.service.IOrderService;
import com.example.be.order.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IProductService productService;

    @GetMapping("/order/list")
    public ResponseEntity<List<Order>> getListOrder() {
        return new ResponseEntity<>(orderService.getAll(), HttpStatus.OK);
    }

    @DeleteMapping("/order/delete/{id}")
    public void deleteOrder(@PathVariable("id") Integer id) {
        orderService.deleteOrder(id);
    }
    @PostMapping("/order/create")
    public void createOrder(@RequestBody Order order){
        this.orderService.createOrder(order);
    }

    @GetMapping("/order/detail/{id}")
    public ResponseEntity<List<Order>> findId(@PathVariable("id") Integer id) {
        List<Order> res = orderService.findById(id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    @GetMapping("/product/list")
    public ResponseEntity<List<Product>> getListProduct() {
        return new ResponseEntity<>(productService.getAll(), HttpStatus.OK);
    }
}
