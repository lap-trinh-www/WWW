package com.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "Account")
public class Account_Entity {
	@Id
	@Column(name = "username")
	private String userName;
	private String password;
	private String role;
	
	
	@OneToOne
	@MapsId
	@JoinColumn(name = "user_ID", columnDefinition = "nvarchar(20)")
	private User_Entity user;
	
	public Account_Entity() {
		// TODO Auto-generated constructor stub
	}
	public Account_Entity(String userName, String password, String role) {
		super();
		this.userName = userName;
		this.password = password;
		this.role = role;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public User_Entity getUser() {
		return user;
	}
	public void setUser(User_Entity user) {
		this.user = user;
	}

	
}
