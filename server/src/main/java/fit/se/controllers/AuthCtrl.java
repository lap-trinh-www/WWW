package fit.se.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.se.models.User;
import fit.se.services.AuthService;
import fit.se.services.UserService;
import fit.se.util.AuthenticationRequest;
import fit.se.util.ResponeMessage;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
public class AuthCtrl {
  @Autowired
  private UserService userService;
  @Autowired
  private AuthService authService;
  @Autowired
  HttpServletRequest request;
  private String emailUser;

  private Map<String, Integer> resetUrlUsageCount = new HashMap<>();

  @PostMapping("/register")
  public ResponseEntity<ResponeMessage> register(@RequestBody User user, HttpServletRequest request) {
    try {

      User existingUser = userService.getUser(user.getId());
      if (existingUser != null) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ResponeMessage("error", "User already exists", null));
      }
      authService.register(user, getSiteURL(request));

      return ResponseEntity.status(HttpStatus.CREATED)
          .body(new ResponeMessage("ok", "Please check your email", null));

    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Internal server error", e.getMessage()));
    }
  }

  @PostMapping("/forget-password")
  public ResponseEntity<ResponeMessage> sendEmailResetPassword(@Param("email") String email,
      HttpServletRequest request) {
    try {
      emailUser = email;
      List<User> existingUser = userService.getUsers();
      for (User user : existingUser) {
        if (user.getEmail().equals(email)) {
          authService.resetPassword(email, getSiteURL(request));
          resetUrlUsageCount.put(authService.link, 0);
          return ResponseEntity.status(HttpStatus.CREATED)
              .body(new ResponeMessage("ok", "Please check your email", null));

        } else {
          return ResponseEntity.status(HttpStatus.BAD_REQUEST)
              .body(new ResponeMessage("error", "User not exists", null));
        }
      }
      return null;
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Internal server error", e.getMessage()));
    }
  }

  @GetMapping("/forget-password/{forgetUrl}")
  public ResponseEntity<ResponeMessage> resetPassword(@PathVariable String forgetUrl) {
    try {
      if (resetUrlUsageCount.containsKey(authService.link) && resetUrlUsageCount.get(authService.link) < 1) {
        resetUrlUsageCount.put(authService.link, resetUrlUsageCount.get(authService.link) + 1); // Increment the
                                                                                                // usagecount
        return ResponseEntity.status(HttpStatus.OK)
            .body(new ResponeMessage("ok", "Login successfully", forgetUrl));
      } else {
        return ResponseEntity.status(HttpStatus.URI_TOO_LONG)
            .body(new ResponeMessage("error", "uri no longer avaliable", forgetUrl));
      }
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(new ResponeMessage("error", "Login failed", e.getMessage()));
    }
  }

  @PutMapping("/forget-password/{forgetUrl}")
  public ResponseEntity<ResponeMessage> setPassword(@Param("password") String password) {
    try {
      User user = userService.getUserByEmail(emailUser);
      if (user == null) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ResponeMessage("eror", "user not exist", null));
      } else {
        userService.forgetPassword(emailUser, password);
        return ResponseEntity.status(HttpStatus.OK)
            .body(new ResponeMessage("ok", "password have change", null));
      }
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(new ResponeMessage("error", "Login failed", e.getMessage()));
    }
  }

  private String getSiteURL(HttpServletRequest request) {
    String siteURL = request.getRequestURL().toString();
    return siteURL.replace(request.getServletPath(), "");
  }

  @GetMapping("/verify")
  public ResponseEntity<ResponeMessage> verifyUser(@Param("code") String code) {
    try {
      if (authService.verify(code) != null) {
        return ResponseEntity.status(HttpStatus.OK)
            .body(new ResponeMessage("ok", "Your account has been verified", authService.verify(code)));
      }
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(new ResponeMessage("error", "Sorry we cant verified your account", e.getMessage()));
    }
    return null;
  }

  @PostMapping("/login")
  public ResponseEntity<ResponeMessage> login(@RequestBody AuthenticationRequest request) {
    try {

      return ResponseEntity.status(HttpStatus.OK)
          .body(new ResponeMessage("ok", "Login successfully", authService.login(request)));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(new ResponeMessage("error", "Login failed", e.getMessage()));
    }
  }

  @GetMapping("/refresh")
  public ResponseEntity<ResponeMessage> refreshToken(@RequestHeader("Authorization") String token) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(new ResponeMessage("ok", "Refresh token successfully", authService.refreshToken(token)));
  }

  @GetMapping("/logout")
  public ResponseEntity<ResponeMessage> logout(@RequestHeader("Authorization") String token) {
    try {
      authService.logout(token.substring(7));
      return ResponseEntity.status(HttpStatus.OK).body(new ResponeMessage("ok", "Logout successfully", null));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponeMessage("error", "Internal server error", e.getMessage()));
    }
  }
}
