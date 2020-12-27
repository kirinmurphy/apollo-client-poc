import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN } from '../../utils/dictionary';

import { PAGE_SIGNUP, PAGE_LOGIN } from '../constants';

import { useClientAuthController } from '../../authentication';
import { EnrolledNavControl } from './EnrolledNavControl';
import { UserControlsWrapper } from './styles';

interface Props {
  page: string;
}

export default function UserControls ({ page }: Props): JSX.Element {
  const { isAuthenticated } = useClientAuthController();
  // TODO - would there be any benefit to SSRing this?   
  const showAuthenticationElements = !isAuthenticated && typeof(Window) !== 'undefined';
  const showEnrolledElements = isAuthenticated && typeof(Window) !== 'undefined';

  return (
    <UserControlsWrapper>
      {showAuthenticationElements && (
        <>
          {page !== PAGE_LOGIN && (
            <Link href="/login">
              <a>{MSG_LINK_HEADER_LOGIN}</a>
            </Link>
          )}

          {page !== PAGE_SIGNUP && (
            <Link href="/signup">
              <a className="button sign-up">{MSG_LINK_HEADER_SIGNUP}</a>
            </Link>
          )}
        </>
      )}

      {showEnrolledElements && (
        <EnrolledNavControl page={page} />
      )}
    </UserControlsWrapper>
  );
}
