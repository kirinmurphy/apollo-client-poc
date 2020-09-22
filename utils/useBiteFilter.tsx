import { ClearParamType, UpdateParamType, useUrlParam } from '../utils/useUrlParam';

const BITE_TYPE_PARAM = 'biteType';

interface ReturnProps {
  biteTypeFromUrl: string;
  updateBiteType: UpdateParamType;
  clearBiteType: ClearParamType;
}

export function useBiteFilter (): ReturnProps {
  const { 
    paramValueFromUrl, 
    updateParam, 
    clearParam, 
  } = useUrlParam(BITE_TYPE_PARAM);

  return {
    biteTypeFromUrl: paramValueFromUrl,
    updateBiteType: updateParam,
    clearBiteType: clearParam
  };
}
