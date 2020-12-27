import React from "react";
import Link from 'next/link';

import { MSG_SITE_TITLE } from '../../utils/dictionary';
import { PAGE_HOME } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

interface Props {
  page: string;
}

export function SiteLogo ({ page }: Props): JSX.Element {
  return (
    <>
      {page !== PAGE_HOME && (
        <Link href="/">
          <a>{MSG_SITE_TITLE} <FontAwesomeIcon icon={faHome} /></a>
        </Link>
      )}
      {page === PAGE_HOME && MSG_SITE_TITLE}
    </>
  );
}
