package com.example.mytunesprojectserverjava.controllers;

import com.example.mytunesprojectserverjava.models.SpotifyArtist;
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
public class ArtistController {

    @GetMapping("/api/artist/{aid}")
    @ResponseBody
    public String findAlbumById(@PathVariable("aid") String artistId) {
        try {
            return new Gson().toJson(SpotifyService.findArtistById(artistId), SpotifyArtist.class);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}