package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.BillDetail_Entity;

public interface BillDetail_Repository extends JpaRepository<BillDetail_Entity, String> {

}
