import axios from "axios";

const http = axios.create();

if (import.meta.env.PROD) {
  http.defaults.baseURL = "https://islandcrossing.anaelbonnafous.fr";
}

export default http;
