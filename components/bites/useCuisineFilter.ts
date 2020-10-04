import { ClearParamType, UpdateParamType, useUrlParam } from 'codethings-nextjs-router-addons';

const CUISINE_TYPE_PARAM = 'cuisine';

interface ReturnProps {
  activeCuisineType: string;
  updateCuisineType: UpdateParamType;
  clearCuisineType: ClearParamType;
}

export function useCuisineFilter (): ReturnProps {
  const { 
    paramValue: activeCuisineType, 
    updateParam: updateCuisineType, 
    clearParam: clearCuisineType, 
  } = useUrlParam(CUISINE_TYPE_PARAM);

  return {
    activeCuisineType,
    updateCuisineType,
    clearCuisineType
  };
}
