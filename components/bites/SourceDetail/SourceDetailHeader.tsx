import { CommaSeparatedList } from "codethings-react-ui";
import { SourceProps } from "../../types";
import { SourcesMap } from "../maps/SourcesMap";

export function SourceDetailHeader (source: SourceProps): JSX.Element {
  const { 
    name,
    cuisines,
    location: { neighborhood }
  } = source;
  
  return (
    <>
      <header>
        <h2>{name}</h2>
        <CommaSeparatedList collection={cuisines.map(cuisine => cuisine.name)} />
        {' - '} 
        <div>{neighborhood.name}</div>
      </header>

        {/* FIX - goofy api for sources here */}
        <SourcesMap sources={[{ source }]} />
    </>
  );
}
