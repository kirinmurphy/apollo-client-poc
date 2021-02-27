import styled, { css } from 'styled-components';
import { breakpointDesktopMin } from '../../pageElements/styles-elements'; 

export const BiteSourceMapWrapper = styled.div`
  position:relative;
  z-index:1;
  margin-bottom:1.5rem;
`;

export const SearchResultsSummaryWrapper = styled.div`
  position:relative; 
  z-index: 2;
  padding:.7rem 0;

  @media(min-width:${breakpointDesktopMin}) {
    padding:.4rem 0 1.3rem 0;
    font-size:var(--fontSize-bump);
  }
`;
