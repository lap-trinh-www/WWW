package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.RoomType_Entity;
import com.project.reponsitory.RoomType_Repository;

@RestController
public class RoomType_Controller {
	@Autowired
	private RoomType_Repository roomType_Repository;

	@GetMapping("/roomType")
	public String listAll(Model model) {
		List<RoomType_Entity> listRoomType = roomType_Repository.findAll();
		model.addAttribute("listRoomType", listRoomType);

		return "roomType";
	}

	@PostMapping("/roomType")
	public RoomType_Entity addRoomType(@RequestBody RoomType_Entity roomType) {
		roomType_Repository.save(roomType);

		return roomType;
	}
}
