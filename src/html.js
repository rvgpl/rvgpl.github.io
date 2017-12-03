import React from "react";
import * as PropTypes from "prop-types";
import Helmet from "react-helmet";

const HTML = props => {
  const head = Helmet.rewind();

  let css;
  if (process.env.NODE_ENV === "production") {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line
          __html: require("!raw-loader!../public/styles.css")
        }}
      />
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
        {css}
      </head>
      <body>
        <div
          id="___gatsby"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

export default HTML;
