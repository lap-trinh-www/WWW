package fit.se.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fit.se.models.User;

public interface UserRepository extends JpaRepository<User, String> {
  @Query("SELECT u FROM User u WHERE u.verificationCode = ?1")
  public User findByVerificationCode(String code);

  Optional<User> findByEmail(String email);

}
