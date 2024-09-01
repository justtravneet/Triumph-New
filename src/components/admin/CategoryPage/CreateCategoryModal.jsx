import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = import.meta.env.VITE_URL;

const CreateCategoryModal = ({ visible, onClose, onCategoryCreated }) => {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');

  if (!visible) return null; // Do not render if not visible

  const handleCreate = async () => {
    if (!categoryName.trim()) {
      setError('Category name is required.');
      return;
    }

    try {
      await axios.post(`${apiUrl}/product/create/category`, {
        name: categoryName
      }, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('adminToken')}`
        }
      });
      onCategoryCreated(); // Notify parent component of successful creation
      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      setError('Failed to create category.');
    }
  };

  return (
    <div
      role="dialog"
      aria-labelledby="create-category-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
    >
      <div className="relative bg-white w-full max-w-sm px-6 py-4 shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
        <h2 id="create-category-modal-title" className="text-center text-blue-800 text-lg font-semibold mb-4">Create New Category</h2>
        <input
          className="border px-4 py-2 w-full rounded-lg shadow-md mb-4"
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
            setError(''); // Clear error on input change
          }}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex justify-end">
          <button
            className="px-5 py-2 bg-green-600 text-white rounded-lg mr-2 hover:bg-green-700 transition duration-300"
            onClick={handleCreate}
          >
            Create
          </button>
          <button
            className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
