package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import entity.User_Entity;
import reponsitory.User_Repository;

@RestController
public class User_Controller {
	@Autowired
	private User_Repository user_Repository;

	@GetMapping("/user")
	public String listAll(Model model) {
		List<User_Entity> listPer = user_Repository.findAll();
		model.addAttribute("listPerson", listPer);

		return "user";
	}

	@PostMapping("/user")
	public User_Entity addUser(@RequestBody User_Entity user) {
		user_Repository.save(user);

		return user;
	}
}
