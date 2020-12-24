import React from "react";
import { BiteSummaryProps } from "../../types";

interface Props {
  bite: BiteSummaryProps;
}

export function BiteDetail ({ bite }: Props): JSX.Element {
  const {
    photo,
    name,
    source: {
      name: sourceName,
      location: { neighborhood }
    }
  } = bite;

  return (
    <>
      <div>{sourceName}</div>
      
      <h2>{name}</h2>
  
      <div>{neighborhood.name}</div>
      
      {photo && (
        <div className="bite-summary__image">
          <img src={process.env.IMAGE_ASSET_URL + photo.url} />
        </div>
      )}
    </>
  );  
}
