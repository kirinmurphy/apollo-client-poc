import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { DocumentNode } from 'graphql';

import { PageContentWrapper, PageTitle } from '../../styles/globalCss';

import { AuthFormFieldsProps } from './AuthFormCommonFields';

import { useClientAuthController } from './useClientAuthController';
import { MSGS_AUTH_FORMS } from '../utils/dictionary';

interface AuthFormProps {
  fields: (arg0: AuthFormFieldsProps) => JSX.Element;
  authAction: 'login' | 'register';
  gqlMutation: DocumentNode;
}

export function AuthForm (props: AuthFormProps): JSX.Element {
  const { 
    fields, 
    authAction, 
    gqlMutation 
  } = props;

  const [
    sendUpdateMutation, 
    { data = {}, error, loading }
  ] = useMutation(gqlMutation, {
    update: client => {
      console.log('hey', client);
    }
  });

  // is there a cleaner way to pull this? 
  const errorCode = error?.graphQLErrors[0]?.extensions?.exception?.code;

  const { onAuthorizationSuccess } = useClientAuthController();
  const jwtToken = data[authAction]?.jwt;
  if ( jwtToken ) { onAuthorizationSuccess(jwtToken); }

  const { register, handleSubmit, errors } =  useForm();
  const { 
    MSG_PAGE_TITLE, 
    MSG_SUBMIT_BUTTON_TEXT, 
    MSG_AUTH_FAILED 
  } = MSGS_AUTH_FORMS[authAction];

  const formDisabled = loading || !!jwtToken;

  function onSubmit (formData) {
    sendUpdateMutation({ variables: formData });
  }

  return (
    <PageContentWrapper>
      <FullPageFormWrapper>
        <PageTitle>{MSG_PAGE_TITLE}</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields({ register, errors })}

          {!!errorCode && errorCode === 400 && (
            <div className="form-error">{MSG_AUTH_FAILED}</div>
          )}

          <button type="submit" disabled={formDisabled}>
            <span>{MSG_SUBMIT_BUTTON_TEXT}</span>
          </button>
        </form>
      </FullPageFormWrapper>
    </PageContentWrapper>
  );
}

const FullPageFormWrapper = styled.div`
  width:500px;
  margin:0 auto;
  padding: 1rem;

  .field-error {
    color: var(--textcolor-error);
    font-size:var(--fontSize-small);
  }

  .form-error {
    margin-bottom:1rem;
    font-size:var(--fontSize-small);
    color:var(--textcolor-error);
  }

  button[type="submit"] { 
    width:100%;
    height:3rem;
  }
`;
