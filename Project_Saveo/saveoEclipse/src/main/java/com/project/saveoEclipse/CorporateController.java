package com.project.saveoEclipse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.dao.CorporateDao;
import com.project.model.Corporate;

import java.util.Date;

@RestController
public class CorporateController {
	@Autowired
	CorporateDao corporateDao;

	@PostMapping("/registerCorp")
	public void corporateRegister(@RequestBody Corporate corporate) {
		System.out.println(corporate);
		//Corporate corporate = new Corporate("apollo123","apollo","hyd",9939485866l,"apollo@hyd.com",new Date(),"apollo");
		corporateDao.corporateRegister(corporate);

	}
	@RequestMapping("/getCorporateDetails/{corporateId}/{password}")
	public Corporate getCorporateDetails(@PathVariable("corporateId") String corporateId,@PathVariable("password") String password){
		Corporate corporate = corporateDao.getCorporateById(corporateId);
		if(corporate.getPassword().equalsIgnoreCase(password)){
			return corporate ;
		}
		return null;

	}
	
	

}
