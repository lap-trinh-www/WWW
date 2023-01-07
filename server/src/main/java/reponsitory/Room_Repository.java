package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Room_Entity;

public interface Room_Repository extends JpaRepository<Room_Entity, String> {

}
