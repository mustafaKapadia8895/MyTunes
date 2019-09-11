package com.example.mytunesprojectserverjava.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.mytunesprojectserverjava.models.SpotifyAlbum;
import com.example.mytunesprojectserverjava.models.SpotifyArtist;
import com.example.mytunesprojectserverjava.models.SpotifyTrack;
import com.example.mytunesprojectserverjava.request.Request;
import com.example.mytunesprojectserverjava.request.SpotifyConstants;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

public class SpotifyService {

    public static List<SpotifyTrack> search(String query) throws MalformedURLException, IOException {
        Request req = new Request(SpotifyConstants.SPOTIFY_BASE_URL);

        Map<String, String> params = new HashMap<String, String>();
        Map<String, String> headers = new HashMap<String, String>();

        params.put("q", query);
        params.put("type", "track");

        headers.put("Authorization", "Bearer " + SpotifyAuthService.getToken());

        String resp = req.get(SpotifyConstants.SEARCH_URI, params, headers);
        JsonObject json = new Gson().fromJson(resp, JsonObject.class);

        String trackJson = json.get("tracks").getAsJsonObject().get("items").getAsJsonArray().toString();
        return new Gson().fromJson(trackJson, new TypeToken<List<SpotifyTrack>>() {}.getType());
    }

    public static List<SpotifyTrack> homepage() throws MalformedURLException, IOException {
        Request req = new Request(SpotifyConstants.SPOTIFY_BASE_URL);

        Map<String, String> params = new HashMap<String, String>();
        Map<String, String> headers = new HashMap<String, String>();

        // dummy seeds to get some recommendations..
        params.put("seed_artists", "4NHQUGzhtTLFvgF5SZesLK");
        params.put("seed_tracks", "0c6xIDDpzE81m2q797ordA");
        params.put("type", "track");

        headers.put("Authorization", "Bearer " + SpotifyAuthService.getToken());

        String resp = req.get(SpotifyConstants.RECOMMENDATIONS_URI, params, headers);
        JsonObject json = new Gson().fromJson(resp, JsonObject.class);

        String trackJson = json.get("tracks").getAsJsonArray().toString();
        return new Gson().fromJson(trackJson, new TypeToken<List<SpotifyTrack>>() {}.getType());
    }

    public static SpotifyTrack findTrackById(String id) throws MalformedURLException, IOException {
        return new Gson().fromJson(findById(id, SpotifyConstants.TRACKS_URI), SpotifyTrack.class);
    }

    public static List<SpotifyTrack> findTracksById(String commaSeparatedIds) throws MalformedURLException, IOException {
        Map<String, String> params = new HashMap<String, String>();
        Map<String, String> headers = new HashMap<String, String>();
        params.put("ids", commaSeparatedIds);

        String resp = sendQuery(SpotifyConstants.TRACKS_URI, params, headers);
        JsonObject json = new Gson().fromJson(resp, JsonObject.class);
        String trackJson = json.get("tracks").getAsJsonArray().toString();

        return new Gson().fromJson(trackJson, new TypeToken<List<SpotifyTrack>>() {}.getType());
    }

    public static SpotifyAlbum findAlbumById(String id) throws MalformedURLException, IOException {
        return new Gson().fromJson(findById(id, SpotifyConstants.ALBUMS_URI), SpotifyAlbum.class);
    }

    public static SpotifyArtist findArtistById(String id) throws MalformedURLException, IOException {
        return new Gson().fromJson(findById(id, SpotifyConstants.ARTISTS_URI), SpotifyArtist.class);
    }

    public static String findById(String id, String path) throws MalformedURLException, IOException {

        Map<String, String> params = new HashMap<String, String>();
        Map<String, String> headers = new HashMap<String, String>();
        return sendQuery(path + "/" + id, params, headers);
    }

    public static String sendQuery(String url, Map<String, String> params, Map<String, String> headers) throws MalformedURLException, IOException {
        Request req = new Request(SpotifyConstants.SPOTIFY_BASE_URL);
        headers.put("Authorization", "Bearer " + SpotifyAuthService.getToken());

        return req.get(url, params, headers);
    }
}