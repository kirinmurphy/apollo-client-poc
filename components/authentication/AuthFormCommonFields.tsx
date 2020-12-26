import { LooseObject } from 'codethings-react-ui/dist/widgets/types';
import React from 'react';

import { 
  MSG_ERROR_REQUIRED_FIELD, 
  MSG_AUTH_FORM_LABEL_EMAIL,
  MSG_AUTH_FORM_LABEL_PASSWORD
} from '../utils/dictionary';
import { FormFieldTheme } from './styles';

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
      <FormFieldTheme>
        <label htmlFor="email-field">{MSG_AUTH_FORM_LABEL_EMAIL}</label>
        <input 
          type="text"
          id="email-field" 
          name="email" 
          ref={register({ required: true })} 
        />
        {errors.email && <RequiredFieldError />}
      </FormFieldTheme>

      <FormFieldTheme>
        <label htmlFor="password-field">{MSG_AUTH_FORM_LABEL_PASSWORD}</label>
        <input 
          type="password"
          id="password-field" 
          name="password" 
          ref={register({ required: true })} 
        />
        {errors.password && <RequiredFieldError />}
      </FormFieldTheme>
    </>
  );
}
