package com.project.saveoEclipse;

import com.project.dao.CartDao;
import com.project.model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
    @Autowired
    CartDao cartDao;

    @PostMapping("corporateCart/")
    public void corporateCart(@RequestBody Cart cart){
        System.out.println(cart);
        cartDao.addToCart(cart);
    }
    @RequestMapping("/getCartDetailsByCorpName/{corporateName}")
    public List<Cart> getCartDetailsByCorpName(@PathVariable("corporateName") String corporateName){
        List<Cart> cart = cartDao.findByCorpName(corporateName);
        return cart;
    }
    @RequestMapping("/getCartDetailsBySmallName/{smallScaleName}")
    public List<Cart> getCartDetailsBySmallName(@PathVariable("smallScaleName") String smallScaleName){
        List<Cart> cart = cartDao.findBySmallScaleName(smallScaleName);
        return cart;
    }
}
