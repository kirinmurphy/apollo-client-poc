import { 
  KeywordSearchFilterReturnProps, 
  useKeywordSearchFilter 
} from "../../../utils/useKeywordSearchFilter";

export const URL_PARAM_SEARCH_KEYWORD_CUISINE = 'cuisine';
export const URL_PARAM_SEARCH_KEYWORD_NEIGHBORHOOD = 'neighborhood';

export function useNeighborhoodFilter (): KeywordSearchFilterReturnProps {
  return useKeywordSearchFilter(URL_PARAM_SEARCH_KEYWORD_NEIGHBORHOOD);
}

export function useCuisineTypeFilter (): KeywordSearchFilterReturnProps {
  return useKeywordSearchFilter(URL_PARAM_SEARCH_KEYWORD_CUISINE);
}
