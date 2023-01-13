package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fit.se.models.User;

public interface UserRepo extends JpaRepository<User, String> {
}
