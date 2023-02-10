package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fit.se.models.Room;

public interface RoomRepository extends JpaRepository<Room, String> {

}
