package com.project.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Bill")
public class Bill_Entity {

	@Id
	private String bill_ID;
	private Date date;
	private long total;
	

	@ManyToOne
	@JoinColumn(name = "user_ID", columnDefinition = "nvarchar(20)")
	private User_Entity user;
	
	@OneToMany(mappedBy = "bills")
	private List<BillDetail_Entity> rooms;

	public Bill_Entity() {
		// TODO Auto-generated constructor stub
	}

	public Bill_Entity(String bill_ID, Date date, long total) {
		super();
		this.bill_ID = bill_ID;
		this.date = date;
		this.total = total;

	}

	public String getBill_ID() {
		return bill_ID;
	}

	public void setBill_ID(String bill_ID) {
		this.bill_ID = bill_ID;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

//	public List<Room_Entity> getRooms() {
//		return rooms;
//	}
//
//	public void setRooms(List<Room_Entity> rooms) {
//		this.rooms = rooms;
//	}

//	public User_Entity getUser() {
//		return user;
//	}
//
//	public void setUser(User_Entity user) {
//		this.user = user;
//	}
	
}
