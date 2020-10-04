import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { useRouter } from 'next/router';

interface UseAuthenticatorReturnProps {
  isAuthenticated: boolean;
  setAuthToken: (string) => void;
  logout: () => void;
  sendToDefaultAuthenticatedPage: () => void;
}

export const SECURE_COOKIE_NAME = 'sekkuuur';

export function useAuthenticator (): UseAuthenticatorReturnProps {
  const router = useRouter();
  const cookies = parseCookies();
  const isAuthenticated = !!cookies[SECURE_COOKIE_NAME];

  function sendToDefaultAuthenticatedPage () {
    router.push('/');
  }

  function logout () {
    destroyCookie(null, SECURE_COOKIE_NAME); 
    router.push('/');
  }

  function setAuthToken (jwtToken) {
    setCookie({}, SECURE_COOKIE_NAME, jwtToken, {
      maxAge: 60 * 10
    });
  }

  return { 
    isAuthenticated, 
    setAuthToken,
    logout,
    sendToDefaultAuthenticatedPage 
  }
}
