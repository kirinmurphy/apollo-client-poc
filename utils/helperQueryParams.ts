import { LooseObject } from "../types/global";

export function getParamsWithRemovedParam (
  params: LooseObject, 
  key: string): string {
  
  const newParams = Object.keys(params)
    .filter((param) => param !== key)
    .map((param) => `${param}=${params[param]}`)
    .join('&');

  return !!newParams ? `?${newParams}` : '';
}

export function getParamsWithUpdatedParam (
  params: LooseObject, 
  key: string, 
  newValue: string): string {
  
  const updatedParams: LooseObject = { ...params, [key]: newValue };
  
  return '?' + Object.keys(updatedParams)
    .map((param) => `${param}=${updatedParams[param]}`)
    .join('&');
}
