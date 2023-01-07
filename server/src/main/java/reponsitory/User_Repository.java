package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.User_Entity;

public interface User_Repository extends JpaRepository<User_Entity, String> {

}
