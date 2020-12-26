import React from 'react';

import { PageContentWrapper } from '../styles/globalStyles'; 

import { Layout, PAGE_HOME } from '../components/page/Layout';
import { SearchControl } from '../components/bites/SearchControl';
import { BiteList } from '../components/bites/SearchResults';
import { SearchControlWrapper } from '../components/bites/SearchControl/styles';

export default function Home (): JSX.Element {
  return (
    <Layout page={PAGE_HOME}>
      <PageContentWrapper>
        <SearchControlWrapper>
          <SearchControl />
        </SearchControlWrapper>
        
        <BiteList />

      </PageContentWrapper>
    </Layout>
  )
}
