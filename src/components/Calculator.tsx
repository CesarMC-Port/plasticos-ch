import React, { useState, useEffect } from 'react';
import { Product, CalculatorState } from '../types';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import QuantitySelector from './QuantitySelector';
import PriceDisplay from './PriceDisplay';
import Logo from '../assets/logo.png';
import { saveState, loadState, clearState } from '../utils/localStorage';

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    selectedProduct: null,
    quantity: 1
  });
  
  // Load state from localStorage on component mount
  useEffect(() => {
    const savedState = loadState();
    if (savedState) {
      setState(savedState);
    }
  }, []);
  
  // Save state to localStorage whenever it changes
  useEffect(() => {
    saveState(state);
  }, [state]);
  
  const handleProductSelect = (product: Product) => {
    setState(prevState => ({
      ...prevState,
      selectedProduct: product
    }));
  };
  
  const handleQuantityChange = (quantity: number) => {
    setState(prevState => ({
      ...prevState,
      quantity
    }));
  };
  
  const handleReset = () => {
    setState({
      selectedProduct: null,
      quantity: 1
    });
    clearState();
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="fixed left-[20px] top-[20px] w-[100px] h-[100px] rounded-[20px] overflow-hidden flex justify-center items-center">
        <img src={Logo}/>
      </div>
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Calculadora de Precios
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Selecciona un producto, ingresa la cantidad deseada y obtén el precio unitario y total al instante.
        </p>
      </header>
      
      {!state.selectedProduct ? (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Selecciona un producto
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={state.selectedProduct?.id === product.id}
                onSelect={handleProductSelect}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="sticky top-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={state.selectedProduct.image}
                    alt={`${state.selectedProduct.name} ${state.selectedProduct.size}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {state.selectedProduct.name} {state.selectedProduct.size}
                  </h2>
                </div>
              </div>
              
              <button
                onClick={handleReset}
                className="w-full py-4 px-6 text-lg border-2 border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                Seleccionar otro producto
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <QuantitySelector
                quantity={state.quantity}
                onChange={handleQuantityChange}
              />
            </div>
            
            <PriceDisplay
              product={state.selectedProduct}
              quantity={state.quantity}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;