import React from "react";
import Link from 'next/link';
import styled from "styled-components";
import dynamic from 'next/dynamic';

import { MSG_SITE_TITLE } from '../utils/dictionary';

import { SiteTitle } from '../../styles/globalCss';
import { PAGE_HOME } from "./Layout";

const UserControls = dynamic(
  () => import('./UserControls'),
  { ssr: false }
);

interface Props {
  page: string;
  isAuthenticated: boolean;
}

export function Navbar ({ page, isAuthenticated }: Props): JSX.Element {
  return (
    <NavbarWrapper>
      <div className="site-nav">
        <SiteTitle>
          {page !== PAGE_HOME && <Link href="/"><a>{MSG_SITE_TITLE}</a></Link>}
          {page === PAGE_HOME && MSG_SITE_TITLE}
        </SiteTitle>
        
        {page !== PAGE_HOME && <Link href="/"><a>Home</a></Link>}
      </div>

      <UserControls 
        page={page} 
        isAuthenticated={isAuthenticated} 
      />
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  display:flex;
  justify-content: space-between;

  .site-nav {
    display:flex;
  }
`;
