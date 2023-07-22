import React from "react";
import { Div, StyledLink } from "./Foter.styled";

function Footer() {
  return (
    <Div>
      <StyledLink to="#">Map</StyledLink>
      <StyledLink to="#">Adress</StyledLink>
      <StyledLink to="#">Telephone</StyledLink>
      <StyledLink to="#">AfishaPage</StyledLink>
    </Div>
  );
}

export default Footer;
