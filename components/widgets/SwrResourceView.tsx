import React from 'react';

import { LoadingIcon } from 'codethings-react-ui';
import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

import { MSG_NO_SEARCH_RESULTS } from '../utils/dictionary';

interface RVProps {
  children: (arg0: any) => JSX.Element;
  data?: LooseObject[];
  error?: LooseObject;
}

export function SwrResourceView ({ children, data, error }: RVProps): JSX.Element {
  return (
    <>
      {data?.length && children(data)}

      {!!data && !data?.length && (
        <div>{MSG_NO_SEARCH_RESULTS}</div>
      )}

      {!data && !error && (
        <div><LoadingIcon /></div>
      )}

      {!!error && (
        <div>There was an error loading this data.</div>
      )}    
    </>
  );
}