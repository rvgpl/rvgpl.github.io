import React from "react";
import _ from "lodash";
import styled from "styled-components";
import breakpoint from "../styled/breakpoint";
import image1 from "../assets/insta-photos/1-w400.jpeg";
import image2 from "../assets/insta-photos/2-w400.jpeg";
import image3 from "../assets/insta-photos/3-w400.jpeg";
import image4 from "../assets/insta-photos/4-w400.jpeg";
import image5 from "../assets/insta-photos/5-w400.jpeg";
import image6 from "../assets/insta-photos/6-w400.jpeg";
import image7 from "../assets/insta-photos/7-w400.jpeg";
import image8 from "../assets/insta-photos/8-w400.jpeg";

const InstagramFeed = () => {
  return (
    <ImagesContainer>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image1} alt="People walking in Mysore resort" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image2} alt="A man walking light/shadow" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image3} alt="City traffic in Abu Dhabi" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image4} alt="People walking in Yas Mall, Abu dhabi" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image5} alt="View of Vizag beach" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image6} alt="Eye macro shot using iPhone 13 Pro" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image7} alt="Street lamps and sunset in the background" />
        </a>
      </ImageWrapper>
      <ImageWrapper>
        <a target="_blank" rel="noopener" href="https://instagram.com/rvgpl">
          <img src={image8} alt="Robots chilling at Dubai Expo 2020" />
        </a>
      </ImageWrapper>
    </ImagesContainer>
  );
};

export default InstagramFeed;

const ImagesContainer = styled.ul`
  padding: 0 0 30px 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.li`
  flex-basis: 50%;
  transition: all 0.3s ease;
  max-width: 250px;
  height: 200px;
  overflow: hidden;
  position: relative;
  a {
    background: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${breakpoint.tablet`
    flex-basis: 25%;
    max-width: 200px;
  `};
`;
