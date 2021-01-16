package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Corporate;

@Repository
public interface CorporateRepository extends JpaRepository<Corporate,String> {
	

}
