import React from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { DocumentNode } from 'graphql';

import { PageContentWrapper, PageTitle } from '../pageElements/styles-elements';

import { AuthFormFieldsProps } from './AuthFormCommonFields';

import { useClientAuthController } from './utils/useClientAuthController';
import { MSGS_AUTH_FORMS } from '../utils/dictionary';
import { FullPageFormTheme } from './styles';

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

  const { onAuthorizationSuccess } = useClientAuthController();

  const [
    sendUpdateMutation, 
    { data = {}, error, loading }
  ] = useMutation(gqlMutation, {
    update: cache => {
      // dont wanna persist the auth props in the cache once JWT is stored in a cookie
      // able to use cache.modify to remove it, but not the supplied login credentials :/ 
      // not sure the use case of storing mutations so this will do until it won't
      cache.evict({ id: 'ROOT_MUTATION' });
    },
    onError: error => { console.log('error', error); }
  });

  // is there a cleaner way to pull this? 
  const errorCode = error?.graphQLErrors[0]?.extensions?.exception?.code;

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
      <FullPageFormTheme>
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
      </FullPageFormTheme>
    </PageContentWrapper>
  );
}
