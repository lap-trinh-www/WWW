package fit.se.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.se.models.Room;
import fit.se.services.RoomService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("api/rooms")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoomCtrl {

    @Autowired
    private RoomService roomService;

    @GetMapping(value = {
        "", "/"
    })
    public ResponseEntity<ResponeMessage> getRoom() {
        try {
            List<Map<String, Object>> roomsMap = new ArrayList<>();
            List<Room> rooms = roomService.getRooms();
            for (Room room : rooms) {
                HashMap<String, Object> response = HashMapConverter.toHashMap(room);
                response.remove("bills");
                roomsMap.add(response);
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", roomsMap));
        } catch (Exception e) {
            // TODO: handle exception
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping(value = {
        "", "/add"
    }, consumes = {
        "application/json",
        "application/x-www-form-urlencoded"
    })
    public ResponseEntity<ResponeMessage> addRoom(@RequestBody Room room) {
        
      try {
        roomService.addRoom(room);
  
        return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
      } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ResponeMessage("error", "Not found", e.getMessage()));
      }
    }
    @GetMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> getRoomById(@PathVariable String roomId) {
    try {
      Room room = roomService.getRoom(roomId);
      if (room == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(room);
      response.remove("bills");
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", response));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @PutMapping(value = {
      "", "/update"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public ResponseEntity<ResponeMessage> updateRoom(@RequestBody Room newRoom) {
    try {
      Room room = roomService.getRoom(newRoom.getRoom_ID());
      if (room == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      roomService.updateRoom(newRoom);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @DeleteMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> deleteRoom(@PathVariable String roomId) {
    try {
        Room room = roomService.getRoom(roomId);
      if (room == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      roomService.deleteRoom(roomId);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

}
