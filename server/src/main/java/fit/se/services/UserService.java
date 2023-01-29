package fit.se.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.models.User;
import fit.se.repository.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepo;

  @Autowired
  private PasswordService passwordService;

  public User addUser(User user) {
    User newUser = userRepo.findById(user.getId()).orElse(null);
    if (Objects.isNull(newUser)) {
      user.setPassword(passwordService.passwordEncoder().encode(user.getPassword()));
      userRepo.save(user);
      return user;
    }
    return null;
  }

  public List<User> getUsers() {
    List<User> list = new ArrayList<User>();
    List<User> users = userRepo.findAll();
    for (User user : users) {
      list.add(user);
    }
    return list;
  }

  public User getUser(String id) {
    User user = userRepo.findById(id).orElse(null);
    if (Objects.isNull(user)) {
      return null;
    }
    return user;
  }

  public void updateUser(User user) {
    if (userRepo.existsById(user.getId())) {
      userRepo.save(user);
    }
  }

  public void deleteUser(String id) {
    if (userRepo.existsById(id)) {
      userRepo.deleteById(id);
    }
  }

}
