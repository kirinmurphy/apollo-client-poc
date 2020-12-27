import { PhotoProps } from "../widgets/types";

type LinkType = string;
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
  website: LinkType;
  facebook: LinkType;
  twitter: LinkType;
  instagram: LinkType;
}

export interface CuisineProps {
  name: string;
  id: string | number;
}

export interface SourceDeliveryOptionsProps {
  available: boolean;
  preferredMethod: 'call' | 'website' | 'uberEats' | 'grubhub' | 'otherLink';
  otherLink: string;
}

export interface SourceProps {
  id: string;
  name: string;
  cuisines: CuisineProps[];
  location?: LocationProps
  marqueeImage?: PhotoProps;
  contactLinks?: ContactLinksProps;
  deliveryOptions: SourceDeliveryOptionsProps;
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
