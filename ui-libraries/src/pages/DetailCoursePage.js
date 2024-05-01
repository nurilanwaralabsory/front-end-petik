import React from "react";
import DetailCourse from "../components/DetailCourse";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const DetailCoursePage = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <DetailCourse></DetailCourse>
      <Footer></Footer>
    </div>
  );
};

export default DetailCoursePage;
