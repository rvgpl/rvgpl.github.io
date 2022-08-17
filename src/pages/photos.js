import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Container from "../styled/container";
import SectionTitle from "../styled/SectionTitle";
import SectionIntro from "../styled/SectionIntro";
import BreakOut from "../styled/BreakOut";
import Camel from "../assets/photography/camel.jpg";
import AndamanBeach from "../assets/photography/andaman_beach.jpg";
import Elephant from "../assets/photography/elephant.jpg";
import CoconutTrees from "../assets/photography/coconut_trees.jpg";

const Photos = () => (
  <Container>
    <Helmet>
      <title>Photography | Ravigopal Kesari</title>
      <meta name="description" content="Photography by Ravigopal Kesari" />
    </Helmet>
    <HeroImageWrapper>
      <HeroImage
        srcSet="https://farm6.staticflickr.com/5715/22799147249_1bba8e0c2f_n.jpg 320w,
        https://farm6.staticflickr.com/5715/22799147249_1bba8e0c2f.jpg 500w, https://farm6.staticflickr.com/5715/22799147249_1bba8e0c2f_b.jpg 1024w,https://farm6.staticflickr.com/5715/22799147249_3c8af1a9fd_h.jpg 1600w"
        src="https://farm6.staticflickr.com/5715/22799147249_1bba8e0c2f.jpg"
        alt="Early morning scene of Pigeons flying"
      />
    </HeroImageWrapper>
    <SectionTitle>Photos</SectionTitle>
    <SectionIntro>
      Through practice, I’ve reach the point where I’ve gain confidence in
      presenting myself as a photographer.
    </SectionIntro>
    <PhotoDesc>
      {" "}
      I continue to learn new techniques everyday and getting comfortable with
      the intricacies of this process of capturing light.
    </PhotoDesc>
    <PhotosContainer>
      <PhotoWrapper style={{ gridRow: "span 2" }}>
        <a target="_blank" rel="noopener" href="https://unsplash.com/@rvgpl">
          <img src={AndamanBeach} alt="Boats at Port blair, India." />
        </a>
      </PhotoWrapper>
      <PhotoWrapper>
        <a target="_blank" rel="noopener" href="https://unsplash.com/@rvgpl">
          <img src={Camel} alt="Camel in a camel farm, Abu Dhabi" />
        </a>
      </PhotoWrapper>

      <PhotoWrapper>
        <a target="_blank" rel="noopener" href="https://unsplash.com/@rvgpl">
          <img src={CoconutTrees} alt="Coconut tree and sky" />
        </a>
      </PhotoWrapper>
      <PhotoWrapper style={{ gridColumn: "span 2" }}>
        <a target="_blank" rel="noopener" href="https://unsplash.com/@rvgpl">
          <img src={Elephant} alt="Elephant in between trees" />
        </a>
      </PhotoWrapper>
    </PhotosContainer>
    <Text>
      I do photoshoots for material things like fancy food, nice paperback books
      etc. I enjoy candid photography and shooting portraits. If you fancy a
      photoshoot, feel free to contact me{" "}
      <a href="https://www/twitter.com/@rvgpl">@rvgpl</a>.
    </Text>
    <Text>
      I recently starting publishing my photos for free on Unsplash. Do check
      them out at <a href="https://unsplash.com/@rvgpl">Unsplash</a>
    </Text>
    <Text>
      Do check out my photography, on{" "}
      <a href="https://www.flickr.com/rvgpl">Flickr</a> and{" "}
      <a href="https://www.instagram.com/rvgpl">Instagram</a>.
    </Text>
    <Spacer />
  </Container>
);

export default Photos;

export const pageQuery = graphql`
  query PhotosQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const PhotoDesc = styled.h3`
  font-size: 2.2rem;
  line-height: 1.2;
  font-family: ${(props) => props.theme.primaryTypeface};
`;
const HeroImage = styled.img`
  object-fit: cover;
  max-height: 500px;
  width: 100%;
  height: 100%;
`;
const HeroImageWrapper = styled(BreakOut)`
  margin-bottom: 2rem;
  height: 500px;
`;
const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.2;
`;
const PhotosContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px;
`;

const PhotoWrapper = styled.li`
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  a {
    background: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const Spacer = styled.div`
  margin: 16px 0;
  padding: 30px 0;
`;