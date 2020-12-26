import { NextPageContext } from 'next';
import nookies from 'nookies';
import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

import { 
  PATH_LOGIN, 
  PATH_ROOT, 
  SECURE_COOKIE_NAME 
} from './constants';

export function redirectIfNotAuthenticated (ctx: NextPageContext): void {
  if (!isAuthenticated(ctx)) { redirectTo(ctx, PATH_LOGIN); }
}

export function redirectIfAlreadyAuthenticated (ctx: NextPageContext) : void {
  if (isAuthenticated(ctx)) { redirectTo(ctx, PATH_ROOT); }
}

export function getDefaultPropsOnSecurePage (ctx: NextPageContext)
  : { props: LooseObject } {
  redirectIfNotAuthenticated(ctx);
  return { props: {} }
}

export function getDefaultPropsOnPublicOnlyPage (ctx: NextPageContext)
  : { props: LooseObject } {
  redirectIfAlreadyAuthenticated(ctx);
  return { props: {} }
}

function isAuthenticated (ctx: NextPageContext) {
  const cookies = nookies.get(ctx);
  return !!cookies[SECURE_COOKIE_NAME];
}

function redirectTo(ctx, path) {
  ctx.res.writeHead(307, { Location: path });
  ctx.res.end();
}
