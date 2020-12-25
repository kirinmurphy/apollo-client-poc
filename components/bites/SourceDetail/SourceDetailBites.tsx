import { CommaSeparatedList } from "codethings-react-ui";
import React from "react";
import { SourceBiteProps } from "../../types";
import { BiteSummaryTheme } from "../SearchResults/styles";

interface Props {
  bite: SourceBiteProps;
}

export function SourceDetailBite ({ bite }: Props): JSX.Element {
  const { 
    photo, 
    name, 
    mealPreferences,
    cuisines
  } = bite;

  const photoUrl = process.env.IMAGE_ASSET_URL + photo.url;

  return (
    <BiteSummaryTheme layout={"full"}>
      {photo && (
        <div className="bite-summary__image">
          <img src={photoUrl} />
        </div>
      )}

      <div className="content">
        <h3>{name}</h3>
        <div className="cuisines">
          <CommaSeparatedList collection={cuisines.map(cuisine => cuisine.name)} />
        </div>
        <div className="meal-preferences">{mealPreferences}</div>
      </div>
    </BiteSummaryTheme>
  );
}