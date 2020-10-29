import React from 'react';
import Link from 'next/link';

import { BiteSummaryProps } from '../../types';
import { CenterTextEllipticizer } from 'codethings-react-ui';

export function BiteSummary (props: BiteSummaryProps): JSX.Element {
  const { id, photo, name, source } = props;

  return (
    <Link href={`/bite/${encodeURIComponent(id)}`}>
      <div className="bite-summary">
        {photo && (
          <div className="bite-summary__image">
            <img src={process.env.IMAGE_ASSET_URL + photo.url} />
          </div>
        )}

        <a className="bite-summary__name link">{name}</a>

        <div className="bite-summary__source">
          <CenterTextEllipticizer rawText={`${source.name} - ${source?.location?.neighborhood}`} /> 
        </div>  
      </div>
    </Link>
  );
}
