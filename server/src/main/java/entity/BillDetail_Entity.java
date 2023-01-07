package entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@IdClass(BillDetailPK_Entity.class)
@Table(name = "BillDetail")
public class BillDetail_Entity implements Serializable {
	@Id
	@ManyToOne
	@JoinColumn(name = "bill_ID")
	private String bill_ID;
	@Id
	@ManyToOne
	@JoinColumn(name = "room_ID")
	private String room_ID;

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

	public String getBill_ID() {
		return bill_ID;
	}

	public void setBill_ID(String bill_ID) {
		this.bill_ID = bill_ID;
	}

	public String getRoom_ID() {
		return room_ID;
	}

	public void setRoom_ID(String room_ID) {
		this.room_ID = room_ID;
	}

	public int getChildrenNum() {
		return childrenNum;
	}

	public void setChildrenNum(int childrenNum) {
		this.childrenNum = childrenNum;
	}

	public int getAdultNum() {
		return adultNum;
	}

	public void setAdultNum(int adultNum) {
		this.adultNum = adultNum;
	}

	public Date getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(Date checkIn) {
		this.checkIn = checkIn;
	}

	public Date getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(Date checkOut) {
		this.checkOut = checkOut;
	}
	
	
}
