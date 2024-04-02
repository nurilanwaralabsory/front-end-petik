import { useEffect, useState } from "react";
import { getPopularMovie } from "../../api";
import Movie from "../../components/Movie/Movie";

const Popular = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getPopularMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Popular movies</h2>
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

export default Popular;
