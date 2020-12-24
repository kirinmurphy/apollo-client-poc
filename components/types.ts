interface CuisineProps {
  name: string;
  id: string | number;
}

export interface SourceProps {
  id: string;
  name: string;
  location?: {
    neighborhood: {
      name: string;
    }
    latitude?: number;
    longitude?: number;
  }
}

export interface BiteSummaryProps {
  id: string | number;
  photo: {
    url: string;
  }, 
  name: string, 
  cuisines: CuisineProps[],
  source: SourceProps
}

export interface BiteImpressionProps {
  id: string;
  type: "favorite" | "interested" | "pass" | "never";
  bite: BiteSummaryProps;
}
