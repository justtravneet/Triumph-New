import React from 'react';

export default function OrderSummaryCardLoader() {
  return (
    <div className="flex items-center bg-gray-200 shadow-md rounded-lg overflow-hidden mb-4 animate-pulse">
      <div className="w-24 h-24 bg-gray-300"></div>
      <div className="p-4 flex flex-col justify-between w-full">
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-1/4 self-end"></div>
      </div>
    </div>
  );
}
