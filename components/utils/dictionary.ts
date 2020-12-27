export const MSG_SITE_TITLE = process.env.SITE_TITLE || 'Site Title';

export const MSG_SHOW_ALL_RESULTS = 'show all';

export const MSG_NO_SEARCH_RESULTS = 'No Results';
export const MSG_NO_TYPEAHEAD_MATCHES = 'No matching cuisines.';
export const MSG_FILTER_VIEW_ALL_RESULTS = 'All Cuisine Types';

export const MSG_ERROR_REQUIRED_FIELD = 'This field is required.';

export const MSG_AUTH_FORM_LABEL_EMAIL = 'Email Address';
export const MSG_AUTH_FORM_LABEL_PASSWORD = 'Password';

export const MSG_LINK_HEADER_SIGNUP = 'Sign Up';
export const MSG_LINK_HEADER_LOGIN = 'Login';
export const MSG_LOGOUT = 'Logout';
export const MSG_LINK_ACCOUNT_PAGE = 'Account';

export const MSGS_AUTH_FORMS = {
  login: {
    MSG_PAGE_TITLE: 'Login',
    MSG_SUBMIT_BUTTON_TEXT: 'Login',
    MSG_AUTH_FAILED: 'Login credentials failed.'
  },
  register: {
    MSG_PAGE_TITLE: 'Create an Account',
    MSG_SUBMIT_BUTTON_TEXT: 'Sign Up',
    MSG_AUTH_FAILED: 'Unable to create an account with these credentials.'
  }
}

export const MSGS_PREFERRED_DELIVERY_METHODS = {
  thirdPartyService: {
    text: 'Preferred delivery avaialble through',
    links: {
      uberEats: { name: 'Uber Eats', link: 'https://www.ubereats.com' },
      grubhub: { name: 'Grubhub', link: 'https://www.grubhub.com' }
    }
  },
  call: {
    linkText: 'Call ahead',
    text: 'for best delivery service.'
  },
  website: {
    linkText: 'Order online',
    text: 'for best delivery service.'
  },
  otherLink: {
    linkText: 'Check here',
    text: 'for delivery options.'
  }
};
