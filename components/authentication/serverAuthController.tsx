import { NextPageContext } from 'next';
import nookies from 'nookies';
import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

import { 
  PATH_LOGIN, 
  PATH_ROOT, 
  SECURE_COOKIE_NAME 
} from './constants';

function isAuthenticated (ctx: NextPageContext) {
  const cookies = nookies.get(ctx);
  return !!cookies[SECURE_COOKIE_NAME];
}

export function redirectIfNotAuthenticated (ctx: NextPageContext): void {
  if (!isAuthenticated(ctx)) {
    ctx.res.writeHead(307, { Location: PATH_LOGIN }).end();
  }
}

export async function getDefaultPropsOnSecurePage (ctx: NextPageContext)
  : Promise<{ props: LooseObject }> {
  redirectIfNotAuthenticated(ctx);
  return { props: {} }
}

export function redirectIfAlreadyAuthenticated (ctx: NextPageContext) : void {
  if (isAuthenticated(ctx)) {
    ctx.res.writeHead(307, { Location: PATH_ROOT }).end();
  }
}

export async function getDefaultPropsOnPublicOnlyPage (ctx: NextPageContext)
  : Promise<{ props: LooseObject }> {
  redirectIfAlreadyAuthenticated(ctx);
  return { props: {} }
}
