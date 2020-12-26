import React from 'react';
import { CenterTextEllipticizer } from 'codethings-react-ui';

import { BiteSummaryProps } from '../types';
import { Photo } from '../../widgets/Photo';

export function BiteSummary (props: BiteSummaryProps): JSX.Element {
  const { photo, name, source } = props;

  const sourceText = `${source.name} - ${source?.location?.neighborhood.name}`;

  return (
    <>
      <Photo photo={photo} />

      <span className="bite-summary__name">{name}</span>

      <div className="bite-summary__source">
        <CenterTextEllipticizer rawText={sourceText} /> 
      </div>  
    </>
  );
}
