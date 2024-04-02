'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const Receipt = () => {
    const [receipt, setReceipt] = useState([])
    const fetchReceipt = async () => {
        try{
            const response = await axios.get('/api/reservation')
            setReceipt(response.data)
        }catch(error){
            console.log('error',error)
        }
    }
    useEffect(() => {
        fetchReceipt()
    }, [])
  return (
    <div className='' style={{paddingTop:'7.5rem'}}>
         {receipt.map((reservation: any) => (
            <div key={reservation.informationGuest.FirstName}>
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 " >
      <div className="mb-4">
        <h2 className="text-xl font-bold">Customer Name & Address</h2>
        <div className="mt-2">
          <p className="text-gray-700">Name: {reservation.BookID}</p>
          <p className="text-gray-700">Billing Address: [Billing Address]</p>
          <p className="text-gray-700">Email Address: [Email Address]</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">Hotel Name</p>
            <p className="text-gray-700">Period</p>
            <p className="text-gray-700">Room Type</p>
            <p className="text-gray-700"># of Rms.</p>
            <p className="text-gray-700"># of Extra Beds</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700">Yao In Chan Hotel</p>
            <p className="text-gray-700">December 6, 2014 - December 7, 2014 1 night(s)</p>
            <p className="text-gray-700">Standard</p>
            <p className="text-gray-700">1</p>
            <p className="text-gray-700">0</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">Total Room Charges</p>
            <p className="text-gray-700">Total Extra Bed Charges</p>
            <p className="text-gray-700">Discount (SCB discount)</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700">USD 76.85</p>
            <p className="text-gray-700">USD 0.00</p>
            <p className="text-gray-700">USD -4.57</p>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-300 pt-4">
          <div className="flex justify-between">
            <p className="text-gray-700 font-bold">GRAND TOTAL</p>
            <p className="text-gray-700 font-bold">USD 72.28</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-700">Total Charge to Credit Card</p>
            <p className="text-gray-700">THB 2,343.90 (USD 72.28)</p>
          </div>
        </div>
      </div>
    </div>
    </div>
         ))}
    </div> 
    
    
  );
};

export default Receipt;