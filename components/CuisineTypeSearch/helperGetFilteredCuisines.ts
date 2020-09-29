import { Cuisine } from ".";

interface GetFilteredCuisinesProps {
  cuisines: Cuisine[];
  cuisineTypeFromUrl: string | string[];
  inputValue: string;
}

export function getFilteredCuisines (props:GetFilteredCuisinesProps): Cuisine[] {
  const { cuisines, cuisineTypeFromUrl, inputValue } = props;

  return cuisines
    .filter(cuisineType => { 
      if ( isActiveCuisine(cuisineType.name, cuisineTypeFromUrl) ) { return false; }
      else { return getCuisineMatches(cuisineType.name, inputValue); }
    });
}

function isActiveCuisine (cuisineName, cuisineTypeFromUrl) {
  if ( !cuisineTypeFromUrl ) { return false; }
  // TODO - this array logic is repeated, need to abstract it into hook props
  const isArray = Array.isArray(cuisineTypeFromUrl);
  const formattedCuisineType = isArray ? cuisineTypeFromUrl.join(',') : cuisineTypeFromUrl;
  return cuisineName.toLowerCase() === formattedCuisineType.toLowerCase();
}

function getCuisineMatches (cuisineName, inputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, inputValue.length);
    return inputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
