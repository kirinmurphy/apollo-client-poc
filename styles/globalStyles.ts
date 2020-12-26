import styled from 'styled-components';

export const breakpointTablet = '800px';

export const SiteTitle = styled.h1`
  font-size:var(--fontSize-title-medium);

  .svg-inline--fa {
    font-size:var(--fontSize-small);
    transform:translateY(-4px);
    color:#bbb;
  }

  a { color:var(--textcolor-base); 
    &:hover { 
      text-decoration:none; 

      .svg-inline--fa {
        color:var(--textcolor-base);
      }
    
    }
  }
`;

export const PageTitle = styled.h2``;

export const PageContentWrapper = styled.section`
  max-width:1100px;
  min-width:320px;
  margin:0 auto;

  // Move - doesn't quite belong here
  .back-link { 
    font-size:var(--fontSize-small);
    margin-bottom:1rem;
  }
`;

export const GridList = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-right:-1%;

  > * {
    width:24%;
    margin-bottom:1rem;
  }

  > *:not(:nth-of-type(4n+4)) {
    margin-right:1%;
  }

  @media (max-width:900px) {
    > * {
      width:49%;
    }
  }

  @media (max-width:450px) {
    margin-right:0;

    > * {
      width:100%;
    }
  }
`;
