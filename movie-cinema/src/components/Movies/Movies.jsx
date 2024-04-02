import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getMovieList, getPopularMovie } from "../../api";

const Movies = () => {
  //  nilai yang pertama itu state dan yang kedua itu method
  const [datas, setDatas] = useState([]);

  // const handleClick = () => {
  //   const movie = {
  //     title: "Amazing Spiderman",
  //     year: 2012,
  //     poster: "https://picsum.photos/200",
  //     genre: "Action",
  //   };
  //   setDatas([...datas, movie]);
  // };

  useEffect(() => {
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Latest movies</h2>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
