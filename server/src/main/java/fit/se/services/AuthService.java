package fit.se.services;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import fit.se.models.RefreshToken;
import fit.se.models.Role;
import fit.se.models.User;
import fit.se.repository.RefreshTokenRepository;
import fit.se.repository.UserRepository;
import fit.se.util.AuthenticationRequest;
import fit.se.util.AuthenticationResponse;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthService {
  @Autowired
  private UserRepository userRepo;
  @Autowired
  private JavaMailSender mailSender;
  @Autowired
  private PasswordService passwordService;
  @Autowired
  private Jwtservice jwtService;

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private RefreshTokenRepository refreshTokenRepository;
  @Autowired
  private AuthenticationManager authenticationManager;

  public void register(User user, String siteURL) throws UnsupportedEncodingException, MessagingException {
    String encodedPassword = passwordService.passwordEncoder().encode(user.getPassword());
    user.setPassword(encodedPassword);

    UUID randomCode = UUID.randomUUID();
    user.setVerificationCode(randomCode.toString());
    user.setEnabled(false);
    user.setRole(Role.USER);
    userRepo.save(user);
    sendVerificationEmail(user, siteURL);

  }

  private void sendVerificationEmail(User user, String siteURL)
      throws MessagingException, UnsupportedEncodingException {
    String toAddress = user.getEmail();
    String fromAddress = "alexbanjaman87@gmail.com";
    String senderName = "Hotel";
    String subject = "Please verify your registration";
    String content = "Dear [[name]],<br>" + "Please click the link below to verify your registration:<br>"
        + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>" + "Thank you,<br>" + "Hotel.";

    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setFrom(fromAddress, senderName);
    helper.setTo(toAddress);
    helper.setSubject(subject);

    content = content.replace("[[name]]", user.getFirstName());
    String verifyURL = siteURL + "/api/auth/verify?code=" + user.getVerificationCode();

    content = content.replace("[[URL]]", verifyURL);

    helper.setText(content, true);

    mailSender.send(message);

  }

  public AuthenticationResponse verify(String verificationCode) {
    User user = userRepo.findByVerificationCode(verificationCode);
    if (user == null || !user.isEnabled()) {
      throw new IllegalArgumentException("Invalid code");
    } else {
      var refresh = RefreshToken.builder().token(jwtService.generateRefreshToken(user))
          .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)).user(user).build();
      refreshTokenRepository.save(refresh);
      var token = jwtService.generateAccessToken(user);
      var refreshToken = jwtService.generateRefreshToken(user);
      user.setVerificationCode(null);
      user.setEnabled(true);
      userRepo.save(user);
      return AuthenticationResponse.builder().accessToken(token).refreshToken(refreshToken).build();
    }
  }

  public AuthenticationResponse login(AuthenticationRequest request) {
    authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
    var user = userRepository.findByEmail(request.getEmail()).orElseThrow(
        () -> new IllegalArgumentException("User with email " + request.getEmail() + " not found"));
    var tokenOpt = refreshTokenRepository.findByUser(user); // take refresh token from db
    if (!tokenOpt.isPresent()) {
      var refresh = RefreshToken.builder().token(jwtService.generateRefreshToken(user))
          .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)).user(user).build();
      refreshTokenRepository.save(refresh);
      String accesToken = jwtService.generateAccessToken(user);
      return AuthenticationResponse.builder().accessToken(accesToken).refreshToken(refresh.getToken())
          .firstName(user.getFirstName()).lastName(user.getLastName()).avatar(user.getAvatar())
          .email(user.getEmail()).build();
    } else {

      var token = tokenOpt.get();
      String newToken = jwtService.generateRefreshToken(user);
      token.setToken(newToken);
      token.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)); // 30 days
      refreshTokenRepository.save(token);

      String accesToken = jwtService.generateAccessToken(user);

      return AuthenticationResponse.builder().accessToken(accesToken).refreshToken(newToken)
          .firstName(user.getFirstName()).lastName(user.getLastName()).avatar(user.getAvatar())
          .email(user.getEmail()).role(user.getRole().toString()).build();
    }
  }

  public AuthenticationResponse refreshToken(String rfToken) {

    var tokenOpt = refreshTokenRepository.findRefreshTokenByToken(rfToken);
    User user = tokenOpt.get().getUser();
    if (user == null) {
      // refreshTokenRepository.delete(tokenOpt.get());
      // throw new IllegalArgumentException("Refresh token not found");
      System.out.println("Refresh token not found");
      return null;
    }

    String token = jwtService.refreshToken(rfToken);
    String accessToken = jwtService.generateAccessToken(user);
    return AuthenticationResponse.builder().accessToken(accessToken).refreshToken(token)
        .firstName(user.getFirstName()).lastName(user.getLastName()).avatar(user.getAvatar())
        .email(user.getEmail()).build();
  }

  public void logout(String rfToken) {
    var tokenOpt = refreshTokenRepository.findRefreshTokenByToken(rfToken);
    refreshTokenRepository.delete(tokenOpt.get());

  }

}
