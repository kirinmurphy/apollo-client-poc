import Link from 'next/link';
import React, { useReducer } from 'react';

import { PageContentWrapper, SiteTitle } from '../styles/globalCss';
import { MSG_LINK_HEADER_SIGNUP, MSG_LINK_HEADER_LOGIN, MSG_SITE_TITLE } from './utils/dictionary';
// import { redirectIfOldIE } from './utils/redirectIfOldIE';

import { parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element;
  page?: string;

}

export const PAGE_HOME = 'homepage';
export const PAGE_SIGNUP = 'signUp';
export const PAGE_LOGIN = 'signIn';

const anonOnlyPages = [
  PAGE_SIGNUP,
  PAGE_LOGIN
];

export const SECURE_COOKIE_NAME = 'sekkuuur';

export function Layout ({ children, page }: Props): JSX.Element {
  const router = useRouter();
  const cookies = parseCookies();
  console.log('cookies!!', cookies);
  const isAuthenticated = !!cookies[SECURE_COOKIE_NAME];
  if ( isAuthenticated && anonOnlyPages.includes(page)) { router.push(`/`); }

  const showAuthOptions = !isAuthenticated && typeof(Window) !== 'undefined';
  const showEnrolledElements = isAuthenticated && typeof(Window) !== 'undefined';
  // useEffect(() => { redirectIfOldIE(window); }, []);

  // https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function logout () { 
    destroyCookie({}, SECURE_COOKIE_NAME); 
    forceUpdate();
  }

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
            
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}
