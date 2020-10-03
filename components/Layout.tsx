import Link from 'next/link';
import React from 'react';

import { PageContentWrapper, SiteTitle } from '../styles/globalCss';
import { MSG_LINK_HEADER_SIGNUP, MSG_SITE_TITLE } from './utils/dictionary';
// import { redirectIfOldIE } from './utils/redirectIfOldIE';

interface Props {
  children: JSX.Element;
  page?: string;

}

export const PAGE_HOME = 'home';
export const PAGE_SIGNUP = 'signup';

export function Layout ({ children, page }: Props): JSX.Element {

  // useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      <main>
        <header>
          <PageContentWrapper>
            <SiteTitle>
              {page !== PAGE_HOME && <Link href="/"><a>{MSG_SITE_TITLE}</a></Link>}
              {page === PAGE_HOME && MSG_SITE_TITLE}
            </SiteTitle>
            
            {page !== PAGE_HOME && <Link href="/"><a>Home</a></Link>}
            {page !== PAGE_SIGNUP && (
              <Link href="/signup"><a>{MSG_LINK_HEADER_SIGNUP}</a></Link>
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
