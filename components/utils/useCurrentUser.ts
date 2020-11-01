import useSWR from "swr";
import { parseCookies } from 'nookies';
import { SECURE_COOKIE_NAME } from "../authentication/constants";

interface UseCurrentUserReturnProps {
  user: {
    email: string;
  }
}

export function useCurrentUser (): UseCurrentUserReturnProps {
  const cookies = parseCookies();
  const authToken = cookies[SECURE_COOKIE_NAME];

  const path = `${process.env.API_URL}/users/me`;
  const headers = { Authorization: `Bearer ${authToken}` };
  const fetcher = url => fetch(url, { headers: headers })
    .then(r => r.json())
  
  const { data: user } = useSWR(path, fetcher);

  return {
    user 
  };
}
