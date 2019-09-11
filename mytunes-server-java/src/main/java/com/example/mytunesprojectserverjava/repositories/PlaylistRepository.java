package com.example.mytunesprojectserverjava.repositories;

import java.util.List;

import com.example.mytunesprojectserverjava.models.Playlist;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PlaylistRepository extends CrudRepository<Playlist, Integer> {

    @Query("SELECT playlist from Playlist playlist where user_id=:uid")
    public List<Playlist> findPlaylistsForUser(@Param("uid") Integer uid);

}