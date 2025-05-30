export interface Product {
  id: string;
  name: string;
  size: string;
  image: string;
  priceTiers: {
    min: number;
    max: number | null;
    price: number;
  }[];
}

export interface CalculatorState {
  selectedProduct: Product | null;
  quantity: number;
}