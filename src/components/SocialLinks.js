import React from "react";
import styled from "styled-components";
import breakpoint from "../styled/breakpoint";

const SocialLinks = () => (
  <SocialNav>
    <Wrapper>
      <SocialLink>
        <LinkWrapper href="https://www.twitter.com/rvgpl">Twitter</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper href="http://www.instagram.com/rvgpl">
          Instagram
        </LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper href="https://www.github.com/rvgpl">Github</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper href="http://www.flickr.com/rvgpl">Flickr</LinkWrapper>
      </SocialLink>
      <SocialLink>
        <LinkWrapper href="mailto:kesariravigopal@gmail.com?Subject=Hello">
          Email
        </LinkWrapper>
      </SocialLink>
    </Wrapper>
  </SocialNav>
);

// Styles
const SocialNav = styled.nav`margin: 4rem auto;`;

const Wrapper = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: start;
  flex-direction: column;

  ${breakpoint.tablet`
      flex-direction: row;
      align-items: center;
    `};
`;

const SocialLink = styled.li`
  margin-top: 0.8rem;

  ${breakpoint.tablet`
      margin-right: 1.6rem;
    `};
`;

const LinkWrapper = styled.a`
  cursor: pointer;
  font-size: 1.8rem;
  font-family: ${props => props.theme.primaryTypeface};
  letter-spacing: ${props => props.theme.primaryTypefaceLetterSpacing};
  color: ${props => props.theme.socialNavColor};
  background-image: linear-gradient(120deg, gold 0%, gold 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.5rem;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  text-shadow: none;

  &:hover,
  &:focus {
    background-size: 100% 88%;
  }
`;
export default SocialLinks;
