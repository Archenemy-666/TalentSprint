package com.project.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.Corporate;

@Service
public class CorporateDao {
	@Autowired
	CorporateRepository corporateRepository;
	
	public void corporateRegister(Corporate corporate) {
		// TODO Auto-generated method stub
		corporateRepository.save(corporate);
		
	}


	public Corporate getCorporateById(String corporateId) {
		Corporate corporate = corporateRepository.findById(corporateId).orElse(new Corporate());
		return  corporate;
	}
}
