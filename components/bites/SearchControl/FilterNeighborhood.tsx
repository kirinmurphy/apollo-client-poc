import useSWR from 'swr';
import { defaultGraphQlFetcher } from '../../../utils/graphql-request-fetcher';

import { URL_PARAM_SEARCH_KEYWORD_NEIGHBORHOOD } from './utils/keywordFilterHooks';
import { NEIGHBORHOOD_LIST_QUERY } from '../queries/neighborhoods';

import { CategoryInputFilter } from '../../widgets/CategoryInputFilter';

export function FilterNeighborhood (): JSX.Element {
  const { data = {} } = useSWR(NEIGHBORHOOD_LIST_QUERY, defaultGraphQlFetcher);

  return (
    <CategoryInputFilter
      options={data.neighborhoods || []} 
      searchParamKey={URL_PARAM_SEARCH_KEYWORD_NEIGHBORHOOD}
    />    
  );
}
