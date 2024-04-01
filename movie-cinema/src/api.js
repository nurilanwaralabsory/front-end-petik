import axios from "axios";

const apiKey = "802383317aeb8565473249c5e1f58e71";

export const getMovieList = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );

  return movie.data.results;
};

export const getDetailMovie = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/763215?api_key=${apiKey}`
  );
  return movie.data.results;
};
