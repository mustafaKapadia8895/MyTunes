package com.example.mytunesprojectserverjava.controllers;

import java.util.Set;

import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.FollowService;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class FollowController {

    @Autowired
    UserService userService;

    @Autowired
    FollowService followService;

    private User getUserFromSession(String sessionString) {
        return getUserById(Session.getIdFromSessionString(sessionString));
    }

    private User getUserById(Integer id) {
        User ob = userService.findById(id);
        if (ob != null) {
            return ob;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user");
    }


    @PostMapping("/api/user/{uid2}/follow")
    public void follow(@RequestHeader(AppConstants.SESSION_KEY) String sessionString, @PathVariable("uid2") Integer toId)  {
        User from  = getUserFromSession(sessionString);
        User to  = getUserById(toId);

        followService.toggleFollow(from, to);
    }

    @PostMapping("/api/user/{uid1}/{uid2}/follow")
    public void follow(@PathVariable("uid1") Integer fromId, @PathVariable("uid2") Integer toId)  {
        User from  = getUserById(fromId);
        User to  = getUserById(toId);

        followService.toggleFollow(from, to);
    }

    @GetMapping("/api/user/{uid}/follows")
    public Set<User>  getFollows(@PathVariable("uid") Integer uid)   {
        User usr  = getUserById(uid);
        return  followService.getFollows(usr);
    }

    @GetMapping("/api/user/{uid}/followers")
    public Set<User>  getFollowers(@PathVariable("uid") Integer uid)   {
        User usr  = getUserById(uid);
        return  followService.getFollowers(usr);
    }

    @GetMapping("/api/user/follows")
    public Set<User>  getFollows(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        User usr  = getUserFromSession(sessionString);
        return  followService.getFollows(usr);
    }

    @GetMapping("/api/user/followers")
    public Set<User>  getFollowers(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        User usr  = getUserFromSession(sessionString);
        return  followService.getFollowers(usr);
    }
}