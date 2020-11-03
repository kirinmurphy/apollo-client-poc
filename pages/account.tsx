import React from 'react';
import useSWR from 'swr';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { USER_IMPRESSIONS_QUERY } from '../components/bites/queries/impressions';
import { BiteSummary } from '../components/bites/SearchResults/BiteSummary';
import { BiteTheme } from '../components/bites/SearchResults/styles';
import { Layout, PAGE_ACCOUNT } from '../components/page/Layout';
import { useCurrentUser } from '../components/utils/useCurrentUser';
import { SwrResourceView } from '../components/widgets/SwrResourceView';
import { GridList, PageContentWrapper } from '../styles/globalCss';

export default function Account (): JSX.Element {

  const { secureGraphQlFetcher } = useCurrentUser();

  const impressionsResource = useSWR(USER_IMPRESSIONS_QUERY, secureGraphQlFetcher);

  return (
    <Layout page={PAGE_ACCOUNT}>
      <PageContentWrapper>
        <SwrResourceView 
          collection={impressionsResource.data?.impressions}
          {...impressionsResource} >
            
          {(biteImpressions) => (
            <GridList>
              {biteImpressions.map((itemProps) => {
                return <BiteTheme key={itemProps.bite.id}>
                  <BiteSummary {...itemProps.bite} />
                </BiteTheme>;
              })}
            </GridList>        
          )}
        </SwrResourceView>
      </PageContentWrapper>
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
