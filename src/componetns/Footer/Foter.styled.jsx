import styled from "@emotion/styled";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";

export const Div = styled.div`
  background-color: #0f0f0f;
`;
export const StyledLink = styled.a`
  font-weight: 700;
  font-size: 20px;
  margin-right: 15px;
  line-height: 1.14;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #ffffff;
  &:hover {
    color: orange;
  }
`;
export const Adsress = styled.address`
  width: 500px;
`;
export const ItemAddress = styled.li`
  margin-bottom: 10px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  height: 200px;
`;
export const Facebook = styled(BsFacebook)`
  width: 40px;
  height: 40px;
`;
export const Instagram = styled(BiLogoInstagram)`
  width: 50px;
  height: 50px;
`;
export const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const SocialLink = styled.a`
  display: block;
  color: #ffffff;
  &:hover {
    color: orange;
  }
`;
