package com.project.saveoEclipse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaRepositories(basePackages="com.project.dao")
@EntityScan(basePackages="com.project.model")
@SpringBootApplication(scanBasePackages="com.project")
public class SaveoEclipseApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(SaveoEclipseApplication.class, args);
	}

}
