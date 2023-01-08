package com.project.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@IdClass(BillDetailPK_Entity.class)
@Table(name = "BillDetail")
public class BillDetail_Entity{
	@Id
	@ManyToOne
	@JoinColumn(name = "bill_ID")
	private Bill_Entity bills;
	
	
	@Id
	@ManyToOne
	@JoinColumn(name = "room_ID")
	private Room_Entity rooms;

	private int childrenNum;
	private int adultNum;
	private Date checkIn;
	private Date checkOut;

	public BillDetail_Entity() {
		// TODO Auto-generated constructor stub
	}
	
	public BillDetail_Entity(int childrenNum, int adultNum, Date checkIn, Date checkOut) {
		super();
		this.childrenNum = childrenNum;
		this.adultNum = adultNum;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
	}

	
}
