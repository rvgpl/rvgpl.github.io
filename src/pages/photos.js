import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Container from "../styled/container";
import SectionTitle from "../styled/SectionTitle";
import SectionIntro from "../styled/SectionIntro";
import BreakOut from "../styled/BreakOut";

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
    <Text>
      I do photoshoots for material things like fancy food, nice paperback books
      etc. I enjoy candid photography and shooting portraits. If you fancy a
      photoshoot, feel free to contact me{" "}
      <a href="https://www/twitter.com/@rvgpl">@rvgpl</a>.
    </Text>

    <Text>
      Do check out my photography, on{" "}
      <a href="https://www.flickr.com/rvgpl">Flickr</a> and{" "}
      <a href="https://www.instagram.com/rvgpl">Instagram</a>.
    </Text>
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
  font-family: ${props => props.theme.primaryTypeface};
`;
const HeroImage = styled.img`
  object-fit: cover;
  max-height: 500px;
`;
const HeroImageWrapper = styled(BreakOut)`
  margin-bottom: 2rem;
  height: 500px;
`;
const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.2;
`;
