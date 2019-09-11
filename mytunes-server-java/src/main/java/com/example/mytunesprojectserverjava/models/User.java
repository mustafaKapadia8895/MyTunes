package com.example.mytunesprojectserverjava.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique=true)
    private String username;
    
    private String password;
    
    private String firstName;
    
    private String lastName;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Likes> likes;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Playlist> playlists;

    @ManyToMany
    @JsonIgnore
    private Set<User> follows = new HashSet<>();

    @ManyToMany(mappedBy = "follows")
    @JsonIgnore
    private Set<User> followers = new HashSet<>();

    public void addToFollows(User u) {
        this.follows.add(u);
    }

    public Set<User> getFollows() {
        return this.follows;
    }

    public Set<User> getFollowers() {
        return this.followers;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getLikeCount() {
        return this.likes != null  ? this.likes.size() : 0;
    }

    public int getPlaylistCount() {
        return this.playlists != null ? this.playlists.size() : 0;
    }

    public Integer getFollowCount() {
        return this.follows != null ? this.follows.size() : 0;
    }

    public Integer getFollowerCount() {
        return this.followers != null ? this.followers.size() : 0;
    }
    
}