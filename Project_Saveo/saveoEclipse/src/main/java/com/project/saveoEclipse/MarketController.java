package com.project.saveoEclipse;

import com.project.dao.MarketDao;
import com.project.model.Market;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MarketController {
    @Autowired
    MarketDao marketDao;

    @PostMapping("/registerRequest")
    public void registerRequest(@RequestBody Market market){
        System.out.println("Data Recieved ");
        System.out.println(market);
        marketDao.registerReq(market);
    }

    @RequestMapping("/showAllRequirements")
    public List<Market> showAllRequirements(){
        List<Market> marketList = marketDao.getRequirement();
        return marketList;
    }

}
