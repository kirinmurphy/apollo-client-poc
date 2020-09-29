import React from "react";
import { Layout } from "../components/Layout";
import Link from 'next/link';

export default function Bites (): JSX.Element {
  return (
    <Layout>
      <>
        <div>hey</div>
        <Link href="/">
          <span className="link">Home</span>
        </Link>      
      </>
    </Layout>
  );
}
