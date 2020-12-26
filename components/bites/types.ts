import { PhotoProps } from "../widgets/types";

interface BiteBaseProps {
  id: string | number;
  photo: PhotoProps;
  name: string;
  cuisines: CuisineProps[];
}

interface LocationProps {
  neighborhood: {
    name: string;
  }
  latitude?: number;
  longitude?: number;
}

export interface CuisineProps {
  name: string;
  id: string | number;
}

export interface SourceProps {
  id: string;
  name: string;
  cuisines?: CuisineProps[];
  location?: LocationProps
}

export interface BiteSummaryProps extends BiteBaseProps {
  source: SourceProps
}

export interface SourceBiteProps extends BiteBaseProps {
  mealPreferences: string;
}

export interface SourceWithBitesProps extends SourceProps {
  bites: SourceBiteProps[];
}

type ImpressionType = "favorite" | "interested" | "pass" | "never";

export interface BiteImpressionProps {
  id: string;
  type: ImpressionType;
  bite: BiteSummaryProps;
}
