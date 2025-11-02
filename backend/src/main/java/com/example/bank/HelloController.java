package main.java.com.example.bank;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/v1/health")
    public String health() {
        return "Backend is running ✅";
    }
}
