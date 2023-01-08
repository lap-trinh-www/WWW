package com.project.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "RoomType")
public class RoomType_Entity {
	@Id
	private String type_ID;
	private String typeName;
	private int quantityBed;

	@OneToMany(mappedBy = "roomType")
	private List<Room_Entity> rooms;

	public RoomType_Entity() {
		// TODO Auto-generated constructor stub
	}

	public RoomType_Entity(String type_ID, String typeName, int quantityBed) {
		super();
		this.type_ID = type_ID;
		this.typeName = typeName;
		this.quantityBed = quantityBed;
	}

	public String getType_ID() {
		return type_ID;
	}

	public void setType_ID(String type_ID) {
		this.type_ID = type_ID;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public int getQuantityBed() {
		return quantityBed;
	}

	public void setQuantityBed(int quantityBed) {
		this.quantityBed = quantityBed;
	}

	public List<Room_Entity> getRooms() {
		return rooms;
	}

	public void setRooms(List<Room_Entity> rooms) {
		this.rooms = rooms;
	}

	
}
