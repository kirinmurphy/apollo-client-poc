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

  const [sendUpdateMutation, { data = {} }] = useMutation(gqlMutation);
  
  const { onAuthorizationSuccess } = useClientAuthController();
  const jwtToken = data[authAction]?.jwt;
  if ( jwtToken ) { onAuthorizationSuccess(jwtToken); }

  const { register, handleSubmit, errors } =  useForm();
  const { PAGE_TITLE, SUBMIT_BUTTON_TEXT } = MSGS_AUTH_FORMS[authAction];

  function onSubmit (formData) {
    sendUpdateMutation({ variables: formData });
  }

  return (
    <PageContentWrapper>
      <FullPageFormWrapper>
        <PageTitle>{PAGE_TITLE}</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields({ register, errors })}
          <input type="submit" value={SUBMIT_BUTTON_TEXT}  />
        </form>
      </FullPageFormWrapper>
    </PageContentWrapper>
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
