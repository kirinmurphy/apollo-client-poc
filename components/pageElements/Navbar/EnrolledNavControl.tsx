import React from 'react';
import Link from 'next/link';

import { Dropdownizer } from 'codethings-react-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { MSG_LOGOUT, MSG_LINK_ACCOUNT_PAGE } from '../../utils/dictionary';

import { PAGE_ACCOUNT } from '../constants';

import { useClientAuthController } from '../../authentication';
import { useCurrentUser } from '../../utils/useCurrentUser';

interface Props {
  page: string;
}

export function EnrolledNavControl ({ page }: Props): JSX.Element {
  const { logout } = useClientAuthController();
  const { user } = useCurrentUser();

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
