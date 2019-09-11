package com.example.mytunesprojectserverjava.models;

import java.util.List;

public class SpotifyArtist {
    private String href;
    private String id;
    private String name;
    private String type;
    private String uri;
    private List<String> genres;
    private ArtistFollowers followers;
    private List<SpotifyImage> images;

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public ArtistFollowers getFollowers() {
        return followers;
    }

    public void setFollowers(ArtistFollowers followers) {
        this.followers = followers;
    }

    public List<SpotifyImage> getImages() {
        return images;
    }

    public void setImages(List<SpotifyImage> images) {
        this.images = images;
    }
}