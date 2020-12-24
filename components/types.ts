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

export interface BiteSummaryProps extends BiteBaseProps {
  cuisines: CuisineProps[],
  source: SourceProps
}

export interface BiteImpressionProps {
  id: string;
  type: "favorite" | "interested" | "pass" | "never";
  bite: BiteSummaryProps;
}

export interface SourceWithBitesProps extends SourceProps {
  bites: {
    id,
    name,
    mealPreferences,
    photo: {
      url: string;
    }
  }[]
}
