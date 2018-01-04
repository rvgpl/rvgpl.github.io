import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import styled from "styled-components";
import Container from "../styled/container";
import StyledLink from "../styled/StyledLink";

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, "data.site.siteMetadata.title");

  return (
    <BlogPostContainer>
      <Helmet
        title={`${post.frontmatter.title} | ${siteTitle}`}
        meta={[
          { name: "description", content: `${post.frontmatter.intro}` },
          { property: "og:type", content: "website" },
          {
            property: "og:url",
            content: `https://rvgpl.xyz/${post.frontmatter.path}`
          },
          {
            property: "og:title",
            content: `${post.frontmatter.title} | ${siteTitle}`
          },
          {
            property: "og:description",
            content: `${post.frontmatter.intro}`
          },
          {
            name: "twitter:card",
            content: "summary"
          },
          {
            name: "twitter:site",
            content: "@rvgpl"
          },
          {
            name: "twitter:creator",
            content: "@rvgpl"
          },
          {
            name: "twitter:title",
            content: `${post.frontmatter.title} | ${siteTitle}`
          },
          {
            name: "twitter:description",
            content: `${post.frontmatter.intro}`
          }
        ]}
      />
      <Title>{post.frontmatter.title}</Title>
      <Article
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <StyledLinkWrapper to={"/thoughts"}>← Back to Thoughts</StyledLinkWrapper>
    </BlogPostContainer>
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
  font-size: 2.2rem;
  line-height: 1.5;
  padding-bottom: 2rem;

  blockquote {
    border-left: 0.5rem solid black;
    margin-left: 0;
    padding-left: 1rem;
    font-size: 2.8rem;
    margin-bottom: 2.25em;

    p {
      padding: 0;
      margin: 0;
    }
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

  code {
    color: #905;
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
    font-family: ${props => props.theme.primaryTypeface};
  }
  p,
  ul,
  ol {
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

  .gatsby-resp-image-wrapper {
    border-radius: 0.5rem;
  }

  .gatsby-resp-image-wrapper + em {
    display: block;
    text-align: center;
    font-size: 1.6rem;
  }
`;
const StyledLinkWrapper = styled(StyledLink)`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 2rem 0;
`;

const BlogPostContainer = styled(Container)`padding-bottom: 5rem;`;
