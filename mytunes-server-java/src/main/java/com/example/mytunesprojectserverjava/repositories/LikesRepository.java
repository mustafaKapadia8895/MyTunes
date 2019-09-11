package com.example.mytunesprojectserverjava.repositories;

import java.util.List;

import com.example.mytunesprojectserverjava.models.Likes;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface LikesRepository extends CrudRepository<Likes, Integer> {

    @Query("SELECT likes from Likes likes where user_id=:uid")
    public List<Likes> findUserLikes(@Param("uid") Integer uid);

}