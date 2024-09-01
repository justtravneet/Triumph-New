import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoriesAtom, createProductAtom } from '../../../store/atoms/adminAtoms';
import InputData from './InputData';
import InputTextField from './InputTextField';
import axios from 'axios';
import InputDropdown from './InputDropdown';
import EditAddInputField from './EditAddInputField';


const apiUrl = import.meta.env.VITE_URL;

export default function EditForm({ onSubmit, buttonLabel, isSubmitting, initialData }) {
  const [formData, setFormData] = useRecoilState(createProductAtom);
  const [categories, setCategories] = useRecoilState(categoriesAtom);


  useEffect(() => {
    // Initialize formData with initialData on mount
    setFormData(initialData);
  }, [initialData, setFormData]);
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let convertedValue;

    if (type === 'number') {
      convertedValue = value === '' ? value : Number(value);
    } else {
      convertedValue = value;
    }
    
    setFormData({
      ...formData,
      [name]: convertedValue,
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/product/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error.response ? error.response.data : error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="col-span-2 text-center text-xl font-semibold my-3 underline">Basic Details</h3>
          <InputData
            type="text"
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
          <InputData
            type="text"
            label="SKU"
            name="SKU"
            value={formData.SKU}
            onChange={handleChange}
            required={true}
          />
          <InputTextField
            type="text"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={true}
          />
          <InputData
            type="number"
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required={true}
          />
          <InputData
            type="number"
            label="Availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required={true}
          />
          <InputData
            type="number"
            label="Discount (in percent)"
            name="discount_percent"
            value={formData.discount_percent}
            onChange={handleChange}
          />
          <InputDropdown
            label="Category"
            array={categories}
            value={formData.category_id}
            onChange={handleChange}
            required={true}
          />
        </div>

        {/* Color Variants */}
        <h3 className="text-center text-xl font-semibold my-3 underline">Add Color Variants</h3>
        <div className="grid grid-cols-1 gap-6">
          <EditAddInputField product={initialData} />
        </div>

        {/* Product Details */}
        <h3 className="text-center text-xl font-semibold my-3 underline">Product Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'material', 'shape', 'design_style', 'fixture_form', 'fixture_type', 'ideal_for', 'power_source',
            'installation', 'shade_material', 'voltage', 'light_source', 'light_color', 'light_color_temperature',
            'included_components', 'lighting_method', 'quantity'
          ].map((field) => (
            <InputData
              type="text"
              label={field.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              key={field}
            />
          ))}
        </div>

        {/* Dimensions */}
        <h3 className="text-center text-xl font-semibold my-3 underline">Dimensions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['height', 'width', 'length', 'item_weight'].map((field) => (
            <InputData
              type="text"
              label={field.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              key={field}
            />
          ))}
        </div>

        {/* Extra Details */}
        <h3 className="text-center text-xl font-semibold my-3 underline">More Extra Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'power_rating', 'brightness', 'controller_type', 'switch_type', 'switch_mounting', 'mounting_type',
            'assembly_required', 'primary_material', 'number_of_light_sources', 'surge_protection', 'shade_color',
            'key_features', 'batteries', 'embellishment'
          ].map((field) => (
            <InputData
              type="text"
              label={field.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              key={field}
            />
          ))}
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : buttonLabel}
        </button>
      </form>
    </div>
  );
}
