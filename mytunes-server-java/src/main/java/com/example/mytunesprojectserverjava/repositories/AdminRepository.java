package com.example.mytunesprojectserverjava.repositories;

import com.example.mytunesprojectserverjava.models.Admin;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends CrudRepository<Admin, Integer> {

    @Query("SELECT admin from Admin admin where username=:uname")
    public Admin findUserByUsername(@Param("uname") String username);

}