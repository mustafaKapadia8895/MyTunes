package com.example.mytunesprojectserverjava.controllers;

import java.lang.reflect.Type;
import java.util.List;

import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.services.SpotifyService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class HomeController {

    @GetMapping("/api/home")
    @ResponseBody
    public String homepage() {
        try {
            Type listType = new TypeToken<List<SpotifyTrack>>() {}.getType();
            return new Gson().toJson(SpotifyService.homepage(), listType);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}