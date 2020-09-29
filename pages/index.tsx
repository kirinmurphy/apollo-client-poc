import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { breakpointTablet, PageContentWrapper } from '../styles/globalCss'; 

import Query from '../components/widgets/Query';

import CUISINES_QUERY from '../apollo/queries/cuisine/cuisines';

import { Layout } from '../components/Layout';
import { BiteSearch } from '../components/CuisineTypeSearch';
import { BiteList } from '../components/SearchResults';

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""/>
        
        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""></script>      
      </Head>
      
      <Layout>
        <PageContentWrapper>
          <BiteSearchWrapper>
            <Query query={CUISINES_QUERY}>
              {({ data }) => <BiteSearch cuisines={data.cuisines} />}
            </Query>
          </BiteSearchWrapper>
          
          <BiteList />

        </PageContentWrapper>
      </Layout>
    </>
  )
}

const BiteSearchWrapper = styled.div`
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
