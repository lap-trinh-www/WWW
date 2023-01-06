package fit.se.models;

import java.io.Serializable;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "accounts")
public class Account implements Serializable {
	@Id
	@Column(name = "username")
	private String username;
	private String password;
	private String role;

	@OneToOne
	@MapsId
	@JoinColumn(name = "username", columnDefinition = "nvarchar(20)")
	private User user;

	@Override
	public String toString() {
		return "Account [username=" + username + ", password=" + password + ", role=" + role + ", user=" + user + "]";
	}

}
