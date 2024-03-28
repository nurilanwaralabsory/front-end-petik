import "./Movie.css";

const Movie = (props) => {
  const { title, year, genre, poster } = props;
  return (
    <div className="movie">
      <img src={poster} alt="" />
      <h3 className="title">{title}</h3>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Movie;
