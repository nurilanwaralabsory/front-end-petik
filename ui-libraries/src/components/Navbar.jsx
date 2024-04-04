import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink
              className="text-light mx-2"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              className="text-light mx-2"
              to={"/dashboard"}
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="text-light mx-2"
              to={"/top"}
              style={{ textDecoration: "none" }}
            >
              Top Rated
            </NavLink>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
