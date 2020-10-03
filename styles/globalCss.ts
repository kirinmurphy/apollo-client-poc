import styled from 'styled-components';

export const breakpointTablet = '800px';

export const SiteTitle = styled.h1`
  a { color:var(--textcolor-base); 
    &:hover { text-decoration:none; }
  }
`;

export const PageTitle = styled.h2``;

export const PageContentWrapper = styled.section`
  max-width:1200px;
  margin:0 auto;
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
`;
