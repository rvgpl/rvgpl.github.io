import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../styled/container";

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=@rvgpl%20Hey%2C%20I%20found%20a%20broken%20page.%20You%20should%20check%20it%20out%20✌️",
    "twitter-share",
    "width=550,height=235"
  );
  return false;
}

export default () => (
  <Container>
    <Title>Not Found</Title>
    <h2>The page you are trying to access is not here.</h2>

    <p>
      Sorry for the inconvience. You can go to the{" "}
      <StyledLink to="/">home page</StyledLink> or{" "}
      <Anchor href="#" onClick={tweet}>
        {" "}
        tweet me{" "}
      </Anchor>{" "}
      about this incident. Thanks 🙏
    </p>
  </Container>
);

const Title = styled.h1`font-size: 20rem;`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: underline;
`;

const Anchor = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: underline;
`;
