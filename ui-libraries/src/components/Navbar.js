import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "./feature/authSlice";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <div>
      <Navbar {...args} expand="md" className="navbar-dark bg-primary">
        <NavbarBrand className="me-4">
          <NavLink className="text-light text-decoration-none" to={"/"}>
            Jual-In
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto gap-3" navbar>
            <NavLink className="text-light text-decoration-none" to={"/"}>
              Home
            </NavLink>
            <NavLink className="text-light text-decoration-none" to={"/dashboard"}>
              Dashboard
            </NavLink>
            <NavLink className="text-light text-decoration-none" to={"/courses"}>
              Course
            </NavLink>
          </Nav>
          {user ? (
            <button onClick={logout} className="button is-light">
              Logout
            </button>
          ) : (
            <NavLink to={"/login"} className="button is-light text-decoration-none text-primary">
              Login
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
