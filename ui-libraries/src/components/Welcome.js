import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <ht className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </ht>
    </div>
  );
};

export default Welcome;
