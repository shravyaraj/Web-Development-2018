package com.example.firstapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.firstapp.models.Hello;

public interface HelloRespository extends CrudRepository<Hello, Integer> {}