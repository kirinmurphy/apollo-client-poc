import React from 'react';

import { PageContentWrapper } from '../components/pageElements/styles-elements'; 

import { Layout } from '../components/pageElements/Layout';
import { PAGE_HOME } from '../components/pageElements/constants';

import { BitesHomepage } from '../components/bites/Homepage';

export default function Home (): JSX.Element {
  return (
    <Layout page={PAGE_HOME}>
      <PageContentWrapper>
        <BitesHomepage />
      </PageContentWrapper>
    </Layout>
  )
}
