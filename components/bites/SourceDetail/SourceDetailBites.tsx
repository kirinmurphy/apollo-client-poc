import React from "react";

import { CommaSeparatedList } from "codethings-react-ui";
import { CuisineProps, SourceBiteProps } from "../../types";
import { BiteSummaryTheme } from "../SearchResults/styles";

interface Props {
  bite: SourceBiteProps;
  sourceCuisines: CuisineProps[]
}

export function SourceDetailBite ({ bite, sourceCuisines }: Props): JSX.Element {
  const { 
    photo, 
    name, 
    mealPreferences,
    cuisines: biteCuisines
  } = bite;

  const photoUrl = process.env.IMAGE_ASSET_URL + photo.url;
  
  const filteredBiteCuisines = getFilteredBiteCuisines(sourceCuisines, biteCuisines);
  
  return (
    <BiteSummaryTheme layout={"full"}>
      {photo && (
        <div className="bite-summary__image">
          <img src={photoUrl} />
        </div>
      )}

      <div className="content">
        <h3>{name}</h3>
        {filteredBiteCuisines?.length && (
          <div className="cuisines">
            <CommaSeparatedList collection={filteredBiteCuisines} />
          </div>
        )}
        <div className="meal-preferences">{mealPreferences}</div>
      </div>
    </BiteSummaryTheme>
  );
}

function getFilteredBiteCuisines (sourceCuisines, biteCuisines) {
  const sourceCuisineNames = sourceCuisines.map(cuisine => cuisine.name);
  return biteCuisines
    .filter(biteCuisine => !sourceCuisineNames.includes(biteCuisine.name))
    .map(cuisine => cuisine.name);

}