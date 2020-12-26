import React from "react";

import { PageContentWrapper } from '../../styles/globalStyles';

import { Navbar } from "./Navbar";

interface Props {
  children: JSX.Element;
  page?: string;
}

export const PAGE_HOME = 'homepage';
export const PAGE_SIGNUP = 'signup';
export const PAGE_LOGIN = 'login';
export const PAGE_ACCOUNT = 'account';

export function Layout ({ children, page }: Props): JSX.Element {
  // useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      <main>
        <header>
          <PageContentWrapper>
            <Navbar page={page} />
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}
