import React from "react";
import { CommaSeparatedList } from "codethings-react-ui";

import { BiteSummaryProps, CuisinesProps } from "../types";
import { BiteSummaryTheme } from "../BiteSummary/styles";
// import { Photo } from "../../widgets/Photo";
import { getFilteredBiteCuisines } from "./utils/getFilteredbuiteCuisines";

interface Props {
  bite: BiteSummaryProps;
  sourceCuisines: CuisinesProps;
}

export function SourceDetailBite ({ bite, sourceCuisines }: Props): JSX.Element {
  const { 
    // photo, 
    title, 
    // mealPreferences,
    cuisines: biteCuisines
  } = bite?.attributes;


  const filteredBiteCuisines = getFilteredBiteCuisines(sourceCuisines, biteCuisines);
  
  return (
    <BiteSummaryTheme layout={"full"}>
      {/* <Photo photo={photo} /> */}
      
      <div className="content">
        <h3>{title}</h3>

        {!!filteredBiteCuisines.length && (
          <div className="cuisines">
            <CommaSeparatedList collection={filteredBiteCuisines} />
          </div>
        )}

        {/* <div className="meal-preferences">{mealPreferences}</div> */}
      </div>
    </BiteSummaryTheme>
  );
}

