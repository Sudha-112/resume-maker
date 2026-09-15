package com.resume.backend.controller;

import com.resume.backend.dto.ContactRequest;
import com.resume.backend.model.ContactMessage;
import com.resume.backend.repository.ContactMessageRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;

    // Public endpoint - anyone visiting the Contact page can submit this,
    // so no JWT/login is required (see SecurityConfig PUBLIC_ENDPOINTS).
    @PostMapping
    public ResponseEntity<Map<String, Object>> submitContact(@Valid @RequestBody ContactRequest request) {
        ContactMessage saved = contactMessageRepository.save(
                ContactMessage.builder()
                        .name(request.name())
                        .email(request.email())
                        .message(request.message())
                        .build()
        );

        return new ResponseEntity<>(
                Map.of(
                        "id", saved.getId(),
                        "message", "Thanks! Your message has been received."
                ),
                HttpStatus.CREATED
        );
    }
}
