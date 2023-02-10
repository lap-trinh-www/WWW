package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fit.se.models.RoomType;

public interface RoomTypeRepository extends JpaRepository<RoomType, String> {

}
