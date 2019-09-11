package com.example.mytunesprojectserverjava.models;

import java.util.Objects;

public class SpotifyImage {
    private int height;
    private int width;
    private String url;


    public SpotifyImage(int height, int width, String url) {
        this.height = height;
        this.width = width;
        this.url = url;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof SpotifyImage)) {
            return false;
        }
        SpotifyImage spotifyImage = (SpotifyImage) o;
        return height == spotifyImage.height && width == spotifyImage.width && Objects.equals(url, spotifyImage.url);
    }

    @Override
    public int hashCode() {
        return Objects.hash(height, width, url);
    }

    @Override
    public String toString() {
        return "{" +
            " height='" + getHeight() + "'" +
            ", width='" + getWidth() + "'" +
            ", url='" + getUrl() + "'" +
            "}";
    }


}