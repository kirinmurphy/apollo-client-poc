import React from "react";
import 'codethings-react-ui/dist/styles.css';

import Head from "next/head";
import '../styles/global.css';

import { ApolloProvider, ApolloClient } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import { AppProps } from "next/app";

interface Props extends AppProps {
  apollo: ApolloClient<string>
}

function App ({ Component, pageProps, apollo }: Props): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

// Wraps all components in the tree with the data provider
export default withData(App);