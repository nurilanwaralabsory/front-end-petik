import User from "../User/User";
import Car from "../Car/Car";
import "./Main.css";
import toyotaImage from "../../assets/toyota.jpeg";

const Main = () => {
  return (
    <div className="content">
      {/* <User
        nama="Ucup"
        member="Platinum"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Bambang"
        member="Gold"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Budi"
        member="Silver"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Zainal"
        member="Diamond"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Anggi"
        member="Gold"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Dewi"
        member="Silver"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Ririn"
        member="Diamond"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Jamalatus"
        member="Gold"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Abzhor"
        member="Gold"
        message={() => alert("Profil nama telah dibuka")}
      />
      <User
        nama="Nuril"
        member="Diamond"
        message={() => alert("Profil nama telah dibuka")}
      /> */}
      <Car image={toyotaImage} merk="Toyota" harga="Rp 5.000.000" />
      <Car image={toyotaImage} merk="Toyota" harga="Rp 5.000.000" />
      <Car image={toyotaImage} merk="Toyota" harga="Rp 5.000.000" />
      <Car image={toyotaImage} merk="Toyota" harga="Rp 5.000.000" />
    </div>
  );
};

export default Main;
