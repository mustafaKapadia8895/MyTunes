package com.example.mytunesprojectserverjava.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User create(User user) {
        User usr = findUserByUsername(user.getUsername());
        if (usr != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Duplicate username");
        }
        return repository.save(user);
    }

    public User findById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public User findUserByUsername(String uname) {
        return repository.findUserByUsername(uname);
    }

    public List<User> findAll() {
        List<User> target = new ArrayList<>();
        repository.findAll().forEach(target::add);
        return target;
    }
    public List<User> searchUsers(String query) {
        List<User> target = new ArrayList<>();
        repository.searchUsers(query).forEach(target::add);
        return target;
    }

    public User update(Integer id, User user) {
        Optional<User> ob = repository.findById(id);
        if (ob.isPresent()) {
            user.setId(id);
            return repository.save(user);
        }
        return null;
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
}