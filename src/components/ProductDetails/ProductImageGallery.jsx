import React, { useEffect, useState } from "react";

const ProductImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState("");
    useEffect(() => {
        if (images && images.length > 0) {
            setSelectedImage(images[0]?.url);
        }
    }, [images]);
    
    

    return (
        <div className=''>
            <div className='flex justify-center items-center py-4'>
                <img
                    className='w-48 h-52 sm:w-60 md:w-64  lg:w-72 lg:h-72 rounded-lg transition-all duration-300'
                    src={selectedImage}
                    alt=""
                />
            </div>
            <div className='flex justify-center gap-4'>
                {images?.map((img, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => setSelectedImage(img.url)}>
                        <img
                            className='w-10 h-6 sm:w-16 sm:h-12 lg:w-20 lg:h-12 rounded-md transition-transform duration-300 hover:scale-110'
                            src={img.url}
                            alt={`Thumbnail ${index}`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div> <div className="block sm:hidden  justify-center  my-2 mx-1">
                        <img
                            className=" w-full h-72  object-cover max-h-96 shadow-md  "
                            src={selectedImage}
                            alt="Selected Product"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="sm:col-span-1 flex sm:flex-col gap-2 items-center  sm:my-2  mx-1">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className='w-20 h-14 sm:w-24 sm:h-24 md:w-18 md:h-18 lg:w-20 lg:h-20 cursor-pointer md:mb-4 flex justify-center shadow-md border-2 border-gray-200 overflow-hidden'
                                onClick={() => setSelectedImage(img.url)}
                            >
                                <div className='relative overflow-hidden'>
                                    <img
                                        className='w-full h-full transition-transform duration-300 hover:scale-110'
                                        src={img.url}
                                        alt={`Thumbnail ${index}`}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Image for Larger Screens */}
                    <div className="hidden sm:block sm:col-span-5  justify-center my-2  mx-1">
                        <img
                            className="w-full h-full shadow-md  object-cover   "
                            src={selectedImage}
                            alt="Selected Product"
                        />
                    </div>
        </div>
    );
};

export default ProductImageGallery;
