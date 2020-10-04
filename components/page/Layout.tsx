import React from "react";

import { PageContentWrapper } from '../../styles/globalCss';
import { useAuthController } from "../authentication/useAuthController";
// import { redirectIfOldIE } from './utils/redirectIfOldIE';

import { Navbar } from "./Navbar";

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

export function Layout ({ children, page }: Props): JSX.Element {
  const { 
    isAuthenticated, 
    sendToDefaultAuthenticatedPage 
  } = useAuthController();

  // TODO - this should happen on the server 
  const authedOnAnonOnlyPage = isAuthenticated && anonOnlyPages.includes(page);
  if ( authedOnAnonOnlyPage ) { sendToDefaultAuthenticatedPage(); }

  // useEffect(() => { redirectIfOldIE(window); }, []);
  const showPage = !authedOnAnonOnlyPage;

  return (
    <>
      <main>
        <header>
          <PageContentWrapper>
            <Navbar page={page} />
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {showPage && children}
        </div>
      </main>  
    </>
  );
}
