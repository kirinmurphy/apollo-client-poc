import React from "react";

import { PageContentWrapper } from '../../styles/globalCss';
import { useAuthenticator } from "../utils/useAuthenticator";
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
  const { isAuthenticated, sendToDefaultAuthenticatedPage } = useAuthenticator();
  const alreadyAuthed = isAuthenticated && anonOnlyPages.includes(page);
  if ( alreadyAuthed ) { sendToDefaultAuthenticatedPage(); }

  // useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      <main>
        <header>
          <PageContentWrapper>
            <Navbar 
              page={page}
              isAuthenticated={isAuthenticated} 
            />
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}

