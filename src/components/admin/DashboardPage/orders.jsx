import React from "react";

const Orders = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Orders</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Shipped
          </button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300">
            Pending
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
            Delivered
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-700">Order ID</th>
                <th className="px-4 py-2 text-left text-gray-700">Customer</th>
                <th className="px-4 py-2 text-left text-gray-700">Total</th>
                <th className="px-4 py-2 text-left text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">#1234</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">$100.00</td>
                <td className="border px-4 py-2">Shipped</td>
                <td className="border px-4 py-2">2024-08-20</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
