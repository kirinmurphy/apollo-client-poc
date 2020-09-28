import { ClearParamType, UpdateParamType, useUrlParam } from '../utils/useUrlParam';

const BITE_TYPE_PARAM = 'cuisine';

interface ReturnProps {
  cuisineTypeFromUrl: string;
  updateCuisineType: UpdateParamType;
  clearCuisineType: ClearParamType;
}

export function useBiteFilter (): ReturnProps {
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
