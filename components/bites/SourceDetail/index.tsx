import React from "react";

import { SourceWithBitesProps } from "../types";
import { SourceDetailBite } from "./SourceDetailBites";
import { SourceDetailHeader } from "./SourceDetailHeader";
import { SourceDetailHeaderTheme } from "./styles";

interface Props {
  source: SourceWithBitesProps;
}

export function SourceDetail ({ source }: Props): JSX.Element {
  const { bites, ...rest } = source;
  
  return (
    <>    
      <SourceDetailHeaderTheme>
        <SourceDetailHeader {...rest} />    
      </SourceDetailHeaderTheme>

      {bites.map((bite) => {
        return <SourceDetailBite 
          key={bite.id} 
          bite={bite}
          sourceCuisines={rest.cuisines}
        />;
      })}
    </>
  );  
}

