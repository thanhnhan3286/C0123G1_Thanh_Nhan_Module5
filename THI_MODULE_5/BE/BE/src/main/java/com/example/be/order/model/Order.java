package com.example.be.order.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;
    @Column(name="price_product")
    private Integer priceProduct;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "buy_day",columnDefinition = "DATE")
    private String buyDay;
    @Column(name = "total_price")
    private Integer totalPrice;
    @Column(name = "status_delete")
    private Integer statusDelete;

    public Order(Integer id, Product product, Integer priceProduct, Integer quantity, String buyDay, Integer totalPrice,Integer statusDelete) {
        this.id = id;
        this.product = product;
        this.priceProduct = priceProduct;
        this.quantity = quantity;
        this.buyDay = buyDay;
        this.totalPrice = totalPrice;
        this.statusDelete = statusDelete;
    }

    public Integer getStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(Integer statusDelete) {
        this.statusDelete = statusDelete;
    }

    public Order() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getPriceProduct() {
        return priceProduct;
    }

    public void setPriceProduct(Integer priceProduct) {
        this.priceProduct = priceProduct;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getBuyDay() {
        return buyDay;
    }

    public void setBuyDay(String buyDay) {
        this.buyDay = buyDay;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }
}
