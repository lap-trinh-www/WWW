package entity;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "User")
public class User_Entity implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String user_ID;
	@Column(name = "Last_Name")
	private String lastName;
	@Column(name = "First_Name")
	private String firstName;
	private String email;
	private String phone;
	private String avatar;
	private boolean staus;
	
	@OneToMany(mappedBy = "user")
	private List<Bill_Entity> bills;
	public User_Entity() {
		// TODO Auto-generated constructor stub
	}
	public User_Entity(String user_ID, String lastName, String firstName, String email, String phone, String avatar,
			boolean staus) {
		super();
		this.user_ID = user_ID;
		this.lastName = lastName;
		this.firstName = firstName;
		this.email = email;
		this.phone = phone;
		this.avatar = avatar;
		this.staus = staus;
	}
	public String getUser_ID() {
		return user_ID;
	}
	public void setUser_ID(String user_ID) {
		this.user_ID = user_ID;
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
	public List<Bill_Entity> getBills() {
		return bills;
	}
	public void setBills(List<Bill_Entity> bills) {
		this.bills = bills;
	}
	
	
}
