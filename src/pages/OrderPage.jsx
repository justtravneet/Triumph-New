import React, { useEffect, useState } from 'react';
import OrderDetails from '../components/Orders/OrderDetails';
import OrderItemCard from '../components/Orders/OrderItemCard';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Heroone from '../components/Heroone';
import Herolast from '../components/Herolast';

import { ClipLoader } from 'react-spinners';

const apiUrl = import.meta.env.VITE_URL;

function OrderPage() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`${apiUrl}/order/specific/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('authToken')}`,
                    },
                });
                setOrder(response.data.order);
            } catch (error) {
                console.error('Error While fetching order: ', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchOrder();
    }, [orderId]);

    return (
        <>
            <Heroone />
            <div className="container mx-auto p-4 max-w-4xl">
                {loading ? ( // Display loader while loading
                    <div className='flex justify-center items-center'>
                        <ClipLoader color='#0554F2' />
                    </div>

                ) : (
                    <>
                        {order && <OrderDetails order={order} />}
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Products in this Order</h2>
                            {order && order.order_items.map((item) => (
                                <OrderItemCard key={item.order_item_id} item={item} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Herolast />
        </>
    );
}

export default OrderPage;
