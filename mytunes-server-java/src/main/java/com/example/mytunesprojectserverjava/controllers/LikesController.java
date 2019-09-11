package com.example.mytunesprojectserverjava.controllers;

import java.util.List;

import com.example.mytunesprojectserverjava.models.Likes;
import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.LikesService;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class LikesController {

    @Autowired
    LikesService likesService;

    @Autowired
    UserService  userService;

    private User getUserFromSession(String sessionString) {
        User ob = userService.findById(Session.getIdFromSessionString(sessionString));
        if (ob != null) {
            return ob;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user");
    }

    @PostMapping("/api/like")
    public void likeSong(@RequestHeader(AppConstants.SESSION_KEY) String sessionString, @RequestBody Likes likedata) {
        User usr = getUserFromSession(sessionString);
        likesService.likeSong(likedata, usr);
    }

    @GetMapping("/api/user/like")
    public List<SpotifyTrack> getUserLikes(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        User usr = getUserFromSession(sessionString);
        return likesService.getUserLikes(usr);
    }

    @GetMapping("/api/user/{uid}/like")
    public List<SpotifyTrack> getUserLikes(@PathVariable("uid") Integer uid) {
        User usr = userService.findById(uid);
        return likesService.getUserLikes(usr);
    }
}