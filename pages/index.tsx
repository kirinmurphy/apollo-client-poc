import React from 'react';
import styled from 'styled-components';

import { breakpointTablet, PageContentWrapper } from '../styles/globalCss'; 

import Query from '../components/widgets/Query';

import CUISINES_QUERY from '../apollo/queries/resources/cuisines';

import { Layout, PAGE_HOME } from '../components/page/Layout';
import { CuisineTypeSearch } from '../components/bites/CuisineTypeSearch';
import { BiteList } from '../components/bites/SearchResults';

export default function Home (): JSX.Element {
  return (
    <Layout page={PAGE_HOME}>
      <PageContentWrapper>
        <CuisineTypeSearchWrapper>
          <Query query={CUISINES_QUERY}>
            {({ data }) => <CuisineTypeSearch cuisines={data.cuisines} />}
          </Query>
        </CuisineTypeSearchWrapper>
        
        <BiteList />

      </PageContentWrapper>
    </Layout>
  )
}

const CuisineTypeSearchWrapper = styled.div`
  @media(min-width:${breakpointTablet}) {
    position:relative; 
    z-index:10;
    margin-bottom:.5rem;

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
