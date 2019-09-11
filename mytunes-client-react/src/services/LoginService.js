import axios from "axios";
import Constants from "../Constants";

class LoginService {
  initiateLogin({ username, password, admin }) {
    const user = { username: username, password: password };
    var url = Constants.BASE_URL + "/user/login";
    if (admin) url = Constants.BASE_URL + "/admin/login";
    return axios.post(url, user).then(res => res);
  }
}

export default new LoginService();
