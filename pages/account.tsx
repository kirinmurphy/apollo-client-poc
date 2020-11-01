import React from 'react';
import useSWR from 'swr';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { BiteSummary } from '../components/bites/SearchResults/BiteSummary';
import { BiteTheme } from '../components/bites/SearchResults/styles';
import { Layout, PAGE_ACCOUNT } from '../components/page/Layout';
import { useCurrentUser } from '../components/utils/useCurrentUser';
import { SwrResourceView } from '../components/widgets/SwrResourceView';
import { GridList } from '../styles/globalCss';

export default function Account (): JSX.Element {

  const { secureFetcher } = useCurrentUser();

  const path = `${process.env.API_URL}/impressions/me`;
  const impressionsPathSwrProps = useSWR(path, secureFetcher);

  console.log('impressionPathSw', impressionsPathSwrProps?.data);
  return (
    <Layout page={PAGE_ACCOUNT}>
      <SwrResourceView {...impressionsPathSwrProps} >
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
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
