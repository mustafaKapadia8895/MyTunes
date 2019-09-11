package com.example.mytunesprojectserverjava.services;

import com.example.mytunesprojectserverjava.models.Admin;
import com.example.mytunesprojectserverjava.repositories.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    AdminRepository repository;

    public Admin create(Admin user) {
        return repository.save(user);
    }

    public Admin findAdminByUsername(String uname) {
        return repository.findUserByUsername(uname);
    }

    public Boolean isAdmin(Integer id) {
        return repository.findById(id).isPresent();
    }

    // public Admin findById(Integer id) {
    //     return repository.findById(id).orElse(null);
    // }

    // public List<Admin> findAll() {
    //     List<Admin> target = new ArrayList<>();
    //     repository.findAll().forEach(target::add);
    //     return target;
    // }

    // public Admin update(Integer id, Admin user) {
    //     Optional<Admin> ob = repository.findById(id);
    //     if (ob.isPresent()) {
    //         user.setId(id);
    //         return repository.save(user);
    //     }
    //     return null;
    // }

    // public void delete(Integer id) {
    //     repository.deleteById(id);
    // }
}
