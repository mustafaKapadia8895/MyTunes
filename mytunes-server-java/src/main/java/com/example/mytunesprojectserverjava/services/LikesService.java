package com.example.mytunesprojectserverjava.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.example.mytunesprojectserverjava.models.Likes;
import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.repositories.LikesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class  LikesService {

    @Autowired
    LikesRepository likesRepository;
    
    public void likeSong(Likes data, User usr) {
        //  check if user already likes  the song 
        List<Likes> prevLikes = likesRepository.findUserLikes(usr.getId());
        for (Likes likeData : prevLikes) {
            if (likeData.getSpotifyTrackId().equals(data.getSpotifyTrackId()))  {
                likesRepository.delete(likeData);
                return;
            }
        }
        // if user does not already  like  the song, add  to likes
        data.setUser(usr);
        likesRepository.save(data);
    }

    public List<SpotifyTrack> getUserLikes(User usr) {
        String songids = likesRepository.findUserLikes(usr.getId())
            .stream().map(data ->  data.getSpotifyTrackId()).collect(Collectors.joining(","));
        System.out.println("songids: `" + songids + "`");
        
        if (!songids.equals(""))  {
            try {
                return SpotifyService.findTracksById(songids);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return new ArrayList<SpotifyTrack>();
    }
}