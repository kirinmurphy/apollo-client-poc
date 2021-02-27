import styled, { css } from "styled-components";
import { breakpointDesktopMin, breakpointTabletMax } from "../../pageElements/styles-elements";

interface BackgroundImageWrapperProps {
  imageUrl?: string;
}

const sourceMarqueeBG = (imageUrl) => {
  return imageUrl && css`
    padding:1rem;

    background-color:var(--bgcolor-highlight1-dark);
    background-position:top left;
    background-repeat:no-repeat;
    background-size:100% auto;
    background-image: url(${imageUrl});

    &:before {
      content:'';
      position:absolute;
      top:0; right:0; bottom:0; left:0;
      background: rgba(0,0,0,.7);
      z-index:1;
    }

    > * {
      position:relative; 
      z-index:2;
    }
  `;
}

export const SourceDetailHeaderTheme = styled.div<BackgroundImageWrapperProps>`
  position:relative;
  display:flex; 
  margin-bottom:1rem;

  .primary-source-details {
    position:relative;
    display:flex;
    flex-direction: column;
    justify-items: end;
    flex-grow: 1;
    margin-top:-.5rem;
    color:var(--textcolor-inverted);
    
    header { 
      > * {
        display:inline-block;
      }

      h2 {
        margin-right:.5rem;
      }  
    }
    
    .contact-info {
      margin-top:-.25rem;
      
      a {
        margin-right:.75rem;
        text-decoration:none;
        font-size:var(--fontSize-small);

        &:hover {
          &, 
          .svg-inline--fa {
            color: var(--textcolor-inverted-link-hover);
          }
        }
      }
    }

    .delivery-method {
      font-size:var(--fontSize-small);
    }
  }

  .map {
    height:250px;
    width: 300px;
    flex: 0 0 300px;
  }


  @media (min-width:${breakpointDesktopMin}) {
    ${props => sourceMarqueeBG(props.imageUrl)}
  }

  @media (max-width:${breakpointTabletMax}) {
    display: block;
    
    .primary-source-details {
      ${props => sourceMarqueeBG(props.imageUrl)}
      margin-bottom:.5rem;
      height:180px;
    }

    .map {
      width:100%;
      height:180px;
    }
  }
`;

