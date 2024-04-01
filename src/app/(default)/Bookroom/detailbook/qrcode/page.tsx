import React from 'react';

const PaymentDetail = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <img src="dhevan-dara-logo.png" alt="Dhevan Dara Resort & Spa" className="h-12" />
      </div>
      <div className="mb-6">
        <p className="text-gray-500">Your payment is now being processed on K-Payment Gateway.</p>
        <p className="text-gray-500">Please verify the purchase information and click "Pay Now" below.</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-500">คุณกำลังทำการชำระเงินผ่านทางค่ายพักโรงแรม Dhevan Dara Resort & Spa, Hua Hin</p>
        <p className="text-sm text-gray-500">กรุณาตรวจสอบรายละเอียดการสั่งซื้อและคลิก "Pay Now" เพื่อดำเนินการชำระเงินผ่าน K-Payment Gateway</p>
        <div className="mt-4">
          <p className="font-bold">MERCHANT NAME: Dhevan Dara Resort & Spa, Hua Hin</p>
          <p className="font-bold">BOOKING NUMBER: 432024040154582</p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">AMOUNT: 3,500.00 THB</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-500">Your payment is now being processed on K-Payment Gateway, an online payment system by KASIKORNBANK.</p>
        <p className="text-gray-500">K-Payment Gateway is the highly secure payment processor for your seller, Dhevan Dara Resort & Spa, Hua Hin.</p>
        <p className="text-gray-500">Please verify the purchase information and click "Pay Now" below.</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentDetail;