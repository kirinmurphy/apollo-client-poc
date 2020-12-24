import React from 'react';

import { BiteSummaryProps } from '../../types';
import { CenterTextEllipticizer } from 'codethings-react-ui';

export function BiteSummary (props: BiteSummaryProps): JSX.Element {
  const { photo, name, source } = props;

  const imageUrl = process.env.IMAGE_ASSET_URL + photo.url;
  
  const sourceText = `${source.name} - ${source?.location?.neighborhood.name}`;

  return (
    <>
      {photo && (
        <div className="bite-summary__image">
          <img src={imageUrl} />
        </div>
      )}

      <span className="bite-summary__name">{name}</span>

      
      <div className="bite-summary__source">
        <CenterTextEllipticizer rawText={sourceText} /> 
      </div>  
    </>
  );
}
