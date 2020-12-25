import React from "react";
import Link from 'next/link';
import styled from "styled-components";
import dynamic from 'next/dynamic';

import { MSG_SITE_TITLE } from '../utils/dictionary';

import { SiteTitle } from '../../styles/globalCss';
import { PAGE_HOME } from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
          {page !== PAGE_HOME && (
            <Link href="/">
              <a>{MSG_SITE_TITLE} <FontAwesomeIcon icon={faHome} /></a>
            </Link>
          )}
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
`;
