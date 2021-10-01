import axios from "axios";
import { API_KEY, URL } from "../key&URL/APIkey";

// main response
const youtubeAxios = axios.create({
  baseURL: URL,
  params: {
    key: API_KEY,
  }
});

export function searchVideos(query) {
  return youtubeAxios.get("", {
    params: {
      maxResults: 15,
      q: query,
    }
  })
}