import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid black;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  margin-right: 15px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #0f0f0f;

  &.active {
    color: orange;
  }
`;
