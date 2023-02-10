package fit.se.services;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.models.Room;
import fit.se.repository.RoomRepository;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room addRoom(Room newRoom) {
        Room room = roomRepository.findById(newRoom.getRoom_ID()).orElse(null);
        if(Objects.isNull(room)){
            roomRepository.save(newRoom);
            return newRoom;
        }
        return null;
    }

    public List<Room> getRooms() {
        return roomRepository.findAll();
    }

    public Room getRoom(String id) {
        return roomRepository.findById(id).orElse(null);
    }

    public boolean updateRoom(Room newRoom) {
        Room room = roomRepository.findById(newRoom.getRoom_ID()).orElse(null);
        System.out.println(room);
        System.out.println(newRoom);
        if(room != null){
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
