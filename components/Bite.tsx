import React from 'react';

import { CommaSeparatedList } from 'codethings-react-ui';

export interface ItemTypeProps {
  photo: {
    url: string;
  }, 
  name: string, 
  bite_types: {
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

export function Bite ({ photo, name, bite_types, source }: ItemTypeProps): JSX.Element {

  return (
    <div className="bite-summary">
      {photo && (
        <div className="bite-summary__image">
          <img src={process.env.API_URL + photo.url} />
        </div>
      )}
      
      <div className="bite-summary__name">{name}</div>

      <CommaSeparatedList
        name="categories"
        collection={bite_types?.map((type) => type.name)}
      />

      <div className="bite-summary__source">{source.name} - {source?.location?.neighborhood}</div>  
    </div>
  );
}