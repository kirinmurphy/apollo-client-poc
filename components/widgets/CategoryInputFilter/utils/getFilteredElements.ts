import { FilterOptionsProps } from "../types";

interface GetFilteredElementsProps {
  options: FilterOptionsProps;
  activeSearchKeyword: string;
  inputValue: string;
}

export function getFilteredElements (props:GetFilteredElementsProps): FilterOptionsProps {
  const { options, activeSearchKeyword, inputValue } = props;

  return options
    .filter(({ name }) => { 
      const alreadyActive = isActive(name, activeSearchKeyword);
      return alreadyActive ? false : getMatches(name, inputValue);
    });
}

function isActive (cuisineName, activeSearchKeyword) {
  return !!activeSearchKeyword 
    ? cuisineName.toLowerCase() === activeSearchKeyword.toLowerCase()
    : false;
}

function getMatches (cuisineName, inputValue) {
  return cuisineName.split(' ').filter((wordInName) => {
    const matchingPart = wordInName.slice(0, inputValue.length);
    return inputValue.toLowerCase() === matchingPart.toLowerCase();
  }).length > 0;
}
