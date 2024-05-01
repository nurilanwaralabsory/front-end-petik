import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="m-auto text-center">
        <h1 className="title mb-5" style={{ fontSize: "9rem" }}>404</h1>
        <h2 className="mb-4 fw-bold">File Not Found</h2>
        <Link to={"/"}>
          <button className="button is-primary text-light">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
