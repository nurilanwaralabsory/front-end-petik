import axios from "axios";

const apiKey = "802383317aeb8565473249c5e1f58e71";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );

  return movie.data.results;
};

export const getPopularMovie = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=2&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getTopRated = async () => {
  const movie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);
  return movie.data.results;
};

export const getDetailMovie = async (movieId) => {
  const movie = await axios.get(
    `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
  );
  return movie.data;
};
