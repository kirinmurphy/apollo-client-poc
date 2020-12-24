import request from 'graphql-request';

import { defaultGraphQlFetcher, GRAPHQL_URL } from '../../../../utils/graphql-request-fetcher';

import { BITE_QUERY, FILTERED_BITE_QUERY } from '../../queries/bites';

interface GetStaticBiteQueryReturnProps {
  biteQuery: string,
  biteFetcher: (query: string) => Promise<string>;
}

interface GetDynamicBiteQueryReturnProps {
  biteQuery: [string, string],
  biteFetcher: (query: string, id: string) => Promise<any>;
}

export type GetBiteQueryReturnProps = GetStaticBiteQueryReturnProps | GetDynamicBiteQueryReturnProps;

export function getBiteQueryProps (activeSearchKeyword: string): GetBiteQueryReturnProps {
  return !!activeSearchKeyword 
    ? getKeywordProps(activeSearchKeyword)
    : defaultProps;
}

const defaultProps = {
  biteQuery: BITE_QUERY,
  biteFetcher: defaultGraphQlFetcher
};

function getKeywordProps (activeSearchKeyword): GetDynamicBiteQueryReturnProps {
  return {
    biteQuery: [FILTERED_BITE_QUERY, activeSearchKeyword],
    biteFetcher: (query, id) => request(GRAPHQL_URL, query, { searchKeyword: id })  
  };
};
