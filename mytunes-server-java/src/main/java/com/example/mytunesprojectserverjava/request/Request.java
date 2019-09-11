package com.example.mytunesprojectserverjava.request;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class Request {
    private String baseUrl;

    public Request(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    private HttpURLConnection getConnection(String queryParams) throws MalformedURLException, IOException {
        URL url = new URL(this.baseUrl + queryParams);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        return con;
    }

    private String getParamsString(Map<String, String> params) throws UnsupportedEncodingException{
        StringBuilder result = new StringBuilder();
 
        for (Map.Entry<String, String> entry : params.entrySet()) {
          result.append(URLEncoder.encode(entry.getKey(), "UTF-8"));
          result.append("=");
          result.append(URLEncoder.encode(entry.getValue(), "UTF-8"));
          result.append("&");
        }
 
        String resultString = result.toString();
        return resultString.length() > 0
            ? resultString.substring(0, resultString.length() - 1)
            : resultString;
    }

    private void addHeaders(HttpURLConnection con, Map<String, String> headers) {
        for (Map.Entry<String, String> entry : headers.entrySet()) {
            con.setRequestProperty(entry.getKey(), entry.getValue());
        }
    }

    // private void makeRequest(HttpURLConnection con, String params) throws IOException {
    //     con.setDoOutput(true);
    //     DataOutputStream out = new DataOutputStream(con.getOutputStream());
    //     out.writeBytes(params);
    //     out.flush();
    //     out.close();
    // }

    private String readResponse(HttpURLConnection con) throws IOException {
        int status = con.getResponseCode();

        Reader streamReader = null;
        if (status > 299) {
            InputStream stream = con.getErrorStream();
            if (stream == null) {
                throw new IOException("Something went wrong calling Spotify API");
            }
            streamReader = new InputStreamReader(stream);
        } else {
            streamReader = new InputStreamReader(con.getInputStream());
        }

        BufferedReader in = new BufferedReader(streamReader);
        String inputLine;
        StringBuffer content = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();

        if (status  > 299) {
            throw new IOException(content.toString());
        }

        return content.toString();
    }

    public String get(String uri, Map<String, String> params, Map<String, String> headers)
            throws MalformedURLException, IOException {
        String strParams = this.getParamsString(params);
        String queryParams = uri + (strParams.length() > 0 ? "?"+strParams : "");
        System.out.println("uri: " + queryParams);
        HttpURLConnection con = this.getConnection(queryParams);
        try {
            con.setRequestMethod("GET");
            this.addHeaders(con, headers);
            String response = this.readResponse(con);
            con.disconnect();
            return response;
        } catch(Exception e) {
            con.disconnect();
            throw e;
        }
    }

    public String post(String uri, Map<String, String> params, Map<String, String> headers)
            throws MalformedURLException, IOException {
        String strParams = this.getParamsString(params);
        byte[] postData = strParams.getBytes( StandardCharsets.UTF_8 );
        int postDataLength = postData.length;

        HttpURLConnection con = this.getConnection(uri);
        try {
            con.setDoOutput( true );
            con.setInstanceFollowRedirects( false );
            con.setRequestMethod( "POST" );

            headers.put("Content-Type", "application/x-www-form-urlencoded"); 
            headers.put("charset", "utf-8");
            headers.put("Content-Length", Integer.toString( postDataLength ));
            this.addHeaders(con, headers);
            con.setUseCaches( false );

            con.getOutputStream().write(postData);

            String response = this.readResponse(con);
            con.disconnect();
            return response;
        } catch(Exception e) {
            con.disconnect();
            throw e;
        }
    }
}