package com.example.mytunesprojectserverjava.controllers;

import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.repositories.UserRepository;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class TestController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/api/health")
    public void health() {

    }

    @GetMapping("/api/session-test")
    public Integer sessionTest(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        Integer id = Session.getIdFromSessionString(sessionString);
        assert id == Session.getIdFromSessionString(Session.getSessionKey(id));
        return id;
    }

    @GetMapping("/api/session-test-2/{uid}")
    public Integer sessionTest(@PathVariable("uid") Integer id) {
        System.out.println("User-" + Session.getSessionKey(id));
        Integer _id = Session.getIdFromSessionString(Session.getSessionKey(id));
        assert id == _id;

        System.out.println("Admin-" + Session.getSessionKeyAdmin(id));
        _id = Session.getIdFromSessionStringAdmin(Session.getSessionKeyAdmin(id));
        assert id == _id;

        return id;
    }

    @GetMapping("/api/test-user-follows")
    public void testUserFollows()  {
        User usr1 = userService.findById(1);
        User usr2 = userService.findById(2);
        User usr3 = userService.findById(3);
        User usr4 = userService.findById(4);

        // usr1.addToFollows(usr2);
        // usr1.addToFollows(usr3);
        // usr1.addToFollows(usr4);
        // userRepository.save(usr1);

        usr2.addToFollows(usr1);
        userRepository.save(usr2);

        usr3.addToFollows(usr4);
        userRepository.save(usr3);

        usr4.addToFollows(usr3);
        userRepository.save(usr4);
    }
}
