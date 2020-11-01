import React from 'react';
import Link from 'next/link';

import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN } from '../utils/dictionary';
import { PAGE_SIGNUP, PAGE_LOGIN } from './Layout';
import { useClientAuthController } from '../authentication/useClientAuthController';
import { useCurrentUser } from '../utils/useCurrentUser';

interface Props {
  page: string;
}

function EnrolledNavControl (): JSX.Element {
  const { logout } = useClientAuthController();

  const { user } = useCurrentUser();
  console.log('user', user);

  return (
    <>
      <span>{user.email}</span>
      <span className="link" onClick={logout}>Logout</span>
    </>
  );
}


export default function UserControls ({ page }: Props): JSX.Element {
  const { isAuthenticated } = useClientAuthController();
  // TODO - would there be any benefit to SSRing this?   
  const showAuthenticationElements = !isAuthenticated && typeof(Window) !== 'undefined';
  const showEnrolledElements = isAuthenticated && typeof(Window) !== 'undefined';

  return (
    <div className="user-controls">
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

      {showEnrolledElements && <EnrolledNavControl />}
    </div>
  );
}
