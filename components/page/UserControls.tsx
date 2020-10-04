import React from 'react';
import Link from 'next/link';

import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN } from '../utils/dictionary';
import { PAGE_SIGNUP, PAGE_LOGIN } from './Layout';
import { useAuthenticator } from '../utils/useAuthenticator';

interface Props {
  page: string;
  isAuthenticated: boolean;
}

export default function UserControls ({ page, isAuthenticated }: Props): JSX.Element {
  const showAuthOptions = !isAuthenticated && typeof(Window) !== 'undefined';
  const showEnrolledElements = isAuthenticated && typeof(Window) !== 'undefined';

  const { logout } = useAuthenticator();

  return (
    <div className="user-controls">
      {showAuthOptions && (
        <>
          {page !== PAGE_SIGNUP && (
            <Link href="/signup"><a>{MSG_LINK_HEADER_SIGNUP}</a></Link>
          )}

          {page !== PAGE_LOGIN && (
            <Link href="/login"><a>{MSG_LINK_HEADER_LOGIN}</a></Link>
          )}
        </>
      )}

      {showEnrolledElements && (
        <>
          <div>Welcome guy!</div>
          <span className="link" onClick={logout}>Logout</span>
        </>
      )}
    </div>
  );
}
