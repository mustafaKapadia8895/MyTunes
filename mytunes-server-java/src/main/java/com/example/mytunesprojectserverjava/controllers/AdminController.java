package com.example.mytunesprojectserverjava.controllers;

import java.util.List;

import com.example.mytunesprojectserverjava.models.Admin;
import com.example.mytunesprojectserverjava.models.LoginForm;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.AdminService;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class AdminController {

    @Autowired
    UserService userService;

    @Autowired
    AdminService adminService;

    @PostMapping("/api/admin")
    public void create(@RequestBody Admin data) {
        if (data.getKey().equals("svm-special-key")) {
            adminService.create(data);
            return;
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid key");
        }
    }

    @PostMapping("/api/admin/login")
    public String login(@RequestBody LoginForm data) {
        Admin usr = adminService.findAdminByUsername(data.getUsername());
        if (usr != null && usr.getPassword().equals(data.getPassword())) {
            return Session.getSessionKeyAdmin(usr.getId());
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid admin");
    }

    @GetMapping("/api/admin/user")
    public List<User> findAll(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        if (adminService.isAdmin(Session.getIdFromSessionStringAdmin(sessionString))) {
            return userService.findAll();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Method only allowed for admins");
    }

    @DeleteMapping("/api/admin/user/{uid}")
    public void delete(@RequestHeader(AppConstants.SESSION_KEY) String sessionString, @PathVariable("uid") Integer id) {
		if (adminService.isAdmin(Session.getIdFromSessionStringAdmin(sessionString))) {
            userService.delete(id);
            return;
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Method only allowed for admins");
    }
}
