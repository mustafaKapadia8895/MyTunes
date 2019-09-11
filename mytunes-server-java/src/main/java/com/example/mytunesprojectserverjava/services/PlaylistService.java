package com.example.mytunesprojectserverjava.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.example.mytunesprojectserverjava.models.Playlist;
import com.example.mytunesprojectserverjava.models.PlaylistContent;
import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.models.User;
import com.example.mytunesprojectserverjava.repositories.PlaylistContentRepository;
import com.example.mytunesprojectserverjava.repositories.PlaylistRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PlaylistService {

    @Autowired
    PlaylistRepository playlistRepository;

    @Autowired
    PlaylistContentRepository playlistContentRepository;

    public Playlist create(User usr, Playlist playlist) {
        playlist.setUser(usr);
        return playlistRepository.save(playlist);
    }

    public Playlist addSongsToPlaylist(Integer playlistId, PlaylistContent  playlistContent) {
        Optional<Playlist> playlist = playlistRepository.findById(playlistId);
        if (playlist.isPresent()) {
            Playlist play = playlist.get();
            playlistContent.setPlaylist(play);
            playlistContentRepository.save(playlistContent);
            return getPlaylist(play.getId());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Playlist");
    }

    public Playlist deleteSongFromPlaylist(Integer playlistId, String  songId) {
        PlaylistContent playlistContent = new PlaylistContent();
        Optional<Playlist> playlist = playlistRepository.findById(playlistId);
        if (playlist.isPresent()) {
            Playlist play = playlist.get();
            playlistContent.setPlaylist(play);
            playlistContent.setSpotifyTrackId(songId);
            playlistContentRepository.delete(playlistContent);
            return getPlaylist(play.getId());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Playlist");
    }

    public void deletePlaylist(Integer id) {
        playlistRepository.deleteById(id);
    }

    public Playlist getPlaylist(Integer id) {
        Optional<Playlist> playlist = playlistRepository.findById(id);
        if (playlist.isPresent()) {
            Playlist play = playlist.get();
            String songids = play.getSongs().stream().map(song -> song.getSpotifyTrackId()).collect(Collectors.joining(","));
            System.out.println("songids: `" + songids + "`");
            if (!songids.equals(""))  {
                try {
                    play.setSpotifySongs(SpotifyService.findTracksById(songids));
                } catch (IOException e) {
                    e.printStackTrace();
                }
            } else {
                play.setSpotifySongs(new ArrayList<SpotifyTrack>());
            }
            System.out.println("returning play");
            return play;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid Playlist");
    }

    public List<Playlist> getAllPlaylistForUser(User usr) {
        List<Playlist> plays = playlistRepository.findPlaylistsForUser(usr.getId());
        return plays.stream().map(playlist -> this.getPlaylist(playlist.getId())).collect(Collectors.toList());
    }
}