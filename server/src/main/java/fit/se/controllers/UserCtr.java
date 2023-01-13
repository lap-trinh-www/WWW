package fit.se.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserCtr {
  @Autowired
  private UserService userService;

  @PostMapping(value = {
      "", "/insert"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public ResponseEntity<HashMap<String, Object>> addUser(@RequestBody User user) {

    try {

      User newUser = userService.addUser(user);
      System.out.println(newUser);
      HashMap<String, Object> response = HashMapConverter.toHashMap(user);
      response.remove("password");
      return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
      if (e.getMessage().equals("Password is required")) {
        HashMap<String, Object> res = new HashMap<>();
        res.put("message", e.getMessage());
        return new ResponseEntity<>(
            res,
            HttpStatus.BAD_REQUEST);
      }

      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping(value = {
      "", "/"
  })
  public ResponseEntity<List<HashMap<String, Object>>> getUsers() {
    try {
      List<User> users = userService.getUsers();
      List<HashMap<String, Object>> response = new ArrayList<>();
      for (User user : users) {
        HashMap<String, Object> userResponse = HashMapConverter.toHashMap(user);
        userResponse.put("id", user.getId());
        userResponse.put("lastName", user.getLastName());
        userResponse.put("firstName", user.getFirstName());
        userResponse.put("email", user.getEmail());
        userResponse.put("phone", user.getPhone());
        userResponse.put("avatar", user.getAvatar());
        userResponse.put("status", user.isStaus());
        response.add(userResponse);
      }
      return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/{userId}")
  public ResponseEntity<HashMap<String, Object>> getUser(@PathVariable String userId) {
    try {
      User user = userService.getUser(userId);
      if (user == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      HashMap<String, Object> response = HashMapConverter.toHashMap(user);
      return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping(value = {
      "", "/update"
  }, consumes = {
      "application/json",
      "application/x-www-form-urlencoded"
  })
  public void updateUser(@RequestBody User user) {
    userService.updateUser(user);
  }

  @DeleteMapping("/{userId}")
  public void deleteUser(@PathVariable String userId) {
    userService.deleteUser(userId);
  }
}
