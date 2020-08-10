// API/TMDBApi.js

const API_TOKEN = "b5bc32ebf4c1376b9311de34f474bb8d";

export function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
