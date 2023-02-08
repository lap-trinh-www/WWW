package fit.se.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import fit.se.models.RefreshToken;
import fit.se.models.User;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

  Optional<RefreshToken> findRefreshTokenByToken(String token);

  Optional<RefreshToken> findByUser(User user);

  void deleteByToken(String token);

  @Modifying
  int deleteByUser(User user);
}
