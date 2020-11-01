import useSWR from "swr";
import { useClientAuthController } from "../authentication";

interface UseCurrentUserReturnProps {
  secureFetcher: (arg0: string) => void;
  user: {
    email: string;
  }
}

export function useCurrentUser (): UseCurrentUserReturnProps {
  const { authToken } = useClientAuthController();

  const path = `${process.env.API_URL}/users/me`;
  const headers = { Authorization: `Bearer ${authToken}` };
  const secureFetcher = url => fetch(url, { headers: headers }).then(r => r.json());
  
  const { data: user } = useSWR(path, secureFetcher);

  return {
    secureFetcher,
    user 
  };
}
