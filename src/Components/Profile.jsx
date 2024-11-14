
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Profile </h1>
      <button
        onClick={() => navigate('/order')}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go to Order
      </button>
    </div>
  );
};

export default Profile;
