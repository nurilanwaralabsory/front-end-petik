import React from 'react'
import "bulma/css/bulma.min.css";
import {NavLink} from "react-router-dom";
import logo from "../../images/1-2.png";

const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box">
                <div className="field gap-2 has-text-centered">
                  <NavLink to={"/"}>
                    <figure className="image is-128x128 mx-auto mb-3">
                      <img className="is-rounded" src={logo} alt="logo-petik" width={100} />
                    </figure>
                  </NavLink>
                  <h3 className="title has-text-primary">Register</h3>
                </div>
                <div className="field">
                  <label className="label" htmlFor="nama">
                    Nama
                  </label>
                  <input id="nama" type="text" className="input" placeholder="Masukkan nama" />
                  {/* input role user */}
                  <input type="hidden" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" className="input" placeholder="Masukkan email" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input id="password" type="password" className="input" placeholder="****************" />
                </div>
                <div className="field">
                  <label className="label" htmlFor="confPassword">
                    Confirm Password
                  </label>
                  <input id="confPassword" type="password" className="input" placeholder="****************" />
                </div>
                <div className="field">
                  <button type="submit" className="button has-text-light is-success is-fullwidth">
                    Login
                  </button>
                </div>
                <div className="field">
                  <p>
                    Sudah punya akun? <NavLink to={"/login"}>Login</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register
