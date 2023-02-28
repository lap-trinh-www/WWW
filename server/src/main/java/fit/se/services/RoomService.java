package fit.se.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.dto.RoomDTO;
import fit.se.models.Room;
import fit.se.models.RoomType;
import fit.se.repository.RoomRepository;

@Service
public class RoomService {

  @Autowired
  private RoomRepository roomRepository;

  @Autowired
  private RoomTypeService roomTypeService;

  @Autowired
  private ModelMapper modelMapper;



  public RoomDTO convertEntityToDTO(Room room) {
    RoomDTO roomDTO = new RoomDTO();
    roomDTO = modelMapper.map(room, RoomDTO.class);
    return roomDTO;
  }
  
  public Room convertDTOToEntity(RoomDTO roomDTO) {
    Room room = new Room();
    room.setRoom_ID(roomDTO.getRoom_ID());
    room.setRoomName(roomDTO.getRoomName());
    room.setImages(roomDTO.getImages());
    room.setLimitQuantity(roomDTO.getLimitQuantity());
    room.setVote(roomDTO.getVote());
    room.setAcreage(roomDTO.getAcreage());
    room.setServices(roomDTO.getServices());
    room.setDescription(roomDTO.getDescription());
    room.setPrice(roomDTO.getPrice());
    room.setRoomType(new RoomType(roomDTO.getType_ID()));
    return room;
  }

  public RoomDTO addRoom(RoomDTO newRoomDTO) {
    Room room = convertDTOToEntity(newRoomDTO);
    
    if ( roomRepository.findById(room.getRoom_ID()).orElse(null) == null) {
      roomRepository.save(room);
      return convertEntityToDTO(room);
    }
    return null;
  }

  public List<RoomDTO> getRooms() {

    return roomRepository.findAll().stream().map(this::convertEntityToDTO).collect(Collectors.toList());
  }

  public RoomDTO getRoom(String id) {
    Room room = roomRepository.findById(id).orElse(null);
    if (room == null)
      return null;
    else {
      return convertEntityToDTO(room);
    }
  }

  public boolean updateRoom(Room newRoom) {
    Room room = roomRepository.findById(newRoom.getRoom_ID()).orElse(null);
    if (room != null) {
      roomRepository.save(newRoom);
      return true;
    }
    return false;
  }

  public boolean deleteRoom(String id) {
    if (roomRepository.existsById(id)) {
      roomRepository.deleteById(id);
      return true;
    }
    return false;
  }
}
