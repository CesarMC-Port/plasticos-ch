import { Product } from '../types';

export const calculateUnitPrice = (product: Product, quantity: number): number => {
  const tier = product.priceTiers.find(
    tier => quantity >= tier.min && (tier.max === null || quantity <= tier.max)
  );
  
  return tier ? tier.price : 0;
};

export const calculateTotalPrice = (unitPrice: number, quantity: number): number => {
  return unitPrice * quantity;
};

export const formatPrice = (price: number): string => {
  return `${price.toLocaleString('es-CO')} COP`;
};

export const getPriceTierMessage = (product: Product, quantity: number): string => {
  const tier = product.priceTiers.find(
    tier => quantity >= tier.min && (tier.max === null || quantity <= tier.max)
  );
  
  if (!tier) return '';
  
  if (tier.max === null) {
    return `Precio especial por comprar ${tier.min} unidades o más`;
  }
  
  return `Precio actual: ${tier.min} a ${tier.max} unidades`;
};