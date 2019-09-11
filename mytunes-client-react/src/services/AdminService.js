import axios from "axios";
import Constants from "../Constants";

class AdminService {
  getAllUsers({ sessionId }) {
    var config = {
      headers: { "svm-special-key": sessionId }
    };
    const url = Constants.BASE_URL + "/admin/user";
    return axios.get(url, config).then(res => res);
  }

  deleteUser({ sessionId, userId }) {
    var config = {
      headers: { "svm-special-key": sessionId }
    };
    const url = Constants.BASE_URL + "/admin/user/" + userId;

    return axios.delete(url, config).then(res => res);
  }
}

export default new AdminService();
