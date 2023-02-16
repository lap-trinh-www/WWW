package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fit.se.models.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, String> {

}
