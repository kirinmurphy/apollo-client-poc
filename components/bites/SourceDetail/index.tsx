import React from "react";
import { GridList } from "../../../styles/globalCss";
import { SourceWithBitesProps } from "../../types";
import { SourcesMap } from "../maps/SourcesMap";
import { BiteSourceMapWrapper, BiteSummaryTheme } from "../SearchResults/styles";

interface Props {
  source: SourceWithBitesProps;
}

export function SourceDetail ({ source }: Props): JSX.Element {
  const {
    name,
    location: { neighborhood },
    bites
  } = source;
  
  return (
    <>      
      <h2>{name}</h2>

      <div>{neighborhood.name}</div>

      <BiteSourceMapWrapper>
        {/* FIX - goofy api for sources here */}
        <SourcesMap sources={[{ source }]} />
      </BiteSourceMapWrapper>
      <br/>
        <hr/>
      <br/>

      <div className="source-bites">
        <GridList>
          {bites.map((bite) => {
            const { 
              id, 
              photo, 
              name, 
              mealPreferences 
            } = bite;

            const photoUrl = process.env.IMAGE_ASSET_URL + photo.url;

            return (
              <BiteSummaryTheme key={id}>
                {photo && (
                  <div className="bite-summary__image">
                    <img src={photoUrl} />
                  </div>
                )}

                <h3>{name}</h3>
                <div>{mealPreferences}</div>
              </BiteSummaryTheme>
            );
          })}
        </GridList>
      </div>
    </>
  );  
}

