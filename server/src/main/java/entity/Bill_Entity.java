package entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Bill")
public class Bill_Entity implements Serializable {
	@Id
	private String bill_ID;
	private Date date;
	private long total;

	@ManyToOne
	@JoinColumn(name = "user_ID")
	private User_Entity user;

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

	public User_Entity getUser() {
		return user;
	}

	public void setUser(User_Entity user) {
		this.user = user;
	}

}
