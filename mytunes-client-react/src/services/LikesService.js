import axios from "axios";
import Constants from "../Constants";

class LikesService {
  likeSong({ sessionId, song }) {
    const likesData = { spotifyTrackId: song.id };

    var config = {
      headers: { "svm-session": sessionId }
    };
    const url = Constants.BASE_URL + "/like";
    return axios.post(url, likesData, config).then(res => res);
  }

  getLikedSongs({ sessionId, userId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    var url = Constants.BASE_URL + "/user";
    if (userId !== undefined) url = url + "/" + userId;
    url += "/like";
    console.log(url);
    return axios.get(url, config).then(res => res);
  }
}

export default new LikesService();
