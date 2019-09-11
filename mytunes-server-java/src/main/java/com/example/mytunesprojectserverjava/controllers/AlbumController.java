package com.example.mytunesprojectserverjava.controllers;

import com.example.mytunesprojectserverjava.models.SpotifyAlbum;
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
public class AlbumController {

    @GetMapping("/api/album/{aid}")
    @ResponseBody
    public String findAlbumById(@PathVariable("aid") String albumId) {
        try {
            return new Gson().toJson(SpotifyService.findAlbumById(albumId), SpotifyAlbum.class);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}