import { 
  ClearParamType, 
  UpdateParamType, 
  useUrlParam 
} from 'codethings-nextjs-router-addons';

export interface KeywordSearchFilterReturnProps {
  activeSearchKeyword: string;
  updateSearchKeyword: UpdateParamType;
  clearSearchKeyword: ClearParamType;
}

export function useKeywordSearchFilter (keyword: string): KeywordSearchFilterReturnProps {
  const { 
    paramValue: activeSearchKeyword, 
    updateParam: updateSearchKeyword, 
    clearParam: clearSearchKeyword, 
  } = useUrlParam(keyword);

  return {
    activeSearchKeyword,
    updateSearchKeyword,
    clearSearchKeyword
  };
}
