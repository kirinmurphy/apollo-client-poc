import React from 'react';

import { BiteSummaryProps, SourceProps } from "../types";

interface Props {
  source: SourceProps;
  bites: BiteSummaryProps[];
}

export function BiteSourceMapMarker ({ source, bites }: Props): JSX.Element {
  return (
    <div>
      {source.name} - {source.location.neighborhood}
      
      {bites.map((bite, index) => {
        return (
          <div key={index}>{bite.name}</div>
        );
      })}
    </div>
  );
}
