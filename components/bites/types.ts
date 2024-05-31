import { PhotoProps } from "../widgets/types";

type LinkType = string;
export type PhoneType = string;

// BITE ADJACENT
interface LocationProps {
  neighborhood: {
    data: {
      id: string; 
      attributes: {
        name: string;
      }
    }
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
  id: string | number;
  attributes: {
    name: string;
  }
}

export interface CuisinesProps {
  data: CuisineProps[];
}

export type PreferredDeliveryMethodType = 'call' | 'website' | 'uberEats' | 'grubhub' | 'otherLink';

export interface SourceDeliveryOptionsProps {
  available: boolean;
  preferredMethod: PreferredDeliveryMethodType;
  otherLink: string;
}

export interface SourceAttributeProps {
  name: string;
  cuisines: CuisinesProps;
  location?: LocationProps
  marqueeImage?: PhotoProps;
  contactLinks?: ContactLinksProps;
  deliveryOptions: SourceDeliveryOptionsProps;    
}

export interface SourceProps {
  data: {
    id: string;
    attributes: SourceAttributeProps;
  }
}

export interface BiteSummaryProps {
  id: string | number;
  attributes: {
    source: SourceProps
    title: string;
    cuisines: CuisinesProps;
  }  
}

export interface SourceWithBitesAttributesProps extends SourceAttributeProps {
  bites: {
    data: BiteSummaryProps[];
  };
}

export interface SourceWithBitesProps {
  data: {
    id: string;
    attributes: SourceWithBitesAttributesProps;
  }
}

// USER IMPRESSIONS
type ImpressionType = "favorite" | "interested" | "pass" | "never";

export interface BiteImpressionProps {
  id: string;
  type: ImpressionType;
  bite: BiteSummaryProps;
}
