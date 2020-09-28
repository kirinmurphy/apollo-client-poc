import React from 'react';

import Head from 'next/head';
import dynamic from 'next/dynamic';

import { PageContentWrapper } from '../styles/globalCss'; 

import Query from '../components/Query';

import CUISINES_QUERY from '../apollo/queries/bite-types';
import SOURCES_QUERY from '../apollo/queries/source/sources';

import { Layout } from '../components/Layout';
import { BiteSearch } from '../components/CuisineTypeSearch';
import { BiteList } from '../components/BiteList';

const Mapizer = dynamic(
  () => import('../components/Mapizer'),
  { ssr: false }
);

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Best Bite Chicago</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""/>
        
        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""></script>      
      </Head>
      
      <Layout>
        <PageContentWrapper>
          <Query query={SOURCES_QUERY}>
            {({ data: { sources } }) => {

              const markers = sources.map(source => { {
                const { latitude, longitude, neighborhood } = source.location;
                return {
                  name: source.name,
                  neighborhood: neighborhood,
                  position: [latitude, longitude]
                }
              }});

              return <Mapizer markers={markers} />;
            }}
          </Query>

          <Query query={CUISINES_QUERY}>
            {({ data }) => {
              console.log('data', data);
              const { cuisines } = data;
              return <BiteSearch cuisines={cuisines} />;
            }}
          </Query>

          <BiteList />

        </PageContentWrapper>
      </Layout>
    </>
  )
}


// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
