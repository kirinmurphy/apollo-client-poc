import { CuisineProps } from "../types";

interface GetFilteredCuisinesProps {
  cuisines: CuisineProps[];
  activeCuisineType: string | string[];
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
  // TODO - this array logic is repeated, need to abstract it into hook props
  const isArray = Array.isArray(activeCuisineType);
  const formattedCuisineType = isArray ? activeCuisineType.join(',') : activeCuisineType;
  return cuisineName.toLowerCase() === formattedCuisineType.toLowerCase();
}

function getCuisineMatches (cuisineName, inputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, inputValue.length);
    return inputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
