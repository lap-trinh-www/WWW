package fit.se.services;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  public boolean checkPassword(String rawPassword, String encryptedPassword) {
    return new BCryptPasswordEncoder().matches(rawPassword, encryptedPassword);
  }

}
