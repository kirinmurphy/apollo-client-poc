import React from 'react';

import { getDefaultPropsOnSecurePage } from '../components/authentication';
import { Layout } from '../components/page/Layout';

export default function Account (): JSX.Element {
  return (
    <Layout>
      <div>hey</div>
    </Layout>
  );  
}

export const getServerSideProps = getDefaultPropsOnSecurePage; 
