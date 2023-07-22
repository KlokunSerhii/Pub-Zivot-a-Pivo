import React from "react";
import { NavLink } from "react-router-dom";

function AppBar() {
  return (
    <div>
      <NavLink
        to="/"
        style={{ marginRight: "10px" }}
      >
        HomePage
      </NavLink>
      <NavLink
        to="/profile"
        style={{ marginRight: "10px" }}
      >
        ProfilePage
      </NavLink>

      <NavLink
        to="/menu"
        style={{ marginRight: "10px" }}
      >
        MenuPage
      </NavLink>

      <NavLink
        to="/afisha"
        style={{ marginRight: "10px" }}
      >
        AfishaPage
      </NavLink>

      <NavLink
        to="/register"
        style={{ marginRight: "10px" }}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        style={{ marginRight: "10px" }}
      >
        LogIn
      </NavLink>
    </div>
  );
}

export default AppBar;
