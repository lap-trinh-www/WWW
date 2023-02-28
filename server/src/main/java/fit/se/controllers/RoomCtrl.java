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

import fit.se.dto.RoomDTO;
import fit.se.models.Room;
import fit.se.models.RoomType;
import fit.se.services.RoomService;
import fit.se.services.RoomTypeService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("api/rooms")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoomCtrl {

  @Autowired
  private RoomTypeService roomTypeService;

  @Autowired
  private RoomService roomService;

  @GetMapping(value = {
      "", "/"
  })
  public ResponseEntity<ResponeMessage> getRoom() {
    try {
      List<RoomDTO> roomDTOs = roomService.getRooms();
      List<Map<String, Object>> roomMaps = new ArrayList<>();

      for (RoomDTO roomDTO : roomDTOs) {
        HashMap<String, Object> response = HashMapConverter.toHashMap(roomDTO);
        response.remove("bills");
        roomMaps.add(response);
      }

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", roomMaps));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @PostMapping(value = {
      "", "/add"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public ResponseEntity<ResponeMessage> addRoom(@RequestBody RoomDTO roomDTO) {
   
    try {
      roomService.addRoom(roomDTO);

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @GetMapping("/{roomId}")
  public ResponseEntity<ResponeMessage> getRoomById(@PathVariable String roomId) {
    try {
      RoomDTO roomDTO = roomService.getRoom(roomId);

      if (roomDTO == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(roomDTO);
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
      RoomDTO roomDTO = roomService.getRoom(newRoom.getRoom_ID());
      if (roomDTO == null) {
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
      RoomDTO roomDTO = roomService.getRoom(roomId);
      if (roomDTO == null) {
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
