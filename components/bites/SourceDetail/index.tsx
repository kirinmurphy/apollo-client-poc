import React from "react";
import { GridList } from "../../../styles/globalCss";
import { BiteSummaryProps, SourceProps, SourceWithBitesProps } from "../../types";
import { BiteSummary } from "../SearchResults/BiteSummary";
import { BiteTheme } from "../SearchResults/styles";

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

      <div className="source-bites">
        <GridList>
          {bites.map((bite) => {
            const { id, photo, name } = bite;
            const photoUrl = process.env.IMAGE_ASSET_URL + photo.url;

            return (
              <BiteTheme key={id}>
                <div className="bite-summary">
                  {photo && (
                    <div className="bite-summary__image">
                      <img src={photoUrl} />
                    </div>
                  )}

                  <h3>{name}</h3>
                </div>
              </BiteTheme>
            );
          })}
        </GridList>
      </div>
    </>
  );  
}

