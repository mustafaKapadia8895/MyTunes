import axios from "axios";
import Constants from "../Constants";

class FollowService {
  followUser({ sessionId, user }) {
    console.log(sessionId, user.id);
    var config = {
      headers: { "svm-session": sessionId }
    };
    const url = Constants.BASE_URL + "/user/" + user.id + "/follow";
    return axios.post(url, {}, config).then(res => res);
  }

  getFollows({ sessionId, userId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    var url = Constants.BASE_URL + "/user";
    if (userId !== undefined) url = url + "/" + userId;
    url += "/follows";
    return axios.get(url, config).then(res => res);
  }

  getFollowers({ sessionId, userId }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    var url = Constants.BASE_URL + "/user";
    if (userId !== undefined) url = url + "/" + userId;
    url += "/followers";
    return axios.get(url, config).then(res => res);
  }
}

export default new FollowService();
