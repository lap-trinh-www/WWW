package fit.se.services;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.models.Role;
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
      user.setStatus(false);
      user.setRole(Role.USER);
      user.setVerificationCode(null);
      user.setEnabled(true);
      userRepo.save(user);
      return user;
    }
    return null;
  }

  public List<User> getUsers() {
    return userRepo.findAll();
  }

  public User getUserByEmail(String email) {
    User user = userRepo.findByEmail(email).orElse(null);
    if (Objects.isNull(user)) {
      return null;
    }
    return user;
  }

  public boolean changePassword(String id, String password) {
    User user = userRepo.findById(id).orElse(null);
    if (Objects.nonNull(user)) {
      user.setPassword(passwordService.passwordEncoder().encode(password));
      userRepo.save(user);
      return true;
    }
    return false;
  }

  public boolean forgetPassword(String email, String password) {
    User user = userRepo.findByEmail(email).orElse(null);
    if (Objects.nonNull(user)) {
      user.setPassword(passwordService.passwordEncoder().encode(password));
      userRepo.save(user);
      return true;
    }
    return false;
  }

  public User getUser(String id) {
    User user = userRepo.findById(id).orElse(null);
    if (Objects.isNull(user)) {
      return null;
    }
    return user;
  }

  public boolean updateUser(User oldUser, User user) {
    if (Objects.nonNull(user)) {
      user.setRole(oldUser.getRole());
      user.setEnabled(true);
      user.setPassword(passwordService.passwordEncoder().encode(user.getPassword()));

      userRepo.save(user);
      return true;
    }
    return false;
  }

  public boolean deleteUser(String id) {
    if (userRepo.existsById(id)) {
      userRepo.deleteById(id);
      return true;
    }
    return false;
  }

}
