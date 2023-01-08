package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Room_Entity;
import com.project.reponsitory.Room_Repository;

@RestController
public class Room_Controller {
	@Autowired
	private Room_Repository room_Repository;

	@GetMapping("/room")
	public String listAll(Model model) {
		List<Room_Entity> listRoom = room_Repository.findAll();
		model.addAttribute("listRoom", listRoom);

		return "room";
	}

	@PostMapping("/room")
	public Room_Entity addRoom(@RequestBody Room_Entity room) {
		room_Repository.save(room);

		return room;
	}
}
