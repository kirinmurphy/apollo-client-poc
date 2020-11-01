import React from 'react';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { Layout, PAGE_ACCOUNT } from '../components/page/Layout';

export default function Account (): JSX.Element {
  return (
    <Layout page={PAGE_ACCOUNT}>
      <div>hey</div>
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
