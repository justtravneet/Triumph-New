// src/pages/Addtocart.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/general/LoginModal';
import Heroone from '../components/Heroone';
import Herolast from '../components/Herolast';
import CartRow from '../components/Cart/CartRow';
import Receipt from '../components/Cart/Receipt';

import { billing } from '../utils/billing';
import { checkLogin } from '../utils/checkLogin';
import CartSkeleton from '../components/Loaders/CartSkeleton';

const apiUrl = import.meta.env.VITE_URL;

const Addtocart = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [bill, setBill] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check login status
        const login = checkLogin();
        setIsLoggedIn(login);
    }, []);

    useEffect(() => {
        // Fetch cart items from the server
        const fetchCart = async () => {
            try {
                const cartToken = localStorage.getItem('cartToken');
                if (cartToken) {
                    const response = await axios.get(`${apiUrl}/user/cart`, {
                        headers: {
                            'cart-token': cartToken,
                        },
                    });
                    setCartItems(response.data.cart.cartItems);
                }
            } catch (error) {
                console.error("Error while fetching cart: ", error);
            } finally {
                setIsLoading(false); // Set loading to false after data is fetched
            }
        };
        fetchCart();
    }, []);

    useEffect(() => {
        // Calculate billing when cart items change
        setBill(billing(cartItems, 200, 18));
    }, [cartItems]);

    const handleQuantityChange = async () => {
        try {
            const cartToken = localStorage.getItem('cartToken');
            if (cartToken) {
                const response = await axios.get(`${apiUrl}/user/cart`, {
                    headers: {
                        'cart-token': cartToken,
                    },
                });
                setCartItems(response.data.cart.cartItems);
            }
        } catch (error) {
            console.error("Error while fetching cart: ", error);
        }
    };

    const onCheckout = () => {
        if (isLoggedIn) {
            const cartToken = localStorage.getItem('cartToken');
            if (cartToken) {
                navigate(`/cart/checkout/${cartToken}`);
            }
        } else {
            setShowModal(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Heroone />
            <div className="px-4 py-4 sm:px-6 lg:px-8 lg:flex lg:justify-center">
                <div className="flex flex-col lg:flex-row lg:w-[80%] 2xl:w-[1200px] bg-white  rounded-lg">
                    <div className="flex-1 p-4 ">
                        <div className="py-2 h-12 flex items-center justify-center bg-blue-800 text-white rounded-t-lg">
                            <p className="text-lg font-semibold">Shopping Cart</p>
                        </div>
                        {isLoading ? (
                            <CartSkeleton itemCount={3} /> // Use CartSkeleton component here
                        ) : cartItems.length > 0 ? (
                            cartItems.map((cartItem) => (
                                <CartRow
                                    key={cartItem.cart_item_id}
                                    cartItem={cartItem}
                                    onQuantityChange={handleQuantityChange}
                                />
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-500">
                                Your cart is empty
                            </div>
                        )}
                        {cartItems.length > 0 &&

                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={onCheckout}
                                    className="rounded-lg py-2 px-4 w-[30%] bg-blue-800 text-white font-semibold hover:bg-blue-700 transition duration-300"
                                    type="button"
                                >
                                    Proceed To Pay
                                </button>
                            </div>
                        }
                    </div>


                </div>
            </div>
            <Herolast />
            {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Addtocart;
