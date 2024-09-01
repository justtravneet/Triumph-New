import React, { useEffect, useState } from "react";
import CategoryTableRow from "../CategoryPage/CategoryTableRow";
import axios from "axios";
import Cookies from 'js-cookie';
import CreateCategoryModal from "../CategoryPage/CreateCategoryModal";

const apiUrl = import.meta.env.VITE_URL;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showCreateCategory, setShowCreateCategory] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/product/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryCreated = async () => {
    try {
      const response = await axios.get(`${apiUrl}/product/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Categories</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Category List</h3>
            <button
              type="button"
              onClick={() => setShowCreateCategory(true)}
              className="px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition duration-300"
            >
              Add New Category
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-6 py-3 text-left font-medium">Category Name</th>
                  <th className="px-6 py-3 text-left font-medium">Total Products</th>
                  <th className="px-6 py-3 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {categories.map((category) => (
                  <CategoryTableRow category={category} key={category.category_id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showCreateCategory && (
        <CreateCategoryModal
          visible={showCreateCategory}
          onClose={() => setShowCreateCategory(false)}
          onCategoryCreated={handleCategoryCreated}
        />
      )}
    </>
  );
};

export default Categories;
