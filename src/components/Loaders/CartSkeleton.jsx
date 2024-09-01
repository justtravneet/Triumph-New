// src/components/Cart/CartSkeleton.jsx

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CartSkeleton = ({ itemCount = 3 }) => {
    return (
        <>
            {Array.from({ length: itemCount }).map((_, index) => (
                <div key={index} className="p-4">
                    <Skeleton height={30} width="100%" />
                    <Skeleton height={20} width="80%" className="mt-2" />
                </div>
            ))}
        </>
    );
};

export default CartSkeleton;
