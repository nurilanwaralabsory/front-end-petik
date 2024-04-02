import { useState, useEffect } from "react";
import Movie from "../../components/Movie/Movie";
import { getTopRated } from "../../api";

const TopRated = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Top Rated movies</h2>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
              voteAverage={`Vote Average: ${data.vote_average}`}
              voteCount={`Vote Count: ${data.vote_count}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
