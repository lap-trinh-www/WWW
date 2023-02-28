package fit.se.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.models.RoomType;
import fit.se.repository.RoomTypeRepository;

@Service
public class RoomTypeService {
  @Autowired
  private RoomTypeRepository roomTypeRepository;

  public RoomType addRoomType(RoomType newRoom) {
    RoomType roomType = roomTypeRepository.findById(newRoom.getType_ID()).orElse(null);

    if (roomType == null) {

      roomTypeRepository.save(newRoom);
      return newRoom;
    }
    return null;
  }

  public List<RoomType> getRoomTypes() {
    return roomTypeRepository.findAll();
  }

  public RoomType getRoomType(String id) {
    return roomTypeRepository.findById(id).orElse(null);
  }

  public boolean updateRoomType(RoomType newRoom) {
    RoomType roomType = roomTypeRepository.findById(newRoom.getType_ID()).orElse(null);

    if (roomType != null) {
      roomTypeRepository.save(newRoom);
      return true;
    }
    return false;
  }

  public boolean deleteRoomType(String id) {
    if (roomTypeRepository.existsById(id)) {
      roomTypeRepository.deleteById(id);
      return true;
    }
    return false;
  }
}
