import React from 'react';

import { Layout } from '../components/pageElements/Layout';
import { PAGE_LOGIN } from '../components/pageElements/constants';

import { GQL_LOGIN } from '../components/authentication/queries/login';

import { 
  AuthForm, 
  AuthFormCommonFields,
  getDefaultPropsOnPublicOnlyPage 
} from '../components/authentication';

const AUTH_ACTION_LOGIN_MUTATION = 'login';

export default function Login (): JSX.Element {
  return (
    <Layout page={PAGE_LOGIN}>
      <AuthForm
        gqlMutation={GQL_LOGIN}
        authAction={AUTH_ACTION_LOGIN_MUTATION}
        fields={fieldProps => <AuthFormCommonFields {...fieldProps} />} 
      />
    </Layout>
  );
}

export const getServerSideProps = getDefaultPropsOnPublicOnlyPage; 
