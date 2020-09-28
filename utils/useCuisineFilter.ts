import { ClearParamType, UpdateParamType, useUrlParam } from './useUrlParam';

const BITE_TYPE_PARAM = 'cuisine';

interface ReturnProps {
  cuisineTypeFromUrl: string;
  updateCuisineType: UpdateParamType;
  clearCuisineType: ClearParamType;
}

export function useCuisineFilter (): ReturnProps {
  const { 
    paramValueFromUrl, 
    updateParam, 
    clearParam, 
  } = useUrlParam(BITE_TYPE_PARAM);

  return {
    cuisineTypeFromUrl: paramValueFromUrl,
    updateCuisineType: updateParam,
    clearCuisineType: clearParam
  };
}
