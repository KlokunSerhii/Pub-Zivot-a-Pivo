import React from "react";
import img from "../../img/logo.jpg";
import { Div, Logo, StyledLink } from "./Navigation.styled";

function Navigation() {
  return (
    <Div>
      <StyledLink to="/">
        <Logo src={img} alt={"logo"} />
      </StyledLink>

      <StyledLink to="/">HomePage</StyledLink>
      <StyledLink to="/profile">ProfilePage</StyledLink>
      <StyledLink to="/menu">MenuPage</StyledLink>
      <StyledLink to="/afisha">AfishaPage</StyledLink>
    </Div>
  );
}

export default Navigation;
