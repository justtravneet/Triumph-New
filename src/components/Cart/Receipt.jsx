import React from 'react';

const Receipt = ({ bill }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-5 border   border-gray-200">
            <h3 className="text-xl  font-semibold mb-4">Receipt</h3>
            <div className="space-y-3">
                <div className="grid grid-cols-3 text-sm">
                    <span className='col-span-2'>Bill Amount:</span>
                    <span className="font-semibold col-span-1">Rs. {bill.subTotal}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                    <span className='col-span-2'>Discount:</span>
                    <span className="font-semibold">Rs. {bill.discount}</span>
                </div>
                {/* <div className="flex justify-between text-sm">
                    <span>Tax:</span>
                    <span className="font-semibold">Rs. {tax}</span>
                </div> */}
                <div className="grid grid-cols-3 text-sm">
                    <span className='col-span-2'>Delivery Fee:</span>
                    <span className="font-semibold">Rs. {bill.deliveryFee}</span>
                </div>
                <div className="grid grid-cols-3 text-sm">
                    <span className='col-span-2'>GST:</span>
                    <span className="font-semibold">Rs. {bill.gst}</span>
                </div>
                <div className="border-t border-gray-300 mt-4 pt-2">
                    <div className="grid grid-cols-3 text-base font-semibold">
                        <span className='col-span-2'>Total Amount:</span>
                        <span>Rs. {bill.total}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
