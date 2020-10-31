import React from 'react';
import styled from 'styled-components';

import { breakpointTablet, PageContentWrapper } from '../styles/globalCss'; 

import { Layout, PAGE_HOME } from '../components/page/Layout';
import { CuisineTypeSearch } from '../components/bites/CuisineTypeSearch';
import { BiteList } from '../components/bites/SearchResults';
import useSWR from 'swr';

export default function Home (): JSX.Element {

  const API_URL_CUISINES = `${process.env.API_URL}/cuisines`;
  const { data: cuisines = [] } = useSWR(API_URL_CUISINES);

  return (
    <Layout page={PAGE_HOME}>
      <PageContentWrapper>
        <CuisineTypeSearchWrapper>
          <CuisineTypeSearch cuisines={cuisines} />
        </CuisineTypeSearchWrapper>
        
        <BiteList />

      </PageContentWrapper>
    </Layout>
  )
}

const CuisineTypeSearchWrapper = styled.div`
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

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
