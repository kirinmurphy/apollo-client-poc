import React from 'react';

import { PageContentWrapper, SiteTitle } from '../styles/globalCss';
// import { portfolioGlobal } from './css/portfolioGlobal';
// import { globalVariables } from '../portfolioData/cssVariables';
// import { redirectIfOldIE } from './utils/redirectIfOldIE';

interface Props {
  children: JSX.Element;
}

export function Layout ({ children }: Props): JSX.Element {

  // useEffect(() => { redirectIfOldIE(window); }, []);

  return (
    <>
      {/* <style jsx global>{globalVariables}</style>
      <style jsx global>{portfolioGlobal}</style> */}

      <main>
        <header>
          <PageContentWrapper>
            <SiteTitle>Best Bite Chicago</SiteTitle>
          </PageContentWrapper>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}
