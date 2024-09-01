import React from 'react';
import SkeletonLoader from './SkeletonLoader';


const MoreInfoSkeleton = () => {
    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="mb-4">
                    <SkeletonLoader className="h-6 w-1/3 mb-2" />
                    {[...Array(3)].map((_, j) => (
                        <SkeletonLoader key={j} className="h-4 w-3/4 mb-2" />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MoreInfoSkeleton;
