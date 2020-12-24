import useSWR from 'swr';
import { defaultGraphQlFetcher } from '../../../utils/graphql-request-fetcher';

import { URL_PARAM_SEARCH_KEYWORD_CUISINE } from '../../bites/SearchControl/utils/keywordFilterHooks';
import CUISINES_QUERY from '../queries/cuisines';

import { CategoryInputFilter } from '../../widgets/CategoryInputFilter';

export function CuisineFilter (): JSX.Element {
  const { data = {} } = useSWR(CUISINES_QUERY, defaultGraphQlFetcher);

  return (
    <CategoryInputFilter
      options={data.cuisines || []} 
      searchParamKey={URL_PARAM_SEARCH_KEYWORD_CUISINE}
    />    
  );
}
