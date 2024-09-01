import React from 'react';

export default function InputDropdown({ label, value, required, onChange, array }) {

  return (
    <div className="relative">
      <label className="block text-gray-700 text-sm font-bold mb-2 ">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <select
        name="category_id"
        value={value}
        onChange={onChange}
        className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
        required={required}
      >
        <option value="">Select {label}</option>
        {array.map((item) => (
          <option key={item.category_id} value={item.category_id}>
            {item.name}
          </option>
        ))}
      </select>
      {/* Custom arrow */}
      
    </div>
  );
}
