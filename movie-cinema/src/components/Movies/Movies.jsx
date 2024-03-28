import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = () => {
  const datas = [
    {
      title: "Judul film 1",
      year: 2022,
      genre: "Action",
      poster: "https://picsum.photos/200",
    },
    {
      title: "Judul film 2",
      year: 2021,
      genre: "Comedy",
      poster: "https://picsum.photos/200",
    },
    {
      title: "Judul film 3",
      year: 2018,
      genre: "Romance",
      poster: "https://picsum.photos/200",
    },
  ];

  return (
    <div>
      <h2>Latest movies</h2>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              genre={data.genre}
              poster={data.poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
