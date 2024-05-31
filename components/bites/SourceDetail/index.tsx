import React from "react";
// import styled, { css } from "styled-components";

// import { getPhotoUrl } from "../../widgets/Photo";

import { SourceWithBitesProps } from "../types";
import { SourceDetailBite } from "./SourceDetailBite";
import { SourceDetailHeader } from "./SourceDetailHeader";
import { SourceDetailHeaderTheme } from "./styles";

interface Props {
  source: SourceWithBitesProps;
}

export function SourceDetail ({ source }: Props): JSX.Element {
  const { bites, ...sourceMeta } = source.data.attributes;
  // const marqueeUrl = getPhotoUrl(sourceMeta.marqueeImage);
  return (
    <>   
      <SourceDetailHeaderTheme imageUrl={'asdf'} 
        className="panel panel--inverted">
        
        <SourceDetailHeader {...source} />
      </SourceDetailHeaderTheme>

      {bites.data.map((bite) => {
        return <SourceDetailBite 
          key={bite.id} 
          bite={bite}
          sourceCuisines={sourceMeta.cuisines}
        />;
      })}
    </>
  );  
}
