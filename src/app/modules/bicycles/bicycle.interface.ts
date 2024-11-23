// Define the interface for our bicycle

export enum TBrand {
  Duranta = 'Duranta',
  Veloce = 'Veloce',
  Phoenix = 'Phoenix',
  Adder = 'Adder',
  Akij = 'Akij',
  Diamondback = 'Diamondback',
  Hero = 'Hero',
  Camp = 'Camp',
  Core = 'Core',
  SpeedX = 'SpeedX',
}
export enum TCycleType {
  Road = 'Road',
  Mountain = 'Mountain',
  Hybrid = 'Hybrid',
  Cruiser = 'Cruiser',
  Electric = 'Electric',
}

export interface TBicycle {
  name: string;
  brand: TBrand;
  price: number;
  type: TCycleType;
  description: string;
  quantity: number;
  inStock: boolean;
}
