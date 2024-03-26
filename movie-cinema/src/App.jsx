import Header from "./components/Navbar/Navbar";
import Car from "./components/Car/Car";
import User from "./components/User/User";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  const user = [
    {
      nama: "Ucup",
      member: "Platinum",
    },
    {
      nama: "Bambang",
      member: "Gold",
    },
    {
      nama: "Budi",
      member: "Silver",
    },
  ];

  return (
    <div className="container">
      <Header />
      <Main />
      <Footer nama="Abzhor" />
    </div>
  );
}

export default App;
