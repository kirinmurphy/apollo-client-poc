import React from 'react';

import { PageContentWrapper } from '../components/pageElements/styles-elements'; 

import { Layout } from '../components/pageElements/Layout';
import { PAGE_HOME } from '../components/pageElements/constants';

import { BitesHomepage } from '../components/bites/Homepage';
import request from 'graphql-request';
import { getBiteQueryProps } from '../components/bites/SearchResults/utils/getBiteQueryProps';
import { BITE_QUERY } from '../components/bites/queries/bites';
import { defaultGraphQlFetcher } from '../components/utils/graphqlRequestFetcher';

export default function Home ({ initialBites }): JSX.Element {

  return (
    <Layout page={PAGE_HOME}>
      <PageContentWrapper>
        <BitesHomepage initialBites={initialBites} />
      </PageContentWrapper>
    </Layout>
  )
}

export async function getStaticProps(context) {
  console.log('context', context);
  try {
    const data = await defaultGraphQlFetcher(BITE_QUERY);
    return {
      props: {
        initialBites: data
      }
    };  
  } catch (error) {
    return;
  }
}