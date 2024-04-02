import { useParams } from "react-router-dom";
import Movie from "../../components/Movie/Movie";
import { getDetailMovie } from "../../api";
import { useState, useEffect } from "react";

const Detail = () => {
  let { id } = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDetailMovie(id).then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Detail</h2>
      <div className="movies-container">
        <Movie
          title={datas.title}
          poster={datas.poster_path}
          overview={datas.overview}
        />
      </div>
    </div>
  );
};

export default Detail;
