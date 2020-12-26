import { CuisineProps } from "../../types";

export function getFilteredBiteCuisines (
  sourceCuisines: CuisineProps[], 
  biteCuisines: CuisineProps[]): string[] {
  
  const sourceCuisineNames = sourceCuisines.map(cuisine => cuisine.name);
  
  return biteCuisines
    .filter(biteCuisine => !sourceCuisineNames.includes(biteCuisine.name))
    .map(cuisine => cuisine.name);
}
