import { CuisineProps } from "../../types";

interface GetFilteredCuisinesProps {
  cuisines: CuisineProps[];
  activeSearchKeyword: string;
  inputValue: string;
}

export function getFilteredCuisines (props:GetFilteredCuisinesProps): CuisineProps[] {
  const { cuisines, activeSearchKeyword, inputValue } = props;

  return cuisines
    .filter(cuisineType => { 
      return isActiveCuisine(cuisineType.name, activeSearchKeyword) 
        ? false
        : getCuisineMatches(cuisineType.name, inputValue);
    });
}

function isActiveCuisine (cuisineName, activeSearchKeyword) {
  return !!activeSearchKeyword 
    ? cuisineName.toLowerCase() === activeSearchKeyword.toLowerCase()
    : false;
}

function getCuisineMatches (cuisineName, inputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, inputValue.length);
    return inputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
