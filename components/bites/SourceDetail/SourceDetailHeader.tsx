import React from "react";
import { CommaSeparatedList } from "codethings-react-ui";

import { FlexPusher } from "../../pageElements/styles-elements";

import { SourceProps } from "../types";
import { SourcesMap } from "../maps/SourcesMap";
import { SourceContactLinks } from "./SoureceContactLinks";
import { SourceDeliveryOptions } from "./SourceDeliveryOptions";

export function SourceDetailHeader (source: SourceProps): JSX.Element {
  const { 
    name,
    cuisines,
    location: { 
      neighborhood,
      phone
    },
    contactLinks,
    deliveryOptions
  } = source.data.attributes;
  
  return (
    <>
      <div className="primary-source-details">
        <FlexPusher />
        <header>
          <h2>{name}</h2>

          <CommaSeparatedList collection={cuisines.data.map(({ attributes }) => attributes.name)} />
          {' - '} 
          <span>{neighborhood.data.attributes.name}</span>
        </header>

        <SourceContactLinks phone={phone} contactLinks={contactLinks} />

        <SourceDeliveryOptions 
          phone={phone} 
          website={contactLinks?.website}
          deliveryOptions={deliveryOptions} 
        />
      </div>

      {/* FIX - goofy api for sources here */}
      <SourcesMap sources={[{ source }]} />
    </>
  );
}
