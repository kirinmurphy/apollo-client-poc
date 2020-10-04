import React from 'react';
import Link from 'next/link';

import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN } from '../utils/dictionary';
import { PAGE_SIGNUP, PAGE_LOGIN } from './Layout';
import { useAuthController } from '../authentication/useAuthController';

interface Props {
  page: string;
}

export default function UserControls ({ page }: Props): JSX.Element {
  const { isAuthenticated, logout } = useAuthController();
  // TODO - would there be any benefit to SSRing this?   
  const showAuthenticatedElements = !isAuthenticated && typeof(Window) !== 'undefined';
  const showEnrolledElements = isAuthenticated && typeof(Window) !== 'undefined';

  return (
    <div className="user-controls">
      {showAuthenticatedElements && (
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
        <>
          <span className="link" onClick={logout}>Logout</span>
        </>
      )}
    </div>
  );
}
