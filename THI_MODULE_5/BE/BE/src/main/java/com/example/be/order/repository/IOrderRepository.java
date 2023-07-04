package com.example.be.order.repository;

import com.example.be.order.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Order, Integer> {
    @Query(value = "SELECT * FROM orders WHERE status_delete = 0 ORDER BY price_product DESC", nativeQuery = true)
    List<Order> getAll();

    @Modifying
    @Transactional
    @Query(value = "UPDATE orders AS o SET o.status_delete = 1 WHERE o.id = :id", nativeQuery = true)
    void deleteOrder(@Param("id") Integer id);

    @Query(value = "SELECT * FROM orders  WHERE id = :id", nativeQuery = true)
    List<Order> findByIdOrder(@Param("id") Integer id);


    @Modifying
    @Transactional
    @Query(value = "INSERT INTO orders(buy_day,quantity,total_price,product_id,price_product,status_delete) VALUES(:buyDay,:quantity,:totalPrice,:idProduct,:priceProduct,0)", nativeQuery = true)
    void createOrder(@Param("buyDay") String buyDay,@Param("quantity") Integer quantity,
                     @Param("totalPrice") Integer totalPrice,@Param("idProduct") Integer idProduct,
                     @Param("priceProduct") Integer priceProduct);
}
