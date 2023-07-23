import React from "react";
import Navigation from "../Navigation/Navigation";
import {
  Container,
  Header,
  StyledLink,
} from "./AppBar.staled";

function AppBar() {
  return (
    <Header>
      <Container>
        <Navigation />
        <div>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">LogIn</StyledLink>
        </div>
      </Container>
    </Header>
  );
}

export default AppBar;
