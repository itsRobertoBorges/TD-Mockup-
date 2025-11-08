package com.example.bank.User;

import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

@Service
public class AppUserDetailsService implements UserDetailsService {

  private final AppUserRepository repo;

  public AppUserDetailsService(AppUserRepository repo) {
    this.repo = repo;
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    AppUser u = repo.findByEmail(email)
        .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));

    // Return a Spring Security User with the stored (BCrypt) hash
    return new User(
        u.getEmail(),
        u.getPasswordHash(),
        List.of(new SimpleGrantedAuthority("ROLE_USER"))
    );
  }
}
