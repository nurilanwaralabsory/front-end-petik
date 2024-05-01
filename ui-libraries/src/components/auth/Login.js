import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/1-2.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../feature/authSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, isError, isSuccess, isLoading, message] = useSelector((state) => state.auth);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(
      LoginUser({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, dispatch, navigate]);
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box" onSubmit={Auth}>
                {isError && <p className="has-text-centered">{message}</p>}
                <div className="field gap-2 has-text-centered">
                  <NavLink to={"/"}>
                    <figure className="image is-128x128 mx-auto mb-3">
                      <img className="is-rounded" src={logo} alt="logo-petik" width={100} />
                    </figure>
                  </NavLink>
                  <h3 className="title has-text-primary">Login</h3>
                </div>
                <div className="field">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Masukkan email" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="****************" />
                </div>
                <div className="field">
                  <button type="submit" className="button has-text-light is-success is-fullwidth">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className="field">
                  <p>
                    Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
