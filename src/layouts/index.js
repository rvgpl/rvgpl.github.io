import React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../styled/theme";
import "../css/global.css";

const Template = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        {children()}
        { /**<Footer /> */}
      </div>
    </ThemeProvider>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired
};

export default Template;
