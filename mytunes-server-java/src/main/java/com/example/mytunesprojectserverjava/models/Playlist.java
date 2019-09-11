package com.example.mytunesprojectserverjava.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Table(name="playlist")
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JsonIgnore
    private User user;

    private String name;

    @OneToMany(mappedBy = "playlist", cascade = CascadeType.ALL )
    @JsonIgnore
    private List<PlaylistContent> songs;

    @Transient
    @JsonInclude()
    private List<SpotifyTrack> spotifySongs;

    public List<SpotifyTrack> getSpotifySongs() {
        return this.spotifySongs;
    }

    public void setSpotifySongs(List<SpotifyTrack> spotifySongs) {
        this.spotifySongs = spotifySongs;
    }

    public Integer getSongCount() {
        return this.songs != null ? this.songs.size() : 0;
    }

    public List<PlaylistContent> getSongs() {
        return this.songs;
    }

    public void setSongs(List<PlaylistContent> songs) {
        this.songs = songs;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}