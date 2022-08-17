import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../styled/container";
import Intro from "../components/Intro";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../styled/SectionTitle";
import bikeImage from "../assets/bike-ride.jpg";
import InstagramFeed from "../components/InstagramFeed";
import breakpoint from "../styled/breakpoint";

const Home = (props) => {
  const pageLinks = [];
  const siteTitle = get(props, "data.site.siteMetadata.title");
  const posts = get(props, "data.allMarkdownRemark.edges");

  posts.forEach((post) => {
    if (post.node.path !== "/404/") {
      const title = get(post, "node.frontmatter.title", post.node.path);
      const intro = get(post, "node.frontmatter.intro", "");
      const date = get(post, "node.frontmatter.date", "");

      const pageLink = (
        <BlogListItem key={title}>
          <PostTitle>
            <StyledLink to={post.node.frontmatter.path}>{title}</StyledLink>
            <PostDate>{date}</PostDate>
          </PostTitle>
          <PostExcerpt dangerouslySetInnerHTML={{ __html: intro }} />
        </BlogListItem>
      );

      pageLinks.push(pageLink);
    }
  });

  return (
    <Container>
      <Helmet>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content={get(this, "props.data.site.siteMetadata.description")}
        />
      </Helmet>
      <HeroImage src={bikeImage} alt="rvgpl on a bike" />
      <Intro />
      <SocialLinks />
      <hr />
      <BlogList>
        <SectionTitle>Latest Posts</SectionTitle>
        {pageLinks}
      </BlogList>
      <SectionTitle>Instagram</SectionTitle>
      <InstagramFeed userId="rvgpl" />
    </Container>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            intro
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const BlogList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 5rem auto;
`;

const BlogListItem = styled.li`
  padding: 1.6rem 0;
  dispaly: block;
`;

const PostTitle = styled.h3`
  font-size: 3rem;
  line-height: 1.25;
  font-family: ${(props) => props.theme.primaryTypeface};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;

  ${breakpoint.tablet`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

const PostExcerpt = styled.p`
  font-weight: normal;
  line-height: 1.25;
  font-size: 2rem;
  margin: 1.6rem 0;
  padding: 0;
  font-family: ${(props) => props.theme.georgiaTypeface};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  background-image: none;

  ${breakpoint.tablet`
background-image: linear-gradient(to right, gold 0%, gold 100%);
background-repeat: no-repeat;
background-size: 100% 0.5rem;
background-position: 0 88%;
transition: background-size 0.25s ease-in;

&:hover,
&:focus {
  background-size: 100% 88%;
}
`};
`;

const HeroImage = styled.img`
  border-radius: 1.6rem;
  box-shadow: -1rem 1rem 0 rgba(0, 0, 0, 0.1);
  filter: brightness(90%);
  transition: all 0.5s ease-in-out;

  ${breakpoint.tablet`
    filter: brightness(90%);
    box-shadow: -2rem 2rem 0 rgba(0,0,0,.1);
  `};

  &:hover {
    box-shadow: 2rem 2rem 0 rgba(0, 0, 0, 0.1);
  }
`;

const PostDate = styled.time`
  font-family: ${(props) => props.theme.georgiaTypeface};
  font-style: italic;
  font-weight: normal;
  font-size: 1.4rem;
  color: #777;
`;
