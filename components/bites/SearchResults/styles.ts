import styled, { css } from 'styled-components';
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


interface BiteSummaryThemeProps {
  link?: boolean;
  layout?: "full";
}

export const BiteSummaryTheme = styled.div<BiteSummaryThemeProps>`

  .bite-summary__image {
    height:0; 
    padding-bottom:60%;
    overflow:hidden;
    background:#444;
  }

  .bite-summary__image img {
    display:block;
  }

  .bite-summary__name {
    font-size:.9rem;
    font-weight:bold;
    color:var(--textcolor-base);
  }

  .bite-summary__source {
    font-size:var(--fontSize-small);
  }

  .cuisines {
    font-size:var(--fontSize-small);
    margin-bottom:.5rem;
  }

  ${props => props.link && css`
    a {
      display:block;
      color:inherit;
      cursor:pointer;
      transition: all .5s var(--transition-swoop-easing);  
      text-decoration:none;

      .bite-summary__name:hover {
        text-decoration:none;
      }

      &:hover { 
        transform:scale(.96);
        transform-origin:center;
        text-decoration:none;
  
        .bite-summary__source {
          color:var(--textcolor-link);
        }
      }
    }    
  `} 

  ${props => props.layout === 'full' && css`
    display:flex;

    .bite-summary__image {
      margin-right:1rem;
      flex:0 0 280px;
      padding-bottom:18% !important;     
    }
  `}  
`;
