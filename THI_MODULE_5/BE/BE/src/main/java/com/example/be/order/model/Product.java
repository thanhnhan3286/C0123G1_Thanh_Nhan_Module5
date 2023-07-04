package com.example.be.order.model;

import javax.persistence.*;
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="name", columnDefinition = "TEXT")
    private String name;
    @Column(name="price", columnDefinition = "INT")
    private Integer price;
    @ManyToOne
    @JoinColumn(name="type_id")
    private TypeProduct type;

    public Product() {
    }

    public Product(Integer id, String name, Integer price, TypeProduct type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public TypeProduct getType() {
        return type;
    }

    public void setType(TypeProduct type) {
        this.type = type;
    }
}
