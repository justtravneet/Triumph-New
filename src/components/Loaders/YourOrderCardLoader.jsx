import React from 'react';

function YourOrderCardLoader() {
  return (
    <div className="animate-pulse bg-white shadow-md rounded-lg p-6 scale-90 my-2">
      <div className='grid grid-cols-9 gap-4'>
        <div className='col-span-1'>
          <div className='bg-gray-200 w-36 h-36'></div>
        </div>
        <div className='col-span-8 ml-5'>
          <div className="flex justify-between items-center mb-4">
            <div className='flex items-center gap-4'>
              <div className='bg-gray-200 h-6 w-1/4 rounded-md'></div>
              <div className='bg-gray-200 h-4 w-1/6 rounded-md'></div>
            </div>
            <div className='bg-gray-200 h-6 w-6 rounded-md'></div>
          </div>
          <div className="mb-4">
            <div className='bg-gray-200 h-4 w-1/2 rounded-md mb-2'></div>
            <div className='bg-gray-200 h-4 w-1/4 rounded-md mb-2'></div>
          </div>
          <div className='flex justify-between'>
            <div className='bg-gray-200 h-4 w-1/4 rounded-md'></div>
            <div className='bg-gray-200 h-6 w-1/5 rounded-md'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourOrderCardLoader;
