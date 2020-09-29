import { ClearParamType, UpdateParamType, useUrlParam } from 'codethings-nextjs-router-addons';

const CUISINE_TYPE_PARAM = 'cuisine';

interface ReturnProps {
  cuisineTypeFromUrl: string | string[];
  updateCuisineType: UpdateParamType;
  clearCuisineType: ClearParamType;
}

export function useCuisineFilter (): ReturnProps {
  const { 
    paramValue: cuisineTypeFromUrl, 
    updateParam: updateCuisineType, 
    clearParam: clearCuisineType, 
  } = useUrlParam(CUISINE_TYPE_PARAM);

  return {
    cuisineTypeFromUrl,
    updateCuisineType,
    clearCuisineType
  };
}
