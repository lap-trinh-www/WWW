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

import fit.se.models.RoomType;
import fit.se.services.RoomTypeService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("api/roomTypes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoomTypeCtrl {
    @Autowired
    private RoomTypeService roomTypeService;

    @GetMapping(value = {
        "", "/"
    })
    public ResponseEntity<ResponeMessage> getRoomTypes() {
        try {
            List<Map<String, Object>> roomTypesMap = new ArrayList<>();
            List<RoomType> roomTypes = roomTypeService.getRoomTypes();
            for (RoomType roomType : roomTypes) {
                HashMap<String, Object> response = HashMapConverter.toHashMap(roomType);
                response.remove("rooms");
                roomTypesMap.add(response);
            }
            return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", roomTypesMap));
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
    public ResponseEntity<ResponeMessage> addRoomType(@RequestBody RoomType roomType) {
        
      try {
        roomTypeService.addRoomType(roomType);
  
        return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
      } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ResponeMessage("error", "Not found", e.getMessage()));
      }
    }
    @GetMapping("/{roomTypeId}")
  public ResponseEntity<ResponeMessage> getRoomTypeById(@PathVariable String roomTypeId) {
    try {
      RoomType roomType = roomTypeService.getRoomType(roomTypeId);
      if (roomType == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(roomType);
      response.remove("rooms");
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
  public ResponseEntity<ResponeMessage> updateRoomType(@RequestBody RoomType newRoomType) {
    try {
      RoomType roomType = roomTypeService.getRoomType(newRoomType.getType_ID());
      if (roomType == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      roomTypeService.updateRoomType(newRoomType);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @DeleteMapping("/{roomTypeId}")
  public ResponseEntity<ResponeMessage> deleteUser(@PathVariable String roomTypeId) {
    try {
        RoomType roomType = roomTypeService.getRoomType(roomTypeId);
      if (roomType == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      roomTypeService.deleteRoomType(roomTypeId);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }
}
