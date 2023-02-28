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

  public String link;

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
    String senderName = "StarlightHotel";
    String subject = "Please verify your registration";
    String content = "<h3>Dear [[name]],</h3>"
        + "Have a nice day! <br>To continue to register an account at our hotel. Please click the link below to verify your registration:<br>"
        + "<h2><a style='text-decoration: none' href=\"[[URL]]\" target=\"_self\">VERIFY</a></h2>"
        + "Thank you for registering an account in our hotel.<hr>"
        + "<table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td width='150' style='vertical-align: middle;'><span class='template3__ImageContainer-sc-vj949k-0 kElCTu' style='margin-right: 20px; display: block;'><img src='https://drive.google.com/uc?id=1DEFYYLLzItUAW9vBM2-8FBqI3rSHLtGR' role='presentation' width='130' class='image__StyledImage-sc-hupvqm-0 fQKUvi' style='max-width: 130px;'></span></td><td style='vertical-align: middle;'><h2 color='#000000' class='name__NameContainer-sc-1m457h3-0 hkyYrA' style='margin: 0px; font-size: 16px; color: rgb(0, 0, 0); font-weight: 600;'><span>Starlight</span><span>&nbsp;</span><span>Hotel</span></h2><p color='#000000' font-size='small' class='job-title__Container-sc-1hmtp73-0 iJcqpv' style='margin: 0px; color: rgb(0, 0, 0); font-size: 12px; line-height: 20px;'><span>Always serves!</span></p></td><td width='30'><div style='width: 30px;'></div></td><td color='#f2547d' direction='vertical' width='1' height='auto' class='color-divider__Divider-sc-1h38qjv-0 dcKmvZ' style='width: 1px; border-bottom: none; border-left: 1px solid rgb(242, 84, 125);'></td><td width='30'><div style='width: 30px;'></div></td><td style='vertical-align: middle;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr height='25' style='vertical-align: middle;'><td width='30' style='vertical-align: middle;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td style='vertical-align: bottom;'><span color='#f2547d' width='11' class='contact-info__IconWrapper-sc-mmkjr6-1 hBHfIp' style='display: inline-block; background-color: rgb(242, 84, 125);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png' color='#f2547d' alt='mobilePhone' width='13' class='contact-info__ContactLabelIcon-sc-mmkjr6-0 dGVIJx' style='display: block; background-color: rgb(242, 84, 125);'></span></td></tr></tbody></table></td><td style='padding: 0px; color: rgb(0, 0, 0);'><a href='tel:111 222 333' color='#000000' class='contact-info__ExternalLink-sc-mmkjr6-2 bibcmr' style='text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;'><span>111 222 333</span></a></td></tr><tr height='25' style='vertical-align: middle;'><td width='30' style='vertical-align: middle;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td style='vertical-align: bottom;'><span color='#f2547d' width='11' class='contact-info__IconWrapper-sc-mmkjr6-1 hBHfIp' style='display: inline-block; background-color: rgb(242, 84, 125);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png' color='#f2547d' alt='emailAddress' width='13' class='contact-info__ContactLabelIcon-sc-mmkjr6-0 dGVIJx' style='display: block; background-color: rgb(242, 84, 125);'></span></td></tr></tbody></table></td><td style='padding: 0px;'><a href='mailto:hello@gmail.com' color='#000000' class='contact-info__ExternalLink-sc-mmkjr6-2 bibcmr' style='text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;'><span>hello@gmail.com</span></a></td></tr><tr height='25' style='vertical-align: middle;'><td width='30' style='vertical-align: middle;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td style='vertical-align: bottom;'><span color='#f2547d' width='11' class='contact-info__IconWrapper-sc-mmkjr6-1 hBHfIp' style='display: inline-block; background-color: rgb(242, 84, 125);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png' color='#f2547d' alt='website' width='13' class='contact-info__ContactLabelIcon-sc-mmkjr6-0 dGVIJx' style='display: block; background-color: rgb(242, 84, 125);'></span></td></tr></tbody></table></td><td style='padding: 0px;'><a href='//www.starlighthotel.com' color='#000000' class='contact-info__ExternalLink-sc-mmkjr6-2 bibcmr' style='text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;'><span>www.starlighthotel.com</span></a></td></tr><tr height='25' style='vertical-align: middle;'><td width='30' style='vertical-align: middle;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td style='vertical-align: bottom;'><span color='#f2547d' width='11' class='contact-info__IconWrapper-sc-mmkjr6-1 hBHfIp' style='display: inline-block; background-color: rgb(242, 84, 125);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png' color='#f2547d' alt='address' width='13' class='contact-info__ContactLabelIcon-sc-mmkjr6-0 dGVIJx' style='display: block; background-color: rgb(242, 84, 125);'></span></td></tr></tbody></table></td><td style='padding: 0px;'><span color='#000000' class='contact-info__Address-sc-mmkjr6-3 fhjLwd' style='font-size: 12px; color: rgb(0, 0, 0);'><span>123</span></span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='width: 100%; vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td height='30'></td></tr><tr><td color='#f2547d' direction='horizontal' width='auto' height='1' class='color-divider__Divider-sc-1h38qjv-0 dcKmvZ' style='width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;'></td></tr><tr><td height='30'></td></tr></tbody></table></td></tr><tr><td><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='width: 100%; vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr><td style='vertical-align: top;'></td><td style='text-align: right; vertical-align: top;'><table cellpadding='0' cellspacing='0' class='table__StyledTable-sc-1avdl6r-0 jWJRxL' style='display: inline-block; vertical-align: -webkit-baseline-middle; font-size: small; font-family: Verdana;'><tbody><tr style='text-align: right;'><td><a href='//hfghgf' color='#6a78d1' class='social-links__LinkAnchor-sc-py8uhj-2 jhqNFe' style='display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png' alt='facebook' color='#6a78d1' height='24' class='social-links__LinkImage-sc-py8uhj-1 kLZBAf' style='background-color: rgb(106, 120, 209); max-width: 135px; display: block;'></a></td><td width='5'><div></div></td><td><a href='//fghfg' color='#6a78d1' class='social-links__LinkAnchor-sc-py8uhj-2 jhqNFe' style='display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png' alt='twitter' color='#6a78d1' height='24' class='social-links__LinkImage-sc-py8uhj-1 kLZBAf' style='background-color: rgb(106, 120, 209); max-width: 135px; display: block;'></a></td><td width='5'><div></div></td><td><a href='//vbvcb' color='#6a78d1' class='social-links__LinkAnchor-sc-py8uhj-2 jhqNFe' style='display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png' alt='linkedin' color='#6a78d1' height='24' class='social-links__LinkImage-sc-py8uhj-1 kLZBAf' style='background-color: rgb(106, 120, 209); max-width: 135px; display: block;'></a></td><td width='5'><div></div></td><td><a href='//fgh' color='#6a78d1' class='social-links__LinkAnchor-sc-py8uhj-2 jhqNFe' style='display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);'><img src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png' alt='instagram' color='#6a78d1' height='24' class='social-links__LinkImage-sc-py8uhj-1 kLZBAf' style='background-color: rgb(106, 120, 209); max-width: 135px; display: block;'></a></td><td width='5'><div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height='30'></td></tr></tbody></table>";

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

  public void resetPassword(String email, String userName)
      throws UnsupportedEncodingException, MessagingException {
    String toAddress = email;
    String pathClient = "http://localhost:3000";
    String fromAddress = "alexbanjaman87@gmail.com";
    String senderName = "StarlightHotel";
    String subject = "Please verify your registration";
    link = pathClient + "/forgot-password/" + UUID.randomUUID().toString();

    String content = "<p>Hello " + userName
        + ",</p>"
        + "<p>You have requested to reset your password.</p>"
        + "<p>Click the link below to change your password:</p>"
        + "<p><a href=\"[[URL]]\" target=\"_self\">Change my password</a></p>"
        + "<br>"
        + "<p>Ignore this email if you do remember your password, "
        + "or you have not made the request.</p>";

    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setFrom(fromAddress, senderName);
    helper.setTo(toAddress);
    helper.setSubject(subject);

    content = content.replace("[[URL]]", link);

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
          .phone(user.getPhone())
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
        .email(user.getEmail()).role(user.getRole().toString()).build();
  }

  public void logout(String rfToken) {
    var tokenOpt = refreshTokenRepository.findRefreshTokenByToken(rfToken);
    refreshTokenRepository.delete(tokenOpt.get());

  }

}
