import React from 'react';

import Head from 'next/head';
import dynamic from 'next/dynamic';

import Query from '../components/Query';
import { CollectionQuery } from '../components/CollectionQuery';

import BITE_TYPES_QUERY from '../apollo/queries/bite-types';
import SOURCES_QUERY from '../apollo/queries/source/sources';
import BITE_QUERY from '../apollo/queries/bite/bites';

import { Bite } from '../components/Bite';

const Mapizer = dynamic(
  () => import('../components/Mapizer'),
  { ssr: false }
);

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Beef</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""/>
        
        <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
          integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
          crossOrigin=""></script>      
      </Head>

      <Query query={SOURCES_QUERY} id={null}>
        {({ data: { sources } }) => {

          const markers = sources.map(source => { {
            const { latitude, longitude, neighborhood } = source.location;
            return {
              name: source.name,
              neighborhood: neighborhood,
              position: [latitude, longitude]
            }
          }});

          return (
            <>
              <Mapizer markers={markers} />
            </>
          );
        }}
      </Query>


      <CollectionQuery collectionKey="biteTypes" query={BITE_TYPES_QUERY}>
        {({ itemProps }) => <div>{itemProps.name}</div>}
      </CollectionQuery>

      <br/>

      <CollectionQuery collectionKey="sources" query={SOURCES_QUERY}>
        {({ itemProps }) => <div>{itemProps.name}</div>}
      </CollectionQuery>

      <br/>

      <CollectionQuery collectionKey="bites" query={BITE_QUERY}>
        {({ itemProps }) => <Bite {...itemProps} />}
      </CollectionQuery>
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
