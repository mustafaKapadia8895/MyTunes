import axios from "axios";
import Constants from "../Constants";

class LoginService {
  initiateLogin({ username, password, firstName, lastName }) {
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    const url = Constants.BASE_URL + "/user";
    return axios.post(url, user).then(res => res);
  }
}

export default new LoginService();
