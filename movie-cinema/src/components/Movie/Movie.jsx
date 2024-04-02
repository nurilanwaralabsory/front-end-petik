import { NavLink } from "react-router-dom";
import "./Movie.css";

const Movie = (props) => {
  const { title, year, genre, poster, id, voteAverage, voteCount, overview } =
    props;
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="" />
      <h3 className="title">
        <NavLink to={`/detail/${id}`}>{title}</NavLink>
      </h3>
      <p>{year}</p>
      <p>{genre}</p>
      <p>{voteAverage}</p>
      <p>{voteCount}</p>
      <p>{overview}</p>
    </div>
  );
};

export default Movie;
