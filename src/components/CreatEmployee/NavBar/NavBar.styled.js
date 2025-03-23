import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px 0 50px 0;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  margin : 0 50px 0 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export default {
  Navbar,
  Logo,
  LogoImage,
};
