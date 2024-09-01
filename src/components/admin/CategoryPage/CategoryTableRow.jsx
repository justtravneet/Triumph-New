import React, { useEffect, useState } from 'react';
import { updateCategoryAtom } from '../../../store/atoms/adminAtoms';
import { useRecoilState } from 'recoil';

import Cookies from 'js-cookie';
import axios from 'axios';
import AlertModal from '../../general/AlertModal';
import { ConfirmationModal } from '../../general/ConfirmationModal';

const apiUrl = import.meta.env.VITE_URL;

export default function CategoryTableRow({ category }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newCategory, setNewCategory] = useRecoilState(updateCategoryAtom);
  const [products, setProducts] = useState(null);
  const [alertModal, setAlertModal] = useState(false);

  useEffect(() => {
    const fetchCategoriesProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/product/category/${category.category_id}`);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    fetchCategoriesProduct();
  }, [category.category_id]); // Add dependency to avoid unnecessary re-fetches

  const handleEdit = () => {
    setIsEdit(true);
    setNewCategory(category.name); // Initialize with the current category name
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${apiUrl}/product/update/category/${category.category_id}`,
        { name: newCategory },
        {
          headers: {
            'Authorization': `Bearer ${Cookies.get('adminToken')}`,
          },
        }
      );
      window.location.reload(); // Reload the page after saving changes
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDelete = async () => {
    if (products && products.length > 0) {
      setAlertModal(true);
    } else {
      try {
        await axios.delete(`${apiUrl}/product/delete/category/${category.category_id}`, {
          headers: {
            'Authorization': `Bearer ${Cookies.get('adminToken')}`,
          },
        });
        window.location.reload(); // Reload the page after deleting the category
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <>
      {/* Render the table row */}
      <tr>
        {/* Display category name or input for editing */}
        <td className="border w-[50%] px-6 py-4">
          {!isEdit ? (
            category.name
          ) : (
            <input
              className="border px-4 py-2 w-full rounded-lg shadow-md"
              type="text"
              value={newCategory} // Use newCategory from Recoil state
              onChange={(e) => setNewCategory(e.target.value)} // Update state with input value
            />
          )}
        </td>
        <td className="border px-6 py-4">
          {products ? products.length : 0}
        </td>

        {/* Actions */}
        <td className="border px-6 py-4">
          {!isEdit ? (
            <>
              <button
                className="px-5 py-1.5 bg-blue-600 text-white rounded-lg mr-2 hover:bg-blue-700 transition duration-300"
                onClick={handleEdit} // Edit button handler
              >
                Edit
              </button>
              <button
                className="px-5 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                onClick={handleDelete} // Delete button handler
              >
                Delete
              </button>
            </>
          ) : (
            <button
              className="px-5 py-1.5 bg-green-600 text-white rounded-lg mr-2 hover:bg-green-700 transition duration-300"
              onClick={handleSave} // Save button handler
            >
              Save
            </button>
          )}
        </td>
      </tr>

      {/* Render AlertModal */}
      {alertModal && (
        <AlertModal
          message={"Category cannot be deleted because products are associated with it"}
          visible={alertModal}
          onClose={() => setAlertModal(false)} // Properly handle modal close
        />
      )}
    </>
  );
}
