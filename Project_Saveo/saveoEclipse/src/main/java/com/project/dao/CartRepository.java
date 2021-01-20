package com.project.dao;

import com.project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {
    List<Cart> findByCorporateName(String corporateName);

    List<Cart> findBySmallScaleName(String smallScaleName);
}
