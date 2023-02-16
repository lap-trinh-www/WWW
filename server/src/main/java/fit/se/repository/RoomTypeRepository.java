package fit.se.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fit.se.models.RoomType;

public interface RoomTypeRepository extends JpaRepository<RoomType, String> {
    @Query(value="select * from room_type rt where rt.type_id= :id", nativeQuery=true)
    RoomType getById(String id);
}
