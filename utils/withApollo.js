import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink 
} from "@apollo/client";

import withApollo from "next-with-apollo";
import fetch from "isomorphic-unfetch";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: process.env.API_URL + "/graphql"
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      connectToDevTools: true,
      link: link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);
