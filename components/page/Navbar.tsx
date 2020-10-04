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
}

export function Navbar ({ page }: Props): JSX.Element {
  return (
    <NavbarWrapper>
      <div className="site-nav">
        <SiteTitle>
          {page !== PAGE_HOME && <Link href="/"><a>{MSG_SITE_TITLE}</a></Link>}
          {page === PAGE_HOME && MSG_SITE_TITLE}
        </SiteTitle>
        {/* {page !== PAGE_HOME && <Link href="/"><a>Home</a></Link>} */}
      </div>

      <UserControls page={page} />
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  display:flex;
  justify-content: space-between;
  padding-bottom:1rem;
  margin-bottom:1rem;
  border-bottom:1px solid #ddd;

  .site-nav {
    display:flex;
  }

  .user-controls {
    transform:translateY(5px);
  }
  
  .user-controls a {
    text-transform:uppercase;

    &:not(.button) {
      color:var(--textcolor-base);
    }
  }


  .user-controls .sign-up {
    display:inline-block;
    margin-left:1rem;
    background-color:#759b88;
    line-height:2rem;
    padding:0 .75rem;

    &:hover {
      color:var(--textcolor-inverted);
      text-decoration:none;
      background-color:#556b78;
    }
  }
`;
