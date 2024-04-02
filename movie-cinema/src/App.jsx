import Header from "./components/Navbar/Navbar";
import Car from "./components/Car/Car";
import User from "./components/User/User";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
