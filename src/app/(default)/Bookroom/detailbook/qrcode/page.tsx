'use client'
import React, { useState } from 'react';

const PaymentDetail = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePayClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCompletePayment = () => {
    // Add your logic for completing the payment here
    console.log('Payment completed');
    setShowPopup(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-6 py-8">
        <img src="/assets/image/logo4.png" alt="Calisa Village Hotel" className="h-20" />
      </div>
      <div className="mb-6">
        <p className="text-gray-500">Your payment is now being processed on QR PromtPay.</p>
        <p className="text-gray-500">Please verify the purchase information and click "Pay Now" below.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-20">
        <div className="mt-4">
          <p className="font-bold">MERCHANT NAME: Calisa Village Hotel</p>
          <p className="font-bold">BOOKING NUMBER: 432024040154582</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">AMOUNT: 3,500.00 THB</p>
        </div>
      </div>
      
      
      <div className="grid grid-cols-4 gap-4 mb-12">
      <div className="col-span-1 flex flex-col items-center">
          <div className=" grid relative">
            <img src="/assets/image/qrst1.png" alt="Step 1" className="h-20 mb-2" />
            <div className="absolute inset-0 flex items-center justify-center m-5"style={{margin: '-7.5rem'}}>
              <p className=" mb-10 left-0 text-black font-bold text-lg px-10 py-6 rounded" style={{paddingBottom : '7.5rem'}}>Step 1</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">Please click "Pay Now", Merchant generates a QR Code for credit card or bill payment.</p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative">
            <img src="/assets/image/qrst2.png" alt="Step 2" className="h-20 mb-2" />
            <div className="absolute inset-0 flex items-center justify-center m-5" style={{margin: '-7.5rem'}}>
              <span className="top-0 left-0 text-black font-bold text-lg px-2 py-1 rounded" style={{paddingBottom : '8.9rem'}}>Step 2</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">Customer scans the QR Code with his/her mobile banking app.</p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative">
            <img src="/assets/image/qrst3.png" alt="Step 3" className="h-20 mb-2" />
            <div className="absolute inset-0 flex items-center justify-center m-5" style={{margin: '-7.5rem'}}>
              <span className="top-0 left-0 text-black font-bold text-lg px-2 py-1 rounded" style={{paddingBottom : '8.9rem'}}>Step 3</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">Customer completes the payment is his/her mobile banking app.</p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="relative">
            <img src="/assets/image/qrst4.png" alt="Step 4" className="h-20 mb-2" />
            <div className="absolute inset-0 flex items-center justify-center m-5" style={{margin: '-7.5rem'}}>
              <span className="top-0 left-0 text-black font-bold text-lg px-2 py-1 rounded" style={{paddingBottom : '8.9rem'}}>Step 4</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">Merchant receives notification on payment confirmation and redirect to Thankyou Page.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayClick}
        >
          Pay Now
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">QR PromtPay</h2>
            <div className="flex flex-col items-center">
              <img src="/assets/image/qrpp.jpg" alt="qrcode" className="h-50 mb-4" />
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleCompletePayment}
              >
                Complete Payment
              </button>
            </div>
            <div className="flex flex-col items-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleClosePopup}
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetail;