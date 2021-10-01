export const API_KEY = "string for your API key";

export const URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video";

export const IFRAME_URL = "https://www.youtube.com/embed/";

export function previewImgUrl(videoID) {
  return `http://img.youtube.com/vi/${videoID}/mqdefault.jpg`;
}