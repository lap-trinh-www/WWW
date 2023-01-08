package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.BillDetail_Entity;
import com.project.reponsitory.BillDetail_Repository;

@RestController
public class BillDetail_Controller {
	@Autowired
	private BillDetail_Repository billDetail_Repository;

	@GetMapping("/billDetail")
	public String listAll(Model model) {
		List<BillDetail_Entity> listBillDetail = billDetail_Repository.findAll();
		model.addAttribute("listBillDeltai", listBillDetail);

		return "billDetail";
	}

	@PostMapping("/billDetail")
	public BillDetail_Entity addBillDetail(@RequestBody BillDetail_Entity billDetail) {
		billDetail_Repository.save(billDetail);

		return billDetail;
	}
}
