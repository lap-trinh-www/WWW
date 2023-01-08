package com.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
@Table(name = "Customer")
public class User_Entity {

	@Id
	@Column(columnDefinition = "nvarchar(20)")
	private String id;
	@Column(columnDefinition = "nvarchar(20)")
	private String lastName;
	@Column(columnDefinition = "nvarchar(20)")
	private String firstName;
	@Column(columnDefinition = "nvarchar(20)")
	private String email;
	@Column(columnDefinition = "nvarchar(20)")
	private String phone;
	@Column(columnDefinition = "nvarchar(20)")
	private String avatar;
	private boolean staus;
	@OneToOne(mappedBy = "user")
	private Account_Entity account;
	
	@OneToMany(mappedBy = "user")
	private List<Bill_Entity> bills;
	
	

	public User_Entity() {
		// TODO Auto-generated constructor stub
	}

	public User_Entity(String user_ID, String lastName, String firstName, String email, String phone, String avatar,
			boolean staus) {
		super();
		this.id = user_ID;
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.avatar = avatar;
		this.staus = staus;
	}

	public String getUser_ID() {
		return id;
	}

	public void setUser_ID(String user_ID) {
		this.id = user_ID;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public boolean isStaus() {
		return staus;
	}

	public void setStaus(boolean staus) {
		this.staus = staus;
	}

	public Account_Entity getAccount() {
		return account;
	}

	public void setAccount(Account_Entity account) {
		this.account = account;
	}

	public List<Bill_Entity> getBills() {
		return bills;
	}

	public void setBills(List<Bill_Entity> bills) {
		this.bills = bills;
	}

	
}
