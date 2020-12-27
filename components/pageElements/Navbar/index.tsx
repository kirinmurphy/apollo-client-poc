import React from "react";

import { NavbarTheme } from "./styles";

import { SiteLogoTheme } from '../Navbar/styles';
import { SiteLogo } from "./Logo";

import dynamic from 'next/dynamic';
const UserControls = dynamic(
  () => import('./UserControls'),
  { ssr: false }
);

interface Props {
  page: string;
}

export function Navbar ({ page }: Props): JSX.Element {
  return (
    <NavbarTheme>
      <div className="site-nav">
        <SiteLogoTheme>
          <SiteLogo page={page} />
        </SiteLogoTheme>
      </div>

      <UserControls page={page} />
    </NavbarTheme>
  );
}
