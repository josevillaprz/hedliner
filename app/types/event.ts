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
