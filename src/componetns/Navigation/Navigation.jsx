import React from "react";
import img from "../../img/logo.jpg";
import {
  NavDiv,
  Div,
  Logo,
  StyledLink,
} from "./Navigation.styled";

function Navigation() {
  return (
    <Div>
      <StyledLink to="/">
        <Logo src={img} alt={"logo"} />
      </StyledLink>
      <NavDiv>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/posters">Posters</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
      </NavDiv>
    </Div>
  );
}

export default Navigation;
