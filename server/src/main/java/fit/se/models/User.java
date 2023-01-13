package fit.se.models;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "customers")
public class User implements Serializable {

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
	private Account account;

	@OneToMany(mappedBy = "user")
	private List<Bill> bills;

	@Override
	public String toString() {
		return "User [id=" + id + ", lastName=" + lastName + ", firstName=" + firstName + ", email=" + email + ", phone="
				+ phone + ", avatar=" + avatar + ", staus=" + staus + "]";
	}

}
