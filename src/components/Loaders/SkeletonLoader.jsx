import React from 'react';

const SkeletonLoader = ({ className = "" }) => (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}></div>
);

export default SkeletonLoader;
