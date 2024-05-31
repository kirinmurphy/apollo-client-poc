import { CuisinesProps } from "../../types";

export function getFilteredBiteCuisines (
  sourceCuisines: CuisinesProps, 
  biteCuisines: CuisinesProps): string[] {
  
  const sourceCuisineNames = sourceCuisines.data.map(cuisine => cuisine.attributes.name);
  
  return biteCuisines.data
    .filter(biteCuisine => !sourceCuisineNames.includes(biteCuisine.attributes.name))
    .map(cuisine => cuisine.attributes.name);
}
