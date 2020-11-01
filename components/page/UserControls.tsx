import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import { Dropdownizer } from 'codethings-react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN, MSG_LOGOUT, MSG_LINK_ACCOUNT_PAGE } from '../utils/dictionary';

import { PAGE_SIGNUP, PAGE_LOGIN, PAGE_ACCOUNT } from './Layout';

import { useClientAuthController } from '../authentication/useClientAuthController';
import { useCurrentUser } from '../utils/useCurrentUser';

interface Props {
  page: string;
}

function EnrolledNavControl ({ page }: Props): JSX.Element {
  const { logout } = useClientAuthController();

  const { user } = useCurrentUser();
  console.log('user', user);

  return (
    <Dropdownizer 
      title={<FontAwesomeIcon icon={faUser} />}
      content={
        <>
          <div className="user-details">{user?.email}</div>

          {page !== PAGE_ACCOUNT && (
            <Link href="/account">
              <a><div className="dropdown-item">{MSG_LINK_ACCOUNT_PAGE}</div></a>
            </Link>
          )}
          <div className="dropdown-item" onClick={logout}>{MSG_LOGOUT}</div>
        </>
      }
    />
  );
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

      {showEnrolledElements && <EnrolledNavControl page={page} />}
    </UserControlsWrapper>
  );
}


const UserControlsWrapper = styled.div`
  position:relative;
  z-index:11;
  transform:translateY(5px);
  
  > a {
    text-transform:uppercase;

    &:not(.button) {
      color:var(--textcolor-base);
    }
  }

  .sign-up {
    display:inline-block;
    margin-left:1rem;
    background-color:#759b88;
    line-height:2rem;
    padding:0 .75rem;

    &:hover {
      color:var(--textcolor-inverted);
      text-decoration:none;
      background-color:#556b78;
    }
  }

  .svg-inline--fa {
    font-size:1.75rem;
    transform:translateY(.2rem);
    color:var(--textcolor-link);
  }

  .dropdownizer__window {
    width:200px;
    font-size:var(--fontSize-small);
  }

  .user-details,
  .dropdownizer .dropdown-item {
    padding:.3rem 1rem;
  }
`;
