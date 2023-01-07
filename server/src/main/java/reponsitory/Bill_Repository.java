package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Bill_Entity;

public interface Bill_Repository extends JpaRepository<Bill_Entity, String> {

}
