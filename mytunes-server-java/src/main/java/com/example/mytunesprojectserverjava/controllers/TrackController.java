package com.example.mytunesprojectserverjava.controllers;

import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.services.SpotifyService;
import com.google.gson.Gson;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class TrackController {

    @GetMapping("/api/track/{tid}")
    @ResponseBody
    public String findTrackById(@PathVariable("tid") String trackId) {
        try {
            return new Gson().toJson(SpotifyService.findTrackById(trackId), SpotifyTrack.class);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}