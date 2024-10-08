import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_URL;

const ProductInfo = ({ product,  isLoggedIn }) => {
    const navigate = useNavigate()
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [colorError, setColorError] = useState(false);
    const [isInCart, setIsInCart] = useState(false);



    useEffect(() => {
  
        const checkProductInCart = async () => {
            try {
                const cartToken = localStorage.getItem('cartToken');
                if (cartToken) {
                    const response = await axios.get(`${apiUrl}/user/cart`, {
                        headers: {
                            'cart-token': cartToken
                        }
                    });
                    
                    

                    const cartItems = response.data.cart.cartItems || [];
                    const productInCart = cartItems.some(item => item.product_id === product.product_id);
                    
                    setIsInCart(productInCart);  // Set the state based on the product check
                }
            } catch (error) {
                console.error("Error checking product in cart:", error);
            }
        };

        checkProductInCart();
    }, [product.product_id]);

    const addToCartHandle = async () => {
        try {
            if (selectedColor === null) {
                setColorError(true);
                setTimeout(() => {
                    setColorError(false);
                }, 2000);
                return;
            }
            const cartToken = localStorage.getItem('cartToken');
            if (!cartToken) {
                const newCart = await axios.post(`${apiUrl}/user/create/cart`);
                localStorage.setItem('cartToken', newCart.data.cartToken);
            }
            await axios.post(`${apiUrl}/user/addToCart/${product.product_id}`, {
                quantity: quantity,
                color: selectedColor
            },
                {
                    headers: {
                        'cart-token': `${localStorage.getItem('cartToken')}`
                    }
                });
            setIsInCart(true);  // Ensure the button updates immediately after adding to cart
        } catch (error) {
            console.error(error);
        }
    };


    const onBuyNowClick = async () => {
        if (!isLoggedIn) {
            setShowModal(true);
        } else {

            if (selectedColor === null) {
                setColorError(true);
                setTimeout(() => {
                    setColorError(false);
                }, 2000);
                return;
            }

            const tempCartToken = localStorage.getItem('tempCart');

            try {
                let addProduct
                if (tempCartToken) {
                    await axios.delete(`${apiUrl}/user/delete/cart/tempCartItems`,{
                        headers: {
                            'cart-token': tempCartToken,
                            'Authorization': `Bearer ${Cookies.get('authToken')}`
                        }
                    })

                    addProduct = await axios.post(
                        `${apiUrl}/user/addToCart/${product.product_id}`,
                        {
                            quantity: quantity,
                            color: selectedColor,
                        },
                        {
                            headers: {
                                'cart-token': tempCartToken,
                            },
                        }
                    );
                } else {
                    const tempToken = await createTemporaryCart(); // Await the cart creation

                    if (!tempToken) {
                        console.error('Failed to create temporary cart');
                        return; // Exit if the temp cart creation failed
                    }
                    addProduct = await axios.post(
                        `${apiUrl}/user/addToCart/${product.product_id}`,
                        {},
                        {
                            headers: {
                                'cart-token': tempToken,
                            },
                        }
                    );
                }


                if (addProduct.status === 200) {
                    navigate(`/cart/checkout/${localStorage.getItem('tempCart')}`);
                }
            } catch (error) {
                console.error('Error adding product to cart:', error);
            }
        }
    };

    const goToCart = () => {
        // Redirect to the cart page
        window.location.href = "/cart";
    };

    return (
        <div>
            <div className='w-full md:w-full p-2 flex flex-col justify-between'>
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg font-semibold sm:text-xl lg:text-2xl'>{product.name}</p>
                        <p className='text-sm sm:text-base'>By {product.brand}</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold sm:text-3xl'>
                            <FontAwesomeIcon className="size-6" icon={faIndianRupee} />
                            {product.price}/-</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm sm:text-lg font-medium'>Color</p>
                        <div className='flex gap-2'>
                            {product.colors && product.colors.length > 0 ? (
                                product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`relative rounded-full w-8 h-8 cursor-pointer border-2 ${selectedColor === color.color.color_name ? 'border-black' : 'border-gray-400'}`}
                                        title={color.color.color_name}
                                        style={{ backgroundColor: color.color.hex }}
                                        onClick={() => setSelectedColor(color.color.color_name)}
                                    />
                                ))
                            ) : (
                                <p className='text-sm text-gray-500'>No colors available</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-kalra text-brown-4 font-semibold mb-2">Quantity</h2>
                        <div className="border border-gray-400 inline-block hover:border-brown-4">
                            <div className="flex items-center">
                                <button
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(quantity - 1)
                                        }
                                    }}
                                    className=" px-3 py-2 hover:bg-gray-300 hover:bg-opacity-50"><FontAwesomeIcon className="" icon={faMinus} />
                                </button>
                                <div className="text-lg px-4">{quantity}</div>
                                <button
                                    onClick={() => { setQuantity(quantity + 1) }}
                                    className=" px-3 py-2 hover:bg-gray-300 hover:bg-opacity-50 " ><FontAwesomeIcon className="" icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        {product.availability <= 10 &&
                            <div className="my-6">
                                <div className="text-brown-4 font-semibold mb-1">Stock Remaining</div>
                                <div className="text-brown-3 text-xs tracking-wide ">Only {product.availability} left. Order Soon</div>
                            </div>
                        }
                    </div>
                    {product.availability > 0 ? (
                        <div className='flex flex-col gap-2'>
                            {colorError && <span className="text-red-700 text-center text-sm tracking-wider">Please select a color</span>}
                            {isInCart ? (
                                <button onClick={goToCart} className='rounded-lg bg-blue-600 hover:bg-blue-700 text-white h-8 sm:h-10 text-sm'>
                                    Go to Cart
                                </button>
                            ) : (
                                <button onClick={addToCartHandle} className='rounded-lg bg-blue-600 hover:bg-blue-700 text-white h-8 sm:h-10 text-sm'>
                                    Add To Cart
                                </button>
                            )}
                            <button onClick={onBuyNowClick} className='rounded-lg bg-gray-500 hover:bg-gray-800 text-white h-8 sm:h-10 text-sm'>
                                Buy Now
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="text-2xl font-bold text-red-500">Sold Out</div>
                            <div className="text-lg  font-semibold text-gray-600">This item is currently out of stock</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
