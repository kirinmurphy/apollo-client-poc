import Link from 'next/link';
import React from 'react';

import { PageContentWrapper, SiteTitle } from '../styles/globalCss';
import { MSG_LINK_HEADER_SIGNUP } from './utils/dictionary';
// import { redirectIfOldIE } from './utils/redirectIfOldIE';

interface Props {
  children: JSX.Element;
  page: string;

}

export function Layout ({ children, page }: Props): JSX.Element {

  // useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      <main>
        <header>
          <PageContentWrapper>
            <SiteTitle>Good Bites Chicago</SiteTitle>
            
            {page !== 'signup' && (
              <Link href="/signup">{MSG_LINK_HEADER_SIGNUP}</Link>
            )}
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}
