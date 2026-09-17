package com.resume.backend;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ResumeRequest(
        @NotBlank(message = "Description is required")
        @Size(max = 5000, message = "Description is too long")
        String userDescription
) {
}