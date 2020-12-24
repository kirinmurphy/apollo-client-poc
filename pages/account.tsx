import React from 'react';
import useSWR from 'swr';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { USER_IMPRESSIONS_QUERY } from '../components/bites/queries/impressions';
import { BiteSummary } from '../components/bites/SearchResults/BiteSummary';
import { BiteSummaryTheme } from '../components/bites/SearchResults/styles';
import { Layout, PAGE_ACCOUNT } from '../components/page/Layout';
import { BiteImpressionProps, BiteSummaryProps } from '../components/types';
import { useCurrentUser } from '../components/utils/useCurrentUser';
import { SwrResourceView } from '../components/widgets/SwrResourceView';
import { GridList, PageContentWrapper } from '../styles/globalCss';


export default function Account (): JSX.Element {

  const { secureGraphQlFetcher } = useCurrentUser();

  const { data, error } = useSWR(USER_IMPRESSIONS_QUERY, secureGraphQlFetcher);

  return (
    <Layout page={PAGE_ACCOUNT}>
      <PageContentWrapper>
        <SwrResourceView<BiteImpressionProps[]>
          collection={data?.impressions}
          error={error}>
            
          {({ collection: biteImpressions }) => (
            <GridList>
              {biteImpressions.map((impressions) => {
                return <BiteSummaryTheme key={impressions.bite.id}>
                  <BiteSummary {...impressions.bite} />
                </BiteSummaryTheme>;
              })}
            </GridList>        
          )}
        </SwrResourceView>
      </PageContentWrapper>
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
