import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #0f0f0f;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100px;
`;
export const StyledLink = styled(NavLink)`
  font-weight: 700;
  margin-right: 15px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #ffffff;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;
