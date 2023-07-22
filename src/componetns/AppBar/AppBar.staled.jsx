import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid black;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 700;
  margin-right: 15px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #0f0f0f;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;
