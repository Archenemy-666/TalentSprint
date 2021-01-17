package com.project.dao;

import com.project.model.Market;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketDao {
    @Autowired
    MarketRepository marketRepository;
    public void registerReq(Market market){
        marketRepository.save(market);
    }
    public List<Market> getRequirement(){
        List<Market> marketList = marketRepository.findAll();
        return marketList;
    }
}
