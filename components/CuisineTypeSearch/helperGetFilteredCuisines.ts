import { Cuisine } from ".";

interface GetFilteredCuisinesProps {
  cuisines: Cuisine[];
  cuisineTypeFromUrl: string | string[];
  searchInputValue: string;
}

export function getFilteredCuisines (props:GetFilteredCuisinesProps): Cuisine[] {
  const { cuisines, cuisineTypeFromUrl, searchInputValue } = props;

  return cuisines
    .filter(cuisineType => { 
      if ( isActiveCuisine(cuisineType.name, cuisineTypeFromUrl) ) { return false; }
      else { return getCuisineMatches(cuisineType.name, searchInputValue); }
    });
}

function isActiveCuisine (cuisineName, cuisineTypeFromUrl) {
  if ( !cuisineTypeFromUrl ) { return false; }
  // TODO - this array logic is repeated, need to abstract it into hook props
  const isArray = Array.isArray(cuisineTypeFromUrl);
  const formattedCuisineType = isArray ? cuisineTypeFromUrl.join(',') : cuisineTypeFromUrl;
  return cuisineName.toLowerCase() === formattedCuisineType.toLowerCase();
}

function getCuisineMatches (cuisineName, searchInputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, searchInputValue.length);
    return searchInputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
