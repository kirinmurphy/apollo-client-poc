import { CuisineProps } from "../types";

interface GetFilteredCuisinesProps {
  cuisines: CuisineProps[];
  activeCuisineType: string;
  inputValue: string;
}

export function getFilteredCuisines (props:GetFilteredCuisinesProps): CuisineProps[] {
  const { cuisines, activeCuisineType, inputValue } = props;

  return cuisines
    .filter(cuisineType => { 
      if ( isActiveCuisine(cuisineType.name, activeCuisineType) ) { return false; }
      else { return getCuisineMatches(cuisineType.name, inputValue); }
    });
}

function isActiveCuisine (cuisineName, activeCuisineType) {
  if ( !activeCuisineType ) { return false; }
  return cuisineName.toLowerCase() === activeCuisineType.toLowerCase();
}

function getCuisineMatches (cuisineName, inputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, inputValue.length);
    return inputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
