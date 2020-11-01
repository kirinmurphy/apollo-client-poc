import useSWR from "swr";
import { useClientAuthController } from "../authentication";

const API_PATH_CURRENT_USER = `${process.env.API_URL}/users/me`;

interface UseCurrentUserReturnProps {
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
  
  const { data: user } = useSWR(API_PATH_CURRENT_USER, secureFetcher);

  return {
    secureFetcher,
    user 
  };
}
