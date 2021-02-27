import styled from 'styled-components';

const breakpointTabletBase = 800;
export const breakpointTabletMax = `${breakpointTabletBase}px`;
export const breakpointDesktopMin = `${breakpointTabletBase+1}px`;

const breakpintMobileBase = 450;
export const breakpointNMobileMax = `${breakpintMobileBase}px`;
export const breakpointTabletMin = `${breakpintMobileBase+1}px`;


export const gridBreakpointMedium = '900px';
export const gridBreakpointSmall = '450px';

export const FlexPusher = styled.div`
  flex-grow:1;
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

  @media (max-width:${gridBreakpointMedium}) {
    > * {
      width:49%;
      margin-bottom:.4rem;
    }
  }

  @media (max-width:${gridBreakpointSmall}) {
    margin-right:0;

    > * {
      width:100%;
    }
  }
`;
