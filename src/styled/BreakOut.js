import styled from 'styled-components';

const BreakOut = styled.div`
  position:relative;
  display:table;
  width:100vw;
  left:50%;

  & > * {
    position:relative; 
    margin-left:auto; 
    margin-right:auto;   
    left:-50% ;
  }
`;

export default BreakOut;