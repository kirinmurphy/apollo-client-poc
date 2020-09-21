import React, { useEffect } from 'react';

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
          <div className="page-content-wrapper">
            <h1>Best Bite Chicago</h1>
          </div>
        </header>
        <div className="page-content">
          {children}
        </div>
      </main>  
    </>
  );
}
