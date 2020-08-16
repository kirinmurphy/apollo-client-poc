import React from 'react';
import Query from './Query';
import { DocumentNode } from 'graphql';

interface Props {
  query: DocumentNode;
  collectionKey: string;
  children: (args0: { itemProps: any }) => JSX.Element;
}

export function CollectionQuery ({ query, collectionKey, children }: Props): JSX.Element {
  return (
    <Query query={query} id={null}>
      {({ data }) => {
        return (
          <>
            {data[collectionKey].map((itemProps, index) => {
              return <React.Fragment key={index}>
                {children({ itemProps })}
              </React.Fragment>
            })}
          </>
        );
      }}
    </Query>
  );
}
