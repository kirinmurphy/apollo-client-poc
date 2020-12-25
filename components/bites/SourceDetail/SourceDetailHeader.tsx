import { SourceProps } from "../../types";
import { SourcesMap } from "../maps/SourcesMap";

import { BiteSourceMapWrapper } from "../SearchResults/styles";

export function SourceDetailHeader (source: SourceProps): JSX.Element {
  const { 
    name,
    location: { neighborhood }
  } = source;
  
  return (
    <>
      <header>
        <h2>{name}</h2>
        <div>{neighborhood.name}</div>
      </header>

        {/* FIX - goofy api for sources here */}
        <SourcesMap sources={[{ source }]} />
    </>
  );
}
