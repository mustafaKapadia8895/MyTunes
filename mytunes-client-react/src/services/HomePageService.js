import axios from "axios";
import Constants from "../Constants";

class HomePageService {
  getSongs(payload) {
    const url = Constants.BASE_URL + "/home";
    return axios.get(url).then(res => res);
  }
}

export default new HomePageService();
