import React from "react";
import Hero from "../components/Hero";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Hero></Hero>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
