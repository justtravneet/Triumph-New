import React from 'react'



export default function InputTextField({rows,onChange , label , name , required , value
}) {
    
  return (
    <div >
        <label className="block text-gray-700 text-sm font-bold mb-2">{label} {required && <span className="text-red-500">*</span>}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
  )
}
