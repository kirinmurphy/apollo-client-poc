import React from 'react';
import useSWR from 'swr';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { Layout, PAGE_ACCOUNT } from '../components/page/Layout';
import { useCurrentUser } from '../components/utils/useCurrentUser';

export default function Account (): JSX.Element {

  const { secureFetcher } = useCurrentUser();

  const path = `${process.env.API_URL}/impressions`;
  const { data, error } = useSWR(path, secureFetcher);

  console.log('data', data);
  console.log('error', error);
  
  return (
    <Layout page={PAGE_ACCOUNT}>
      <div>hey</div>
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
