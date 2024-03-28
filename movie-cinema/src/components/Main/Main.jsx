import User from "../User/User";
import Car from "../Car/Car";
import "./Main.css";
import Movies from "../Movies/Movies";
import toyotaImage from "../../assets/toyota.jpeg";
import Hero from "../Hero/Hero";

const Main = () => {
  const datas = [
    {
      nama: "Ucup",
      member: "Platinum",
    },
    {
      nama: "Ujeng",
      member: "Gold",
    },
    {
      nama: "Hariono",
      member: "Silver",
    },
    {
      nama: "Susmanto",
      member: "Gold",
    },
    {
      nama: "Ucup",
      member: "Bronze",
    },
    {
      nama: "Ucup",
      member: "Platinum",
    },
  ];
  return (
    <div className="content">
      <Hero />
      <Movies />
      {datas.map((data) => {
        return (
          <User
            nama={data.nama}
            member={data.member}
            message={() => alert(data.nama)}
          />
        );
      })}
    </div>
  );
};

export default Main;
