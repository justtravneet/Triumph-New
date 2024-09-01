// BillSkeletonLoader.jsx
import React from 'react';

const BillLoader = () => {
    return (
        <>
            <div className="flex justify-between font-semibold mt-2 animate-pulse">
                <span className="bg-gray-300 h-4 w-20 rounded"></span>
                <span className="bg-gray-300 h-4 w-12 rounded"></span>
            </div>
            <div className="flex justify-between font-semibold mt-2 animate-pulse">
                <span className="bg-gray-300 h-4 w-32 rounded"></span>
                <span className="bg-gray-300 h-4 w-12 rounded"></span>
            </div>
            <div className="flex justify-between font-semibold mt-2 animate-pulse">
                <span className="bg-gray-300 h-4 w-10 rounded"></span>
                <span className="bg-gray-300 h-4 w-12 rounded"></span>
            </div>
            <div className="flex justify-between font-semibold mt-2 animate-pulse">
                <span className="bg-gray-300 h-4 w-24 rounded"></span>
                <span className="bg-gray-300 h-4 w-12 rounded"></span>
            </div>
            <div className="flex justify-between font-bold mt-2 border-t border-gray-600 animate-pulse">
                <span className="bg-gray-300 h-4 w-16 rounded"></span>
                <span className="bg-gray-300 h-4 w-12 rounded"></span>
            </div>
        </>
    );
};

export default BillLoader;
