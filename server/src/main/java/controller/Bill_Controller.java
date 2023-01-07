package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import entity.Bill_Entity;
import reponsitory.Bill_Repository;

@RestController
public class Bill_Controller {
	@Autowired
	private Bill_Repository bill_Repository;

	@GetMapping("/bill")
	public String listAll(Model model) {
		List<Bill_Entity> listBill = bill_Repository.findAll();
		model.addAttribute("listBill", listBill);

		return "bill";
	}

	@PostMapping("/bill")
	public Bill_Entity addBill(@RequestBody Bill_Entity bill) {
		bill_Repository.save(bill);

		return bill;
	}
}
