import React from "react";
import { BiteSummaryProps } from "../types";
import { Photo } from "../../widgets/Photo";

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
      
      <Photo photo={photo} />
    </>
  );  
}
