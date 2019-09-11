package com.example.mytunesprojectserverjava.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.mytunesprojectserverjava.models.LoginForm;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/api/user")
    public String create(@RequestBody User user) {
        User usr = service.create(user);
        return Session.getSessionKey(usr.getId());
    }

    @PostMapping("api/user/login")
    public String login(@RequestBody LoginForm data) {
        User usr = service.findUserByUsername(data.getUsername());
        if (usr != null && usr.getPassword().equals(data.getPassword())) {
            return Session.getSessionKey(usr.getId());
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid user");
    }

    private User getUser(Integer id) {
        User ob = service.findById(id);
        if (ob != null) {
            return ob;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user");
    }

    @GetMapping("/api/user/{uid}")
    public User findById(@PathVariable("uid") Integer id) {
        User usr = getUser(id);
        usr.setPassword(null);
        return usr;
    }
    @GetMapping("/api/search_user")
    public List<User> searchUsers(@RequestParam String query) {
        List<User> users= new ArrayList<>();
        if (query.isEmpty()){

            return users;
        }
        users.addAll(service.searchUsers(query));
        users.forEach(user -> user.setPassword(null));
        return users;
    }

    @GetMapping("/api/user")
    public User getProfile(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        return this.getUser(Session.getIdFromSessionString(sessionString));
    }

    @PutMapping("/api/user/{uid}")
    public User update(@RequestHeader(AppConstants.SESSION_KEY) String sessionString, @PathVariable("uid") Integer id, @RequestBody User user) {
        int sessionUserId = Session.getIdFromSessionString(sessionString);
        if (sessionUserId != id) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Session id and user id don't match");
        }
        User ob = service.update(id, user);
        if (ob != null) {
            return ob;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Id");
    }

    // @DeleteMapping("/api/user/{uid}")
    // public void delete(@PathVariable("uid") Integer id) {
    //     service.delete(id);
    // }
}