export interface MotorbikeResponse {
  first: number;
  prev: null;
  next: number;
  last: number;
  pages: number;
  items: number;
  data: Motorbike[];
}

export interface Motorbike {
  id: number;
  motorbike: string;
  price: number;
  images: Image[];
  description: string;
  discount_price: number;
}

export enum Image {
  AssetsMotorbikesMotorbikePNG = 'assets/motorbikes/motorbike.png',
}
