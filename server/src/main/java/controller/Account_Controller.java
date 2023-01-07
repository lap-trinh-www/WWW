package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import entity.Account_Entity;
import reponsitory.Account_Repository;

@RestController
public class Account_Controller {
	@Autowired
	private Account_Repository account_Repository;

	@GetMapping("/account")
	public String listAll(Model model) {
		List<Account_Entity> listAcc = account_Repository.findAll();
		model.addAttribute("listAcc", listAcc);

		return "acc";
	}

	@PostMapping("/account")
	public Account_Entity addAccount(@RequestBody Account_Entity account) {
		account_Repository.save(account);

		return account;
	}
}
