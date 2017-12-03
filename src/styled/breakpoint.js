import { css } from "styled-components";

const breakpoints = {
  desktop: 992,
  tablet: 700
};

const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default breakpoint;
