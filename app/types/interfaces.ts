export interface ArtistData {
  name: string;
  searchKeyword: string;
  imgPath: string;
  id: string;
}

export interface EventData {
  attractionId: string;
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  events: Array<Object>;
}

export interface AttractionData {
  name: string;
  id: string;
  locale: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  eventsCount: number;
  url: string;
}

