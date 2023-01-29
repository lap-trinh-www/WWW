package fit.se.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fit.se.models.User;
import fit.se.services.AuthService;
import fit.se.services.UserService;
import fit.se.util.AuthenticationRequest;
import fit.se.util.RefreshTokenRequest;
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
          .body(new ResponeMessage("error", "Internal server error", null));
    }
  }

  private String getSiteURL(HttpServletRequest request) {
    String siteURL = request.getRequestURL().toString();
    return siteURL.replace(request.getServletPath(), "");
  }

  @GetMapping("/verify")
  public ResponseEntity<ResponeMessage> verifyUser(@Param("code") String code) {
    if (authService.verify(code) != null) {
      return ResponseEntity.status(HttpStatus.OK)
          .body(new ResponeMessage("ok", "Your account has been verified", authService.verify(code)));
    } else {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST)
          .body(new ResponeMessage("error", "Your account has been verified", null));
    }
  }

  @PostMapping("/login")
  public ResponseEntity<ResponeMessage> login(@RequestBody AuthenticationRequest request) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(new ResponeMessage("ok", "Login successfully", authService.login(request)));
  }

  @GetMapping("/refresh")
  public ResponseEntity<ResponeMessage> refreshToken(@RequestHeader("Authorization") RefreshTokenRequest req) {
    System.out.println(req);
    return ResponseEntity.status(HttpStatus.OK)
        .body(new ResponeMessage("ok", "Refresh successfully", authService.refreshToken(req)));
  }
}
