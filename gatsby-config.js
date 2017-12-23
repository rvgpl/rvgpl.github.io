module.exports = {
  siteMetadata: {
    title: "Ravigopal Kesari",
    description: "Personal Website of Ravigopal Kesari | rvgpl"
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts/`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          {
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 800,
							linkImagesToOriginal: false,
							sizeByPixelDensity: true,
						},
					},
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-110583140-1",
        anonymize: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
  ]
};
