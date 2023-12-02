// src/components/LogoutMessage.js
import React from 'react';

const LogoutMessage = ({ onCancel }) => {
  const handleCancel = () => {
    // Call the parent component's callback function to handle cancellation
    onCancel();
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <p className="text-2xl font-bold mb-4">You have been logged out</p>
      <button
        type="button"
        onClick={handleCancel}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Cancel
      </button>
    </div>
  );
};

export default LogoutMessage;
