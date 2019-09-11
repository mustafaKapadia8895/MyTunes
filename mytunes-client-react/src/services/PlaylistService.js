import axios from "axios";
import Constants from "../Constants";

class PlaylistService {
  getPlaylists({ sessionId, userId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    var url = Constants.BASE_URL + "/user";
    if (userId !== undefined) url = url + "/" + userId;
    url += "/playlist";
    return axios.get(url, config).then(res => res);
  }

  createPlaylist({ sessionId, playlist }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    const playlistObj = { name: playlist };
    const url = Constants.BASE_URL + "/playlist";
    return axios.post(url, playlistObj, config).then(res => res);
  }

  addSongToPlaylist({ sessionId, playlistId, song }) {
    console.log("in pl service");
    console.log(sessionId, playlistId, song);
    var config = {
      headers: { "svm-session": sessionId }
    };
    const url = Constants.BASE_URL + "/playlist/" + playlistId;
    return axios.put(url, { spotifyTrackId: song.id }, config).then(res => res);
  }

  deletePlaylist({ sessionId, playlistId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    const url = Constants.BASE_URL + "/playlist/" + playlistId;
    return axios.delete(url, config).then(res => res);
  }

  deleteSongFromPlaylist({ sessionId, playlistId, songId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    const url =
      Constants.BASE_URL + "/playlist/" + playlistId + "/song/" + songId;
    return axios.delete(url, config).then(res => res);
  }
}

export default new PlaylistService();
