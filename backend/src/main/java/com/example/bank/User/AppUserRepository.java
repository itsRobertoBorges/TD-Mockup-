package com.example.bank.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface AppUserRepository extends MongoRepository<AppUser, String> {
  boolean existsByEmail(String email);
  Optional<AppUser> findByEmail(String email);
}
