package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fit.se.models.Account;

public interface AccountRepo extends JpaRepository<Account, Integer> {

}
