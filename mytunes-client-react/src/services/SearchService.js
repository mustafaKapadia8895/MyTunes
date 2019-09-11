import axios from "axios";
import Constants from "../Constants";

class SearchService {
  searchTracks(searchTerm) {
    const url = Constants.BASE_URL + "/search?q=" + searchTerm;
    return axios.get(url).then(res => res);
  }
  searchUsers(searchTerm) {
    const url = Constants.BASE_URL + "/search_user?query=" + searchTerm;
    return axios.get(url).then(res => res);
  }
}

export default new SearchService();
