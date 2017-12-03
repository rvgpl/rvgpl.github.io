import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../../styled/container";

const Blog = props => {
  const pageLinks = [];
  const posts = get(props, "data.allMarkdownRemark.edges");

  posts.forEach(post => {
    if (post.node.path !== "/404/") {
      const title = get(post, "node.frontmatter.title", post.node.path);
      const intro = get(post, "node.frontmatter.intro", "");
      const pageLink = (
        <BlogListItem key={title}>
          <PostTitle>
            <StyledLink to={post.node.frontmatter.path}>{title}</StyledLink>
          </PostTitle>
          <PostExcerpt dangerouslySetInnerHTML={{ __html: intro }} />
        </BlogListItem>
      );

      pageLinks.push(pageLink);
    }
  });

  return (
    <Container>
      <Helmet title={Blog} />
      <BlogList>
        <BlogListTitle>Posts</BlogListTitle>
        {pageLinks}
      </BlogList>
    </Container>
  );
};

export default Blog;

export const pageQuery = graphql`
  query allPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            intro
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

const BlogListTitle = styled.small`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`;

const PostTitle = styled.h3`
  font-size: 3rem;
  line-height: 1.25;
  font-family: ${props => props.theme.primaryTypeface};
  margin: 0;
  padding: 0;
`;

const PostExcerpt = styled.p`
  font-weight: normal;
  line-height: 1.25;
  font-size: 2rem;
  margin: 1.6rem 0;
  padding: 0;
  font-family: ${props => props.theme.georgiaTypeface};
`;

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
const PostDate = styled.time`
  font-size: 1.4rem;
  color: #777;
`;
