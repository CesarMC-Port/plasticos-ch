import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onChange
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      onChange(0);
    } else {
      const numValue = parseInt(value, 10);
      onChange(numValue || 0);
    }
  };

  const increaseQuantity = () => {
    onChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor="quantity" className="text-lg font-medium text-gray-700">
        Cantidad
      </label>
      
      <div className="flex items-center">
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity <= 0}
          className={`w-14 h-14 rounded-l-xl flex items-center justify-center text-xl ${
            quantity <= 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
          } transition-colors duration-200`}
          aria-label="Disminuir cantidad"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        
        <input
          id="quantity"
          type="number"
          value={quantity || ''}
          onChange={handleInputChange}
          className="w-full h-14 text-center text-xl border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <button
          type="button"
          onClick={increaseQuantity}
          className="w-14 h-14 rounded-r-xl bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 flex items-center justify-center text-xl transition-colors duration-200"
          aria-label="Aumentar cantidad"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;