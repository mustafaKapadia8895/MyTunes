package com.example.mytunesprojectserverjava.repositories;

import java.util.List;

import com.example.mytunesprojectserverjava.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, Integer> {

    @Query("SELECT user from User user where username=:uname")
    public User findUserByUsername(@Param("uname") String username);

    @Query("SELECT user from User user where username LIKE CONCAT('%',:query,'%') or firstName LIKE CONCAT('%',:query,'%') or lastName LIKE CONCAT('%',:query,'%')")
    public List<User> searchUsers(@Param("query") String query);

}