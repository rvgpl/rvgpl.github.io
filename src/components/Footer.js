import React from "react";
import styled from "styled-components";

const Footer = () => <Wrapper />;

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: ${props => props.theme.primaryColor};
`;
