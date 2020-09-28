
import React from 'react';

// import { CommaSeparatedList } from 'codethings-react-ui';

export interface ItemTypeProps {
  photo: {
    url: string;
  }, 
  name: string, 
  cuisines: {
    name: string;
  }[],
  source: {
    name: string;
    location?: {
      neighborhood: string;
      latitude?: number;
      longitude?: number;
    }
  }
}

export function Bite ({ photo, name, source }: ItemTypeProps): JSX.Element {

  return (
    <div className="bite-summary">
      {photo && (
        <div className="bite-summary__image">
          <img src={process.env.IMAGE_ASSET_URL + photo.url} />
        </div>
      )}
      
      <div className="bite-summary__name">{name}</div>

      <div className="bite-summary__source">{source.name} - {source?.location?.neighborhood}</div>  
    </div>
  );
}
