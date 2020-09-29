export interface CuisineProps {
  name: string;
  id: string | number;
}

export interface SourceProps {
  name: string;
  location?: {
    neighborhood: string;
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
