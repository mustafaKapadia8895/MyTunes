package com.example.mytunesprojectserverjava.services;

import java.util.Set;

import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class  FollowService {

    @Autowired
    UserRepository userRepository;
    
    public  void toggleFollow(User from, User to){
        // remove follow if relationship  exists
        for (User usr : from.getFollows()) {
            if(usr.getId()  == to.getId()) {
                //remove follow
                from.getFollows().remove(usr);
                userRepository.save(from);
                return;
            }
        }

        // add follow relation
        from.addToFollows(to);
        userRepository.save(from);
    }

    public Set<User> getFollows(User usr) {
        Set<User> follows =  usr.getFollows();
        follows.stream().forEach(u -> u.setPassword(null));
        return follows;
    }

    public Set<User> getFollowers(User usr) {
        Set<User> followers =  usr.getFollowers();
        followers.stream().forEach(u -> u.setPassword(null));
        return followers;
    }
}