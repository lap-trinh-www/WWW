package fit.se.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
  private String accessToken;
  private String refreshToken;
  private String lastName;
  private String firstName;
  private String email;
  private String avatar;
  private String phone;
  private String role;
}
