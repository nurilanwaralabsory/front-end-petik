import { useParams } from "react-router-dom";

const Detail = () => {
  // menggunakan useParams untuk menangkap parameter id dari URL
  let { id } = useParams();
  return (
    <div>
      <h1>Details</h1>
      <p>Parameter id : {id}</p>
    </div>
  );
};

export default Detail;
