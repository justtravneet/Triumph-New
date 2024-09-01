import React from 'react';

const CheckoutPageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
            <div className="loader"> {/* Customize your loader as needed */}
                <svg className="animate-spin h-10 w-10 ml-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                </svg>
                <p className="mt-2 text-center text-gray-500">Loading...</p>
            </div>
        </div>
    );
};

export default CheckoutPageLoader;
