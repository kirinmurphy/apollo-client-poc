import React from "react";

import { NavbarTheme } from "./styles";

import { SiteTitle } from '../../styles/globalStyles';
import { SiteLogo } from "./Logo";

// import dynamic from 'next/dynamic';
// const UserControls = dynamic(
//   () => import('./UserControls'),
//   { ssr: false }
// );

interface Props {
  page: string;
}

export function Navbar ({ page }: Props): JSX.Element {
  return (
    <NavbarTheme>
      <div className="site-nav">
        <SiteTitle>
          <SiteLogo page={page} />
        </SiteTitle>
      </div>

      {/* <UserControls page={page} /> */}
    </NavbarTheme>
  );
}

