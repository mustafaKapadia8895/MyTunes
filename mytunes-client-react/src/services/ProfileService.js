import axios from "axios";
import Constants from "../Constants";

class ProfileService {
  getProfile({ sessionId, userId }) {
    console.log(sessionId);
    var config = {
      headers: { "svm-session": sessionId }
    };
    console.log(userId);
    var url = Constants.BASE_URL + "/user";
    if (userId !== undefined) url = url + "/" + userId;
    return axios.get(url, config).then(res => res);
  }

  updateProfile({ sessionId, newProfile }) {
    var config = {
      headers: { "svm-session": sessionId }
    };
    const url = Constants.BASE_URL + "/user/" + newProfile.id;
    return axios.put(url, newProfile, config).then(res => res);
  }
}

export default new ProfileService();
