import styled from 'styled-components';
import breakpoint from './breakpoint';

const SectionIntro = styled.h2`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.primaryTypeface};
  margin: 1rem 0 1.6rem 0;
  font-size: 2.6rem;
  line-height: 1.2;

  ${breakpoint.tablet`
    font-size: 3.6rem;
  `};
`;

export default SectionIntro;