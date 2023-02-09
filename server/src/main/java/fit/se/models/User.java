package fit.se.models;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "users")
public class User implements UserDetails {

	@Id
	@Column(name = "user_id")
	private String id;

	@Column(columnDefinition = "nvarchar(20)")
	private String lastName;

	@Column(columnDefinition = "nvarchar(20)")
	private String firstName;

	@Column(columnDefinition = "nvarchar(50)")
	private String email;

	@Column(columnDefinition = "nvarchar(20)")
	private String phone;

	@Column(columnDefinition = "text")
	private String avatar;

	private boolean status;

	private String password;

	@Column(name = "verification_code", length = 64)
	private String verificationCode;

	private boolean enabled;
	@OneToMany(mappedBy = "user")
	private List<Bill> bills;

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToOne(mappedBy = "user")
	private RefreshToken refreshToken;

	public User(String id, String password) {
		this.id = id;
		this.password = password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	@Override
	public String getUsername() {

		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", lastName=" + lastName + ", firstName=" + firstName + ", email=" + email + ", phone="
				+ phone + ", avatar=" + avatar + ", status=" + status + ", password=" + password + ", role=" + role
				+ ", verificationCode=" + verificationCode + ", enabled=" + enabled + "]";
	}
}
