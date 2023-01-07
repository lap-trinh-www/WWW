package entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Room")
public class Room_Entity implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String room_ID;
	private String roomName;
	private List<String> imgaes;
	private int limitQuantity;
	private String vote;
	private int acreage;
	private List<String> defaultService;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "type_ID")
	private RoomType_Entity roomType;
	public Room_Entity() {
		// TODO Auto-generated constructor stub
	}
	public Room_Entity(String room_ID, String roomName, List<String> imgaes, int limitQuantity, String vote,
			int acreage, List<String> defaultService, String description) {
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
	public List<String> getImgaes() {
		return imgaes;
	}
	public void setImgaes(List<String> imgaes) {
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
	public List<String> getDefaultService() {
		return defaultService;
	}
	public void setDefaultService(List<String> defaultService) {
		this.defaultService = defaultService;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public RoomType_Entity getRoomType() {
		return roomType;
	}
	public void setRoomType(RoomType_Entity roomType) {
		this.roomType = roomType;
	}
	
	
}
