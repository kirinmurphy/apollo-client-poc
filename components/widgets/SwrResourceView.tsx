import React from 'react';

import { LoadingIcon } from 'codethings-react-ui';
import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

import { MSG_NO_SEARCH_RESULTS } from '../utils/dictionary';

interface Props<ReturnProps> {
  children: (arg0: { collection: ReturnProps }) => JSX.Element;
  collection: any;
  error?: LooseObject;
}

export function SwrResourceView <ReturnProps,>(props: Props<ReturnProps>): JSX.Element {
  const { children, error, collection } = props;

  const { data } = collection || {};

  return (
    <>
      {data?.length && children({ collection: data })}

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
