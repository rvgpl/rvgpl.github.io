import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import styled from "styled-components";
import Container from "../styled/container";

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, "data.site.siteMetadata.title");

  return (
    <Container className="blog-post">
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <Title>{post.frontmatter.title}</Title>
      <Article
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Container>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  padding-bottom: 0.37em;
  line-height: 1.125;
  margin: 0;
  font-family: ${props => props.theme.primaryTypeface};
`;

const Article = styled.article`
  font-size: 1.8rem;
  line-height: 1.5;
  padding-bottom: 5rem;

  blockquote {
    border-left: 0.5rem solid black;
    margin-left: 0;
    padding-left: 1rem;
  }

  p,
  ul,
  pre,
  ol,
  table {
    padding-bottom: 1.125em;
  }

  pre {
    overflow: auto;
  }

  li {
    & ol {
      padding-bottom: 0;
      padding-left: 1.82em;
    }

    & ul {
      padding-bottom: 0;
      padding-left: 1em;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 0.37em;
    line-height: 1.125;
    margin: 0;
    font-family: ${props => props.theme.primayTypeface};
  }
  p {
    font-family: ${props => props.theme.georgiaTypeface};
  }
  h1 {
    font-size: 2.027em;
  }

  h2 {
    font-size: 1.62em;
  }

  h3 {
    font-size: 1.424em;
  }

  h4 {
    font-size: 1.266em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.72em;
  }

  small {
    font-size: 0.889em;
  }
`;
