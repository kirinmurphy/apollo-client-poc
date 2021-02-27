import styled from 'styled-components';
import { breakpointDesktopMin } from '../../pageElements/styles-elements';

export const SearchWrapper = styled.div``;

export const SearchControlWrapper = styled.div`
  position:relative; 
  z-index:10;

  @media(min-width:${breakpointDesktopMin}) {

    > * {
      position:absolute; 
      top:0; 
      right:0; 
      width:350px;
    }  
  }
`;
