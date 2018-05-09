package com.example.firstapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.firstapp.models.Hello;
import com.example.firstapp.repository.HelloRespository;

@RestController
public class HelloService {
	@Autowired
	HelloRespository repository;
    @GetMapping("/api/hello")
	public Iterable<Hello> findAllHellos() {
		return repository.findAll();
}
}
