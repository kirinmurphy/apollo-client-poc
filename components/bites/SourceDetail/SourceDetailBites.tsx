import React from "react";
import { CommaSeparatedList } from "codethings-react-ui";

import { CuisineProps, SourceBiteProps } from "../types";
import { BiteSummaryTheme } from "../BiteSummary/styles";
import { Photo } from "../../widgets/Photo";
import { getFilteredBiteCuisines } from "./utils/getFilteredbuiteCuisines";

interface Props {
  bite: SourceBiteProps;
  sourceCuisines: CuisineProps[];
}

export function SourceDetailBite ({ bite, sourceCuisines }: Props): JSX.Element {
  const { 
    photo, 
    name, 
    mealPreferences,
    cuisines: biteCuisines
  } = bite;

  const filteredBiteCuisines = getFilteredBiteCuisines(sourceCuisines, biteCuisines);
  
  return (
    <BiteSummaryTheme layout={"full"}>
      <Photo photo={photo} />
      
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

