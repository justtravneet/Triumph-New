import React from 'react';
import SkeletonLoader from './SkeletonLoader';


const ProductInfoSkeleton = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <SkeletonLoader className="h-6 w-1/2 mb-2" />
            <SkeletonLoader className="h-6 w-1/3 mb-2" />
            <SkeletonLoader className="h-8 w-full mb-4" />
            <SkeletonLoader className="h-6 w-1/4 mb-2" />
            <SkeletonLoader className="h-10 w-full mb-2" />
            <SkeletonLoader className="h-10 w-full mb-2" />
        </div>
    );
};

export default ProductInfoSkeleton;
