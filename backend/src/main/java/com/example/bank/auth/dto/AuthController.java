package com.example.bank.auth.dto;

import com.example.bank.User.AppUser;
import com.example.bank.User.AppUserRepository;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
// Dev-only: also allow direct browser calls from Vite origin
@CrossOrigin(origins = { "http://localhost:5173", "http://127.0.0.1:5173" }, allowCredentials = "true")
public class AuthController {
  private final AppUserRepository repo;
  private final PasswordEncoder encoder;

  public AuthController(AppUserRepository repo, PasswordEncoder encoder) {
    this.repo = repo;
    this.encoder = encoder;
  }

  @GetMapping("/ping")
  public Map<String,Object> ping() { return Map.of("ok", true, "time", Instant.now().toString()); }

  @PostMapping("/register")
  public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest req) {
    final String email = req.getEmail().toLowerCase();
    if (repo.existsByEmail(email)) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", "Email already in use"));
    }
    AppUser u = new AppUser();
    u.setEmail(email);
    u.setFullName(req.getFullName().trim());
    u.setPasswordHash(encoder.encode(req.getPassword()));
    u.setCreatedAt(Instant.now());
    AppUser saved = repo.save(u);
    return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
      "id", saved.getId(),
      "email", saved.getEmail(),
      "fullName", saved.getFullName(),
      "createdAt", saved.getCreatedAt().toString()
    ));
  }
}
 
