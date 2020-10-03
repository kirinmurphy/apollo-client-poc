import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

import { 
  MSG_ERROR_REQUIRED_FIELD, 
  MSG_PAGE_TITLE_SIGN_UP,
  MSG_SIGN_UP_FORM_LABEL_EMAIL,
  MSG_SIGN_UP_FORM_LABEL_PASSWORD,
  MSG_SIGN_UP_FORM_SUBMIT_BUTTON
} from '../components/utils/dictionary';

import { PageContentWrapper, PageTitle } from '../styles/globalCss';

import { Layout, PAGE_SIGNUP } from '../components/Layout';
import { GQL_REGISTER } from '../apollo/queries/register';

function RequiredFieldError () {
  return (
    <span className="field-error">{MSG_ERROR_REQUIRED_FIELD}</span>
  );
}

export default function SignUp (): JSX.Element {
  const { register, handleSubmit, errors } = useForm();

  const [signUpMutation, { data }] = useMutation(GQL_REGISTER);

  function onSubmit (formData) {
    signUpMutation({ variables: formData });
  }

  console.log('data', data);

  return (
    <Layout page={PAGE_SIGNUP}>
      <PageContentWrapper>
        <FullPageFormWrapper>

          <PageTitle>{MSG_PAGE_TITLE_SIGN_UP}</PageTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField>
              <label htmlFor="signup-email">{MSG_SIGN_UP_FORM_LABEL_EMAIL}</label>
              <input 
                type="text"
                id="signup-email" 
                name="email" 
                ref={register({ required: true })} 
              />
              {errors.email && <RequiredFieldError />}
            </FormField>

            <FormField>
              <label htmlFor="signup-password">{MSG_SIGN_UP_FORM_LABEL_PASSWORD}</label>
              <input 
                type="password"
                id="signup-password" 
                name="password" 
                ref={register({ required: true })} 
              />
              {errors.password && <RequiredFieldError />}
            </FormField>
            <input type="submit" value={MSG_SIGN_UP_FORM_SUBMIT_BUTTON}  />
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