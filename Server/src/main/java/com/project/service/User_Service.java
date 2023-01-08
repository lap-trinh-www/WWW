package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.User_Entity;
import com.project.reponsitory.User_Repository;

@Service
public class User_Service {

	@Autowired
	private User_Repository user_Repository;

	public List<User_Entity> findAll()

	{
		return user_Repository.findAll();
	}
	public User_Entity addUser(User_Entity user_Entity)

	{
		return user_Repository.save(user_Entity);
	}
}
