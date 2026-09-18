package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    private ChatClient chatClient;

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {


        String promptString = this.loadPromptFromFile("resume_prompt.txt");
        String promptContent = this.putValuesToTemplate(promptString, Map.of(
                "userDescription", userResumeDescription
        ));
        Prompt prompt = new Prompt(promptContent);  // template + userDescription

        ChatResponse chatResponse = chatClient.prompt(prompt).call().chatResponse();
        Generation generation = chatResponse.getResult();
        AssistantMessage assistantMessage = generation.getOutput();

        String content = assistantMessage.getText();
        String thinking = (String) assistantMessage.getMetadata().get("thinking");

        Map<String, Object> result = new HashMap<>();
        result.put("think", thinking != null ? thinking.trim() : null);

        // JSON extract karo content se (</think> leftover ko bhi handle karega automatically
        // kyunki hum sirf ```json...``` ke beech ka content nikal rahe hain)

        int jsonStartIdx = content.indexOf("```json");
        int jsonEndIdx = content.lastIndexOf("```");
        if (jsonStartIdx != -1 && jsonEndIdx != -1 && jsonStartIdx < jsonEndIdx) {
            String jsonContent = content.substring(jsonStartIdx + 7, jsonEndIdx).trim();
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                result.put("data", dataContent);
            } catch (Exception e) {
                result.put("data", null);
                System.err.println("Invalid JSON format in the response: " + e.getMessage());
            }
        } else {
            result.put("data", null);
        }

        return result;

    }

    String loadPromptFromFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        try (InputStream inputStream = resource.getInputStream()) {
            return new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
        }
    }

    String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {

            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());

        }
        return template;
    }
}

