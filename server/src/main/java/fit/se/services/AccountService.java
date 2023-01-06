package fit.se.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fit.se.models.Account;
import fit.se.repository.AccountRepo;

@Service
public class AccountService {
  @Autowired
  private AccountRepo accountRepo;

  public Account addUser(Account user) {

    accountRepo.save(user);
    System.out.println(user);
    return user;
  }
}
