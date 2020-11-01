import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { useRouter } from 'next/router';

import { 
  PATH_ROOT, 
  SECURE_COOKIE_NAME 
} from './constants';

interface useClientAuthControllerReturnProps {
  authToken: string;
  isAuthenticated: boolean;
  logout: () => void;
  onAuthorizationSuccess: (arg0: string) => void;
}

const COOKIE_MAX_AGE = 60 * 10;

export function useClientAuthController (): useClientAuthControllerReturnProps {
  const router = useRouter();
  const cookies = parseCookies();
  const authToken = cookies[SECURE_COOKIE_NAME];
  const isAuthenticated = !!authToken;

  function onAuthorizationSuccess (authToken) {
    setAuthToken(authToken);
    sendToDefaultAuthenticatedPage();
  }

  function logout () {
    destroyCookie(null, SECURE_COOKIE_NAME, {
      path: PATH_ROOT
    }); 
    sendToDefaultPublicPage();
  }

  // HELPERS 
  function setAuthToken (jwtToken) {
    setCookie({}, SECURE_COOKIE_NAME, jwtToken, {
      maxAge: COOKIE_MAX_AGE,
      path: PATH_ROOT
    });
  }

  function sendToDefaultPublicPage () {
    router.push(PATH_ROOT);
  }

  function sendToDefaultAuthenticatedPage () {
    router.push(PATH_ROOT);
  }

  return { 
    authToken,
    isAuthenticated, 
    onAuthorizationSuccess,
    logout
  }
}
