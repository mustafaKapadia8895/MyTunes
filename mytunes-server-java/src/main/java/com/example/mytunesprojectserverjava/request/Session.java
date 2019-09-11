package com.example.mytunesprojectserverjava.request;

import java.util.Base64;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class Session {
    public static Integer getIdFromSessionString(String sessionString) {
        try {
            byte[] decodedBytes = Base64.getDecoder().decode(sessionString);
            String decodedString = new String(decodedBytes);
            System.out.println(decodedString);
            decodedString = decodedString.replace("user-", "");
            System.out.println(decodedString);
            return Integer.parseInt(decodedString);
        } catch (Exception exp) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid session");
        }
    }

    public static String getSessionKey(Integer id) {
        String originalInput = "user-"+id.toString();
        return Base64.getEncoder().encodeToString(originalInput.getBytes());
    }

    public static Integer getIdFromSessionStringAdmin(String sessionString) {
        try {
            byte[] decodedBytes = Base64.getDecoder().decode(sessionString);
            String decodedString = new String(decodedBytes);
            System.out.println(decodedString);
            decodedString = decodedString.replace("admin-", "");
            System.out.println(decodedString);
            return Integer.parseInt(decodedString);
        } catch (Exception exp) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid session");
        }
    }

    public static String getSessionKeyAdmin(Integer id) {
        String originalInput = "admin-"+id.toString();
        return Base64.getEncoder().encodeToString(originalInput.getBytes());
    }
}
