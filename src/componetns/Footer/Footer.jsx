import React from "react";
import {
  Adsress,
  Container,
  Div,
  Facebook,
  Instagram,
  ItemAddress,
  SocialDiv,
  SocialLink,
  StyledLink,
} from "./Foter.styled";

function Footer() {
  return (
    <Div>
      <Container>
        <Adsress>
          <ul>
            <ItemAddress>
              <StyledLink
                href="https://goo.gl/maps/RNRZxrHwS6TUi6HV9"
                target="_blank"
                rel="noreferrer noopener"
              >
                вул. Гетьмана Полуботка, 22 Чернігів
              </StyledLink>
            </ItemAddress>
            <ItemAddress>
              <StyledLink href="mailto:admin.restaurant.chernigov@reikartz.com">
                admin.restaurant.chernigov@reikartz.com
              </StyledLink>
            </ItemAddress>
            <ItemAddress>
              <StyledLink href="tel:+380673216214">
                +38 (067) 3216214
              </StyledLink>
            </ItemAddress>
          </ul>
        </Adsress>
        <SocialDiv>
          <SocialLink href="https://www.instagram.com/zivot_a_pivo/">
            <Instagram />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/zivot.a.pivo">
            <Facebook />
          </SocialLink>
        </SocialDiv>
      </Container>
    </Div>
  );
}

export default Footer;
// BiLogoInstagram;
// BsFacebook;
