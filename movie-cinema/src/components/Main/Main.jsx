import User from "../User/User";
import Car from "../Car/Car";
import "./Main.css";
import Movies from "../Movies/Movies";
import toyotaImage from "../../assets/toyota.jpeg";
import Hero from "../Hero/Hero";
import Counter from "../Counter/Counter";

const Main = () => {
  return (
    <div className="content">
      <Hero />
      <Movies />
      {/* {datas.map((data) => {
        return (
          <User
            nama={data.nama}
            member={data.member}
            message={() => alert(data.nama)}
          />
        );
      })} */}
    </div>
  );
};

export default Main;
