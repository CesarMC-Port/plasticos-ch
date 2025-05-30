import React from 'react';
import { Product } from '../types';
import { calculateUnitPrice, calculateTotalPrice, formatPrice, getPriceTierMessage } from '../utils/priceCalculator';

interface PriceDisplayProps {
  product: Product;
  quantity: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ product, quantity }) => {
  const unitPrice = calculateUnitPrice(product, quantity);
  const totalPrice = calculateTotalPrice(unitPrice, quantity);
  const tierMessage = getPriceTierMessage(product, quantity);
  
  // Find which tier the current quantity falls into
  const currentTierIndex = product.priceTiers.findIndex(
    tier => quantity >= tier.min && (tier.max === null || quantity <= tier.max)
  );
  
  // Calculate how close the user is to the next tier
  const nextTier = product.priceTiers[currentTierIndex + 1];
  const unitsToNextTier = nextTier ? nextTier.min - quantity : null;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 animate-fadeIn">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Resumen de precios</h3>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      
      {quantity < 12 && (
        <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                La cantidad mínima recomendada es de 12 unidades para aplicar a los precios por volumen.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-600">Precio unitario:</span>
          <span className="text-2xl font-semibold text-gray-800">{formatPrice(unitPrice)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-600">Cantidad:</span>
          <span className="text-2xl font-semibold text-gray-800">{quantity} unidades</span>
        </div>
        
        <div className="border-t-2 border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-700 font-medium">Total a pagar:</span>
            <span className="text-3xl font-bold text-blue-600">{formatPrice(totalPrice)}</span>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-xl mt-4">
          <p className="text-blue-800 text-lg">
            <span className="font-medium">Tramo de precios actual:</span> {tierMessage}
          </p>
          
          {/* {unitsToNextTier && (
            <p className="text-blue-700 text-base mt-2">
              ¡Te faltan solo <span className="font-bold">{unitsToNextTier}</span> unidades para obtener un mejor precio!
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;