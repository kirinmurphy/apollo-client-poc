import { LooseObject } from "codethings-react-ui/dist/widgets/types";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import { useClientAuthController } from "../authentication";

const API_PATH_CURRENT_USER = `${process.env.API_URL}/users/me`;

interface UseCurrentUserReturnProps {
  secureGraphQlFetcher: (arg0: string) => LooseObject;
  secureFetcher: (arg0: string) => void;
  user: {
    email: string;
  }
}

export function useCurrentUser (): UseCurrentUserReturnProps {
  const { authToken } = useClientAuthController();

  const headers = { Authorization: `Bearer ${authToken}` };
  
  const secureFetcher = url => { 
    return fetch(url, { headers: headers }).then(r => r.json());
  }

  const secureGraphQlClient = new GraphQLClient(process.env.GRAPHQL_URL, { headers: headers });
  const secureGraphQlFetcher = query => secureGraphQlClient.request(query);
  
  const { data: user } = useSWR(API_PATH_CURRENT_USER, secureFetcher);

  return {
    secureGraphQlFetcher,
    secureFetcher,
    user 
  };
}
