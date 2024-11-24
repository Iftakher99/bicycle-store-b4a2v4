/* eslint-disable no-unused-vars */
// Define the interface for our bicycle

export enum TCycleType {
  Road = 'Road',
  Mountain = 'Mountain',
  Hybrid = 'Hybrid',
  Cruiser = 'Cruiser',
  Electric = 'Electric',
  BMX = 'BMX',
}

export interface TBicycle {
  name: string;
  brand: string;
  price: number;
  type: TCycleType;
  description: string;
  quantity: number;
  inStock: boolean;
}
