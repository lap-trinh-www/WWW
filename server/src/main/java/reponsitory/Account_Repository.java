package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Account_Entity;

public interface Account_Repository extends JpaRepository<Account_Entity, String> {

}
