import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { useRouter } from 'next/router';

interface useAuthControllerReturnProps {
  isAuthenticated: boolean;
  setAuthToken: (string) => void;
  logout: () => void;
  setAsLoggedInIfAuthenticated: (arg0: string) => void;
  sendToDefaultAuthenticatedPage: () => void;
  redirectIfAuthedOnAnonOnlyPage: (boolean) => void;
}

export const SECURE_COOKIE_NAME = 'sekkuuur';

export function useAuthController (): useAuthControllerReturnProps {
  const router = useRouter();
  const cookies = parseCookies();
  const isAuthenticated = !!cookies[SECURE_COOKIE_NAME];

  function setAuthToken (jwtToken) {
    setCookie({}, SECURE_COOKIE_NAME, jwtToken, {
      maxAge: 60 * 10
    });
  }

  function setAsLoggedInIfAuthenticated (jwtToken) {
    if ( jwtToken ) { 
      setAuthToken(jwtToken);
      sendToDefaultAuthenticatedPage();
    }  
  }

  function logout () {
    destroyCookie(null, SECURE_COOKIE_NAME); 
    router.push('/');
  }

  function sendToDefaultAuthenticatedPage () {
    router.push('/');
  }

  function redirectIfAuthedOnAnonOnlyPage (onAnonPage) {
    const authedOnAnonOnlyPage = isAuthenticated && onAnonPage;
    if ( authedOnAnonOnlyPage ) { sendToDefaultAuthenticatedPage(); }  
  }

  return { 
    isAuthenticated, 
    setAuthToken,
    setAsLoggedInIfAuthenticated,
    logout,
    sendToDefaultAuthenticatedPage,
    redirectIfAuthedOnAnonOnlyPage
  }
}
