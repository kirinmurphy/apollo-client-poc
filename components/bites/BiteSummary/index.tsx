import React from 'react';
import { CenterTextEllipticizer } from 'codethings-react-ui';

import { BiteSummaryProps } from '../types';
// import { Photo } from '../../widgets/Photo';

export function BiteSummary (props: BiteSummaryProps): JSX.Element {
  const { attributes: { source, title } } = props;
  const { data: { attributes: sourceMeta } } = source;

  const neighborhood = sourceMeta?.location?.neighborhood;
  const neighborhoodName = neighborhood?.data?.attributes?.name;
  const sourceText = `${sourceMeta.name} - ${neighborhoodName}`;

  return (
    <>
      {/* <Photo photo={photo} /> */}

      <div className="bite-summary__details">
        <span className="bite-summary__name">{title}</span>

        <div className="bite-summary__source">
          <CenterTextEllipticizer rawText={sourceText} /> 
        </div>  
      </div>
    </>
  );
}
