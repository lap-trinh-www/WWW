package com.project.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	private User_Repository user_Repository;
	
	@GetMapping("/user")
	public User_Entity getList() {
		User_Entity user_Entity = new User_Entity("1", "a", "a", "a", "a", "a", false);
		user_Repository.save(user_Entity);
		return user_Entity;
	}
	
	@PostMapping("/user")
	public User_Entity addUser(@Valid @RequestBody User_Entity user) {
		user_Repository.save(user);
		return user;
	}
}
