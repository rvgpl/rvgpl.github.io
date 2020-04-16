import React from "react";
import axios from "axios";
import _ from "lodash";
import styled from "styled-components";
import breakpoint from "../styled/breakpoint";

class InstagramFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.INSTAGRAM_URL = `https://www.instagram.com/${this.props.userId}?__a=1`;
    this.fetchImages = this.fetchImages.bind(this);
  }
  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios
      .get(this.INSTAGRAM_URL)
      .then((response) => {
        this.setState({
          images: response.data.graphql.user.edge_owner_to_timeline_media.edges,
        });
      })
      .catch((error) => console.error(error)); //eslint-disable-line
  }
  render() {
    const images = _.map(_.take(this.state.images, 8), (image) => (
      <ImageWrapper key={image.node.id}>
        <a
          target="_blank"
          rel="noopener"
          href={`https://www.instagram.com/p/${image.node.shortcode}`}
        >
          <img
            src={image.node.thumbnail_src}
            alt={image.node.accessibility_caption}
          />
        </a>
      </ImageWrapper>
    ));
    return <ImagesContainer>{images}</ImagesContainer>;
  }
}

export default InstagramFeed;

const ImagesContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.li`
  flex-basis: 50%;
  transition: all 0.3s ease;

  a {
    background: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  ${breakpoint.tablet`
    flex-basis: 25%;
  `};
`;
