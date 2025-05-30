import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onSelect }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 cursor-pointer
        ${isSelected 
          ? 'ring-4 ring-blue-500 transform scale-[1.02]' 
          : 'hover:shadow-lg hover:translate-y-[-4px]'
        }`}
      onClick={() => onSelect(product)}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={`${product.name} ${product.size}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-lg font-medium text-gray-600">{product.size}</p>
        
        <div className="mt-3 text-base text-gray-500">
          <p>Desde {product.priceTiers[0].price} COP por unidad</p>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProductCard;