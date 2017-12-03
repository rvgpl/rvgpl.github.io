import React from "react";
import styled from "styled-components";
import breakpoint from "../styled/breakpoint";
import SectionTitle from "../styled/SectionTitle";

const Intro = () => (
  <Wrapper>
    <SectionTitle>Hello</SectionTitle>
    <Text>
      My name is <Name>Ravigopal Kesari</Name>,<br /> a visual enthusiast and
      software engineer who <del>makes</del> crafts websites and applications.
    </Text>

    <TextSmall>
      I work as a nexus between design and frontend, making websites scalable
      and lightning fast. I am interested in building systems, photography and
      cycling.
    </TextSmall>
  </Wrapper>
);

const Wrapper = styled.section`
  margin-top: 5rem;

  ${breakpoint.tablet`
    margin-top: 10rem;
  `};
`;


const Name = styled.strong`
  display: inline-block;
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
const Text = styled.p`
  font-family: ${props => props.theme.primaryTypeface};
  letter-spacing: -1.5px;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  margin: 0.8rem auto 0 auto;
  padding-bottom: 1rem;

  ${breakpoint.tablet`
    font-size: 4.8rem;
  `};
`;

const TextSmall = styled(Text)`
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.85px;
  ${breakpoint.tablet`
    font-size: 2.4rem;
`};
`;

export default Intro;
