// https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render
import { useReducer } from 'react';

export function useForceUpdate (): () => void {
  const [, forceUpdate] = useReducer(x => x + 1, 0);  
  return forceUpdate;  
}
