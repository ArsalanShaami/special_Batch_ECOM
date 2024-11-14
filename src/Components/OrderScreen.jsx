import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderScreen = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/order-summary'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Order Screen</h1>
      <button
        onClick={handleOrder}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderScreen;
