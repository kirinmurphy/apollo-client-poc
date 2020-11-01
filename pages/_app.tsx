import React from "react";
import 'codethings-react-ui/dist/styles.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

import Head from "next/head";
import '../styles/global.css';
import '../components/utils/fontAwesomeLibrary';

import { ApolloProvider, ApolloClient } from "@apollo/client";
import withApollo from "../utils/withApollo";
import { AppProps } from "next/app";
import { MSG_SITE_TITLE } from "../components/utils/dictionary";

interface Props extends AppProps {
  apollo: ApolloClient<string>
}

function App ({ Component, pageProps, apollo }: Props): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>{MSG_SITE_TITLE}</title>
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
export default withApollo(App);