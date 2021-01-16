package com.project.saveoEclipse;

import com.project.dao.SmallScaleDao;
import com.project.dao.SmallScaleRepository;
import com.project.model.Corporate;
import com.project.model.SmallScale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class SmallScaleController{
    @Autowired
    SmallScaleDao smallScaleDao;

    @PostMapping("/smallScaleRegister")
    public void smallScaleRegister(@RequestBody SmallScale smallScale){
        System.out.println(smallScale);
        //SmallScale smallScale = new SmallScale("adrm123","adrm","hyd",9939485822l,"ADRM@hyd.com","adrm");
        smallScaleDao.smallScaleRegister(smallScale);
    }
    @RequestMapping("/getSmallScaleDetails/{smallScaleId}/{password}")
    public SmallScale smallScaleLogin(@PathVariable("smallScaleId") String smallScaleId , @PathVariable("password") String password){
        SmallScale smallScale = smallScaleDao.getSmallScaleById(smallScaleId);
        //if(smallScale.getPassword().equalsIgnoreCase(password)) wont work as i does not generate a value hence error in string if wrong loginId at front-end
        if(password.equalsIgnoreCase(smallScale.getPassword())){
            return smallScale;
        }
        return null;
    }

}
