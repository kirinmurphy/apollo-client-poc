import React from "react";

import { PageContentWrapper } from './styles-elements';

import { Navbar } from "./Navbar";

interface Props {
  children: JSX.Element;
  page?: string;
}


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
