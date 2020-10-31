import { 
  ClearParamType, 
  UpdateParamType, 
  useUrlParam 
} from 'codethings-nextjs-router-addons';

const URL_PARAM_SEARCH_KEYWORD = 'bite-search';

interface ReturnProps {
  activeSearchKeyword: string;
  updateSearchKeyword: UpdateParamType;
  clearSearchKeyword: ClearParamType;
}

export function useKeywordSearchFilter (): ReturnProps {
  const { 
    paramValue: activeSearchKeyword, 
    updateParam: updateSearchKeyword, 
    clearParam: clearSearchKeyword, 
  } = useUrlParam(URL_PARAM_SEARCH_KEYWORD);

  return {
    activeSearchKeyword,
    updateSearchKeyword,
    clearSearchKeyword
  };
}
