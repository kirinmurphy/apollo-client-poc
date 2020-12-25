interface PhotoProps { 
  url: string 
};

interface CuisineProps {
  name: string;
  id: string | number;
}

interface BiteBaseProps {
  id: string | number;
  photo: PhotoProps, 
  name: string
}

export interface SourceLocationProps {
  neighborhood: {
    name: string;
  }
  latitude?: number;
  longitude?: number;
}

export interface SourceProps {
  id: string;
  name: string;
  location?: SourceLocationProps
}

export interface BiteSummaryProps extends BiteBaseProps {
  cuisines: CuisineProps[],
  source: SourceProps
}

export interface BiteImpressionProps {
  id: string;
  type: "favorite" | "interested" | "pass" | "never";
  bite: BiteSummaryProps;
}

export interface SourceBiteProps {
  id: string;
  name: string;
  mealPreferences: string;
  photo: PhotoProps,
  cuisines: {
    name: string;
  }[]
}

export interface SourceWithBitesProps extends SourceProps {
  bites: SourceBiteProps[];
}

