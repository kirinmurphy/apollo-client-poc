export { AuthForm } from './AuthForm';
export { AuthFormCommonFields } from './AuthFormCommonFields';
export { useClientAuthController } from './utils/useClientAuthController';

export { 
  redirectIfNotAuthenticated,
  redirectIfAlreadyAuthenticated,
  getDefaultPropsOnPublicOnlyPage,
  getDefaultPropsOnSecurePage 
} from './utils/serverAuthController';
