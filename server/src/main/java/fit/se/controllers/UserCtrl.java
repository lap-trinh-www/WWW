package fit.se.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

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

import fit.se.models.User;
import fit.se.services.UserService;
import fit.se.util.HashMapConverter;
import fit.se.util.ResponeMessage;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserCtrl {
  @Autowired
  private UserService userService;

  @GetMapping(value = {
      "", "/"
  })
  // bug: get all user but not return data for client
  public ResponseEntity<ResponeMessage> getUsers() throws InterruptedException, ExecutionException {
    try {
      List<Map<String, Object>> usersMap = new ArrayList<>();
      List<User> users = userService.getUsers();
      for (User user : users) {
        HashMap<String, Object> response = HashMapConverter.toHashMap(user);
        response.remove("password");
        response.remove("refreshToken");
        response.remove("verificationCode");

        usersMap.add(response);
      }

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", usersMap));
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping(value = {
      "", "/add"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public ResponseEntity<ResponeMessage> addUser(@RequestBody User user) {
    try {
      userService.addUser(user);

      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @GetMapping("/{userId}")
  public ResponseEntity<ResponeMessage> getUser(@PathVariable String userId) {
    try {
      User user = userService.getUser(userId);
      if (user == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(user);
      response.remove("password");
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
  public ResponseEntity<ResponeMessage> updateUser(@RequestBody User newUser) {
    try {
      User user = userService.getUser(newUser.getId());
      if (user == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      userService.updateUser(newUser);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<ResponeMessage> deleteUser(@PathVariable String userId) {
    try {
      User user = userService.getUser(userId);
      if (user == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      userService.deleteUser(userId);
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "success", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Not found", e.getMessage()));
    }
  }
}
