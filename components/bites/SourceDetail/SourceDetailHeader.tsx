import { CommaSeparatedList } from "codethings-react-ui";
import { SourceProps } from "../types";
import { SourcesMap } from "../maps/SourcesMap";
import { SourceContactLinks } from "./SoureceContactLinks";

export function SourceDetailHeader (source: SourceProps): JSX.Element {
  const { 
    name,
    cuisines,
    location: { 
      neighborhood,
      phone
    },
    contactLinks
  } = source;
  
  return (
    <>
      <div className="primary-source-details">
        <div className="flex-grower"></div>
        <header>
          <h2>{name}</h2>

          <CommaSeparatedList collection={cuisines.map(cuisine => cuisine.name)} />
          {' - '} 
          <span>{neighborhood.name}</span>
        </header>

        <SourceContactLinks phone={phone} contactLinks={contactLinks} />
      </div>

      {/* FIX - goofy api for sources here */}
      <SourcesMap sources={[{ source }]} />
    </>
  );
}
