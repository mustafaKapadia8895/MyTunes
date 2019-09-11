const host =
  // eslint-disable-next-line no-restricted-globals
  location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:8080/api"
    : "https://mytuness.herokuapp.com/api";

export default {
  BASE_URL: host
};
