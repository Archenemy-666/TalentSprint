package com.project.dao;

import com.project.model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDao {
    @Autowired
    CartRepository cartRepository;

    public void addToCart(Cart cart) {
        cartRepository.save(cart);
    }

    public List<Cart> findByCorpName(String corporateName) {
        List<Cart> cart = cartRepository.findByCorporateName(corporateName);
        return cart;
    }

    public List<Cart> findBySmallScaleName(String smallScaleName) {
        List<Cart> cart = cartRepository.findBySmallScaleName(smallScaleName);
        return cart;
    }
}
