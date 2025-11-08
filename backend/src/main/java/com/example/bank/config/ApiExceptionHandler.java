package com.example.bank.config;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestControllerAdvice
public class ApiExceptionHandler {
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String,Object>> onValidation(MethodArgumentNotValidException ex) {
    Map<String,String> errors = new LinkedHashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(fe -> errors.put(fe.getField(), fe.getDefaultMessage()));
    return ResponseEntity.badRequest().body(Map.of("status", 400, "errors", errors));
  }

  @ExceptionHandler(DuplicateKeyException.class)
  public ResponseEntity<Map<String,Object>> onDup(DuplicateKeyException ex) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("status", 409, "error", "Email already in use"));
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<Map<String,Object>> onAny(Exception ex) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body(Map.of("status", 500, "error", ex.getClass().getSimpleName(), "message", ex.getMessage()));
  }
}
