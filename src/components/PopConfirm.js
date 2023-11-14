// Popconfirm.js
import React from 'react';

const Popconfirm = ({ onConfirm, onCancel }) => {
  return (
    <div className="popconfirm absolute bg-white border p-4">
      <p>Are you sure you want to generate and download the form?</p>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={onConfirm}
      >
        Yes
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={onCancel}
      >
        No
      </button>
    </div>
  );
};

export default Popconfirm;
