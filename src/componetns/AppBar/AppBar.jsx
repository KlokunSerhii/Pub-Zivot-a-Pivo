import React from "react";
import Navigation from "../Navigation/Navigation";
import { Header, StyledLink } from "./AppBar.staled";

function AppBar() {
  return (
    <Header>
      <Navigation />
      <div>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">LogIn</StyledLink>
      </div>
    </Header>
  );
}

export default AppBar;
