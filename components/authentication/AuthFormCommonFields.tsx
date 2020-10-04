import { LooseObject } from 'codethings-react-ui/dist/widgets/types';
import React from 'react';
import styled from 'styled-components';

import { 
  MSG_ERROR_REQUIRED_FIELD, 
  MSG_AUTH_FORM_LABEL_EMAIL,
  MSG_AUTH_FORM_LABEL_PASSWORD
} from '../utils/dictionary';

function RequiredFieldError () {
  return (
    <span className="field-error">{MSG_ERROR_REQUIRED_FIELD}</span>
  );
}

export interface AuthFormFieldsProps {
  register: any;
  errors: LooseObject;
}

export function AuthFormCommonFields ({ register, errors }: AuthFormFieldsProps): JSX.Element {
  return (
    <>
      <FormField>
        <label htmlFor="email-field">{MSG_AUTH_FORM_LABEL_EMAIL}</label>
        <input 
          type="text"
          id="email-field" 
          name="email" 
          ref={register({ required: true })} 
        />
        {errors.email && <RequiredFieldError />}
      </FormField>

      <FormField>
        <label htmlFor="password-field">{MSG_AUTH_FORM_LABEL_PASSWORD}</label>
        <input 
          type="password"
          id="password-field" 
          name="password" 
          ref={register({ required: true })} 
        />
        {errors.password && <RequiredFieldError />}
      </FormField>
    </>
  );
}

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
