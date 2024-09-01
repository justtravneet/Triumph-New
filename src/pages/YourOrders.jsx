import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import YourOrderCard from '../components/Orders/YourOrderCard';
import YourOrderCardLoader from '../components/Loaders/YourOrderCardLoader'; // Import the loader component
import Heroone from '../components/Heroone';
import Herolast from '../components/Herolast';

const apiUrl = import.meta.env.VITE_URL;

function YourOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${apiUrl}/order/fetch`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await axios.delete(`${apiUrl}/order/cancel-order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        },
      });

      if (response.status !== 200) {
        setError("Your order cannot be canceled.");
      } else {
        setOrders((prevOrders) => prevOrders.filter(order => order.order_id !== orderId));
      }
    } catch (error) {
      console.error('Error canceling order:', error);
      setError('Failed to cancel order. Please try again later.');
    }
  };

  return (
    <>
      <Heroone />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Orders</h1>
        {loading ? (
          // Display loader while loading
          <>
            <YourOrderCardLoader />
            
          </>
        ) : (
          <div>
            {orders.length > 0 ? (
              orders.map((order) => (
                <YourOrderCard key={order.order_id} order={order} onCancel={handleCancelOrder} />
              ))
            ) : (
              <p className="text-center text-gray-500">No orders found.</p>
            )}
          </div>
        )}
      </div>
      <Herolast />
    </>
  );
}

export default YourOrders;
