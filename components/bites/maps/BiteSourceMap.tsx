import React from 'react';

import { BiteSummaryProps } from '../types';
import { getSourcesWithBites } from '../utils/getSourcesWithBites';
import { SourcesMap } from './SourcesMap';

interface Props {
  bites: BiteSummaryProps[]
}

export function BiteSourceMap ({ bites }: Props): JSX.Element {
  const sourcesWithBites = getSourcesWithBites(bites);
  return <SourcesMap sources={sourcesWithBites} />;
}
