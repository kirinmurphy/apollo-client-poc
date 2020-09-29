
import React from 'react';
import { BiteSummaryProps } from '../types';

export function BiteSummary ({ photo, name, source }: BiteSummaryProps): JSX.Element {

  return (
    <div className="bite-summary">
      {photo && (
        <div className="bite-summary__image">
          <img src={process.env.IMAGE_ASSET_URL + photo.url} />
        </div>
      )}
      
      <div className="bite-summary__name">{name}</div>

      <div className="bite-summary__source">
        {source.name} - {source?.location?.neighborhood}
      </div>  
    </div>
  );
}
