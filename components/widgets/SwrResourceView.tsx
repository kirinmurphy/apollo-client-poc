import React from 'react';

import { LoadingIcon } from 'codethings-react-ui';
import { LooseObject } from 'codethings-react-ui/dist/widgets/types';

import { MSG_NO_SEARCH_RESULTS } from '../utils/dictionary';

interface Props {
  children: (arg0: any) => JSX.Element;
  data?: any;
  collection?: LooseObject[];
  error?: LooseObject;
}

export function SwrResourceView (props: Props): JSX.Element {
  const { children, data, error, collection } = props;

  // collection is an override for graphql queries
  // which include a resource key
  const results = collection || data;

  return (
    <>
      {results?.length && children(results)}

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
