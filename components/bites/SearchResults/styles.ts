import styled from 'styled-components';
import { breakpointTablet } from '../../../styles/globalCss'; 

export const BiteSourceMapWrapper = styled.div`
position:relative;
z-index:1;
margin-bottom:1.5rem;
`;

export const SearchResultsSummaryWrapper = styled.div`
position:relative; 
z-index: 2;
padding:.7rem 0;

@media(min-width:${breakpointTablet}) {
  padding:.4rem 0 1.3rem 0;
  font-size:var(--fontSize-bump);
}
`;

export const BiteTheme = styled.div`
.bite-summary__image {
  height:0; 
  padding-bottom:60%;
  overflow:hidden;
}

.bite-summary__image img {
  display:block;
}

.bite-summary__name {
  font-size:.9rem;
  font-weight:bold;
}

.bite-summary__source {
  font-size:var(--fontSize-small);
}

.bite-summary:hover {
  cursor:pointer;

  .link {
    text-decoration:underline;
    color:var(--textcolor-link-hover);
  }
}
`;