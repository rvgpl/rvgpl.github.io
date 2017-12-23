import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../styled/container";
import Logo from "./Logo";

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoWrapper to={"/"}>
        <Logo />
      </LogoWrapper>

      <Nav>
        <NavItem to={"/thoughts"}> Thoughts </NavItem>
        <NavItem to={"/photos"}> Photos </NavItem>
      </Nav>
    </HeaderContainer>
  </HeaderWrapper>
);

// Styles
const HeaderWrapper = styled.header`margin: 4rem auto;`;

const LogoWrapper = styled(Link)`background-image: none;`;

const Nav = styled.nav`
  padding: 1rem;
  list-style: none;
  text-align: center;

  @media (min-width: 800px) {
    padding: 0;
    margin: 0;
    text-align: left;
  }
`;

const NavItem = styled(Link)`
  font-family: monospace;
  padding: 1rem;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  color: black;
  letter-spacing: 1px;
  text-shadow: none;
  background-image: none;

  @media (min-width: 800px) {
    margin: 0 10px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export default Header;
