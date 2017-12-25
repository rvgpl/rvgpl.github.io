import styled from "styled-components";
import Link from "gatsby-link";

const StyledLink = styled(Link)`
  color: ${props => props.theme.primaryColor};
  background-image: linear-gradient(to right, gold 0%, gold 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.5rem;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;

  &:hover,
  &:focus {
    background-size: 100% 88%;
  }
`;

export default StyledLink;
