import React from 'react';

import { Layout, PAGE_SIGNUP } from '../components/page/Layout';
import { GQL_REGISTER } from '../apollo/queries/register';
import { AuthForm } from '../components/authentication/AuthForm';
import { AuthFormCommonFields } from '../components/authentication/AuthFormCommonFields';

const AUTH_ACTION_SIGNUP_MUTATION = 'register';

export default function SignUp (): JSX.Element {
  return (
    <Layout page={PAGE_SIGNUP}>
      <AuthForm
        gqlMutation={GQL_REGISTER}
        authAction={AUTH_ACTION_SIGNUP_MUTATION}
        fields={fieldProps => (
          <AuthFormCommonFields {...fieldProps} />
        )} />
    </Layout>
  );
}
