package com.project.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.User_Entity;
import com.project.reponsitory.User_Repository;
import com.project.service.User_Service;

@RestController
public class User_Controller {
	@Autowired
	private User_Service service;
	
	@GetMapping("/user")
	public List<User_Entity> getList() {
		 
		return service.findAll();
	}
	
	@PostMapping("/user")
	public User_Entity addUser(@Valid @RequestBody User_Entity user) {
		service.addUser(user);
		return user;
	}
}
