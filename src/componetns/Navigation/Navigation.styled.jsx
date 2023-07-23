import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  margin-right: 15px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #ffffff;

  &.active {
    color: orange;
  }
`;

export const NavDiv = styled.div`
  margin-left: 400px;
`;
