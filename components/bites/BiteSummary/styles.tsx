import styled, { css } from "styled-components";


interface BiteSummaryThemeProps {
  link?: boolean;
  layout?: "full";
}

export const BiteSummaryTheme = styled.div<BiteSummaryThemeProps>`

  .img-wrap {
    height:0; 
    padding-bottom:60%;
    overflow:hidden;
    background:#444;
  }

  .img-wrap img {
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

    .img-wrap {
      margin-right:1rem;
      flex:0 0 280px;
      padding-bottom:18% !important;     
    }
  `}  
`;