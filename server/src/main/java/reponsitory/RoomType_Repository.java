package reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.RoomType_Entity;

public interface RoomType_Repository extends JpaRepository<RoomType_Entity, String> {

}
