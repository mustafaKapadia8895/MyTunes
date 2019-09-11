package com.example.mytunesprojectserverjava.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Map;

import com.example.mytunesprojectserverjava.request.Request;
import com.example.mytunesprojectserverjava.request.SpotifyConstants;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class SpotifyAuthService {
    public static String getToken() throws MalformedURLException, IOException {
        Request r = new Request(SpotifyConstants.SPOTIFY_AUTH_URL);

        Map<String, String> params = new HashMap<String, String>();
        Map<String, String> headers = new HashMap<String, String>();

        params.put("grant_type", "client_credentials");
        headers.put("Authorization", "Basic YTZiZGExNWUxNDJlNGMzN2IyOGVlZGUyYzc1N2I2ODc6OGM2MTNiZWRiZWYxNDRmNjg2MjM5ZGUyMGQ3NDUwZWY=");
        
        String resp = r.post(SpotifyConstants.TOKEN_URI, params, headers);
        JsonObject json = new Gson().fromJson(resp, JsonObject.class);
        return json.get("access_token").getAsString();
    }
}