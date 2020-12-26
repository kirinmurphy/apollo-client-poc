import { PhotoProps } from "../widgets/types";

export type PhoneType = string;

// BITE ADJACENT
interface LocationProps {
  neighborhood: {
    name: string;
  }
  latitude?: number;
  longitude?: number;
  phone: PhoneType;
}

export interface ContactLinksProps {
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface CuisineProps {
  name: string;
  id: string | number;
}

export interface SourceProps {
  id: string;
  name: string;
  cuisines: CuisineProps[];
  location?: LocationProps
  marqueeImage?: PhotoProps;
  contactLinks?: ContactLinksProps;
}

// BITES 
interface BiteBaseProps {
  id: string | number;
  photo: PhotoProps;
  name: string;
  cuisines: CuisineProps[];
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

// USER IMPRESSIONS
type ImpressionType = "favorite" | "interested" | "pass" | "never";

export interface BiteImpressionProps {
  id: string;
  type: ImpressionType;
  bite: BiteSummaryProps;
}
