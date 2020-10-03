import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { setCookie } from 'nookies';

import { 
  MSG_ERROR_REQUIRED_FIELD, 
  MSG_PAGE_TITLE_LOGIN, 
  MSG_AUTH_FORM_LABEL_EMAIL,
  MSG_AUTH_FORM_LABEL_PASSWORD,
  MSG_LOGIN_FORM_SUBMIT_BUTTON
} from '../components/utils/dictionary';

import { PageContentWrapper, PageTitle } from '../styles/globalCss';

import { 
  Layout, 
  PAGE_LOGIN, 
  SECURE_COOKIE_NAME 
} from '../components/Layout';

import { GQL_LOGIN } from '../apollo/queries/login';

function RequiredFieldError () {
  return (
    <span className="field-error">{MSG_ERROR_REQUIRED_FIELD}</span>
  );
}

export default function Login (): JSX.Element {
  const { register, handleSubmit, errors } = useForm();

  const [loginMutation, { data }] = useMutation(GQL_LOGIN);

  const jwtToken = data?.login?.jwt;

  if ( jwtToken ) {
    setCookie({}, SECURE_COOKIE_NAME, jwtToken, {
      maxAge: 60 * 10
    });
  }
  
  function onSubmit (formData) {
    loginMutation({ variables: formData });
  }

  return (
    <Layout page={PAGE_LOGIN}>
      <PageContentWrapper>
        <FullPageFormWrapper>

          <PageTitle>{MSG_PAGE_TITLE_LOGIN}</PageTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField>
              <label htmlFor="login-email">{MSG_AUTH_FORM_LABEL_EMAIL}</label>
              <input 
                type="text"
                id="login-email" 
                name="email" 
                ref={register({ required: true })} 
              />
              {errors.email && <RequiredFieldError />}
            </FormField>

            <FormField>
              <label htmlFor="login-password">{MSG_AUTH_FORM_LABEL_PASSWORD}</label>
              <input 
                type="password"
                id="login-password" 
                name="password" 
                ref={register({ required: true })} 
              />
              {errors.password && <RequiredFieldError />}
            </FormField>
            <input type="submit" value={MSG_LOGIN_FORM_SUBMIT_BUTTON}  />
          </form>

        </FullPageFormWrapper>
      </PageContentWrapper>
    </Layout>
  );
}

const FullPageFormWrapper = styled.div`
  width:500px;
  margin:0 auto;
  padding: 1rem;

  input[type="submit"] { 
    width:100%;
    height:2.5rem;
  }

  .field-error {
    color: var(--textcolor-error);
    font-size:var(--fontSize-small);
  }
`;

const FormField = styled.div`
  width:100%;
  margin-bottom:1rem;

  label,
  input { display:block; }
  
  input[type="text"],
  input[type="password"] {
    width:100%;
    padding:.5rem;
    border-radius:4px;
    font-size:20px;
    border:1px solid #ddd;
  }
`;
