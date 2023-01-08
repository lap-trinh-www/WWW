package com.project.entity;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Room")
public class Room_Entity {
	@Id
	private String room_ID;
	private String roomName;
	private String imgaes;
	private int limitQuantity;
	private String vote;
	private int acreage;
	private String defaultService;
	private String description;

	@ManyToOne
	@JoinColumn(name = "type_ID")
	private RoomType_Entity roomType;

	@OneToMany(mappedBy = "rooms")
	private List<BillDetail_Entity> bills;

	public Room_Entity() {
		// TODO Auto-generated constructor stub
	}

	public Room_Entity(String room_ID, String roomName, String imgaes, int limitQuantity, String vote, int acreage,
			String defaultService, String description) {
		super();
		this.room_ID = room_ID;
		this.roomName = roomName;
		this.imgaes = imgaes;
		this.limitQuantity = limitQuantity;
		this.vote = vote;
		this.acreage = acreage;
		this.defaultService = defaultService;
		this.description = description;
	}

	public String getRoom_ID() {
		return room_ID;
	}

	public void setRoom_ID(String room_ID) {
		this.room_ID = room_ID;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public String getImgaes() {
		return imgaes;
	}

	public void setImgaes(String imgaes) {
		this.imgaes = imgaes;
	}

	public int getLimitQuantity() {
		return limitQuantity;
	}

	public void setLimitQuantity(int limitQuantity) {
		this.limitQuantity = limitQuantity;
	}

	public String getVote() {
		return vote;
	}

	public void setVote(String vote) {
		this.vote = vote;
	}

	public int getAcreage() {
		return acreage;
	}

	public void setAcreage(int acreage) {
		this.acreage = acreage;
	}

	public String getDefaultService() {
		return defaultService;
	}

	public void setDefaultService(String defaultService) {
		this.defaultService = defaultService;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public List<Bill_Entity> getBills() {
//		return bills;
//	}
//
//	public void setBills(List<Bill_Entity> bills) {
//		this.bills = bills;
//	}

}
