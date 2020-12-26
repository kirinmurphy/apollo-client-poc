import styled from 'styled-components';
import { breakpointTablet } from '../../../styles/globalStyles';

export const SearchWrapper = styled.div``;

export const SearchControlWrapper = styled.div`
  position:relative; 
  z-index:10;

  @media(min-width:${breakpointTablet}) {

    > * {
      position:absolute; 
      top:0; 
      right:0; 
      width:350px;
    }  
  }
`;
