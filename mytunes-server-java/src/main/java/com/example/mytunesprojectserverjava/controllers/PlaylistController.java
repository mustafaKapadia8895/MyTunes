package com.example.mytunesprojectserverjava.controllers;

import java.util.List;

import com.example.mytunesprojectserverjava.models.Playlist;
import com.example.mytunesprojectserverjava.models.PlaylistContent;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.request.AppConstants;
import com.example.mytunesprojectserverjava.request.Session;
import com.example.mytunesprojectserverjava.services.PlaylistService;
import com.example.mytunesprojectserverjava.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin("*")
public class PlaylistController {
    @Autowired
    PlaylistService playlistService;

    @Autowired
    UserService userService;

    private User getUserFromSession(String sessionString) {
        User ob = userService.findById(Session.getIdFromSessionString(sessionString));
        if (ob != null) {
            return ob;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user");
    }

    @PostMapping("/api/playlist")
    public Playlist create(@RequestHeader(AppConstants.SESSION_KEY) String sessionString,
            @RequestBody Playlist playlist) {
        User usr = getUserFromSession(sessionString);
        return playlistService.create(usr, playlist);
    }

    @GetMapping("/api/playlist/{pid}")
    public Playlist getPlaylistById(@PathVariable("pid") Integer pid) {
        System.out.println(pid);
        Playlist play = playlistService.getPlaylist(pid);
        System.out.print("returning play: " + play.getName());
        return play;
    }

    @GetMapping("/api/user/playlist")
    public List<Playlist> getPlaylistForUser(@RequestHeader(AppConstants.SESSION_KEY) String sessionString) {
        User usr = getUserFromSession(sessionString);
        return playlistService.getAllPlaylistForUser(usr);
    }

    @GetMapping("/api/user/{uid}/playlist")
    public List<Playlist> getPlaylistForUserId(@PathVariable("uid") Integer uid) {
        User usr = userService.findById(uid);
        return playlistService.getAllPlaylistForUser(usr);
    }

    @PutMapping("/api/playlist/{pid}")
    public Playlist addSongToPlaylist(@RequestHeader(AppConstants.SESSION_KEY) String sessionString,
            @PathVariable("pid") Integer pid, @RequestBody PlaylistContent songData) {
        getUserFromSession(sessionString);
        return playlistService.addSongsToPlaylist(pid, songData);
    }

    @DeleteMapping("/api/playlist/{pid}/song/{sid}")
    public Playlist deleteSongFromPlaylist(@RequestHeader(AppConstants.SESSION_KEY) String sessionString,
            @PathVariable("pid") Integer pid, @PathVariable("sid") String sid) {
        getUserFromSession(sessionString);
        return playlistService.deleteSongFromPlaylist(pid, sid);
    }

    @DeleteMapping("/api/playlist/{pid}")
    public void deletePlaylist(@RequestHeader(AppConstants.SESSION_KEY) String sessionString,
            @PathVariable("pid") Integer pid) {
        getUserFromSession(sessionString);
        playlistService.deletePlaylist(pid);
    }

}