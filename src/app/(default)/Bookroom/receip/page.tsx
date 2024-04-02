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
            <div key={reservation.BookID}>
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 " >
      <div className="mb-4">
      <h2 className="text-xl font-bold">Address</h2>
        <div className="mt-2">
          <p className="text-gray-700">{reservation.Hotel.Address} {reservation.Hotel.City}</p>
          <p className="text-gray-700">{reservation.Hotel.Postcode}, {reservation.Hotel.Country}</p>
        </div>
        <h2 className="text-xl font-bold">Customer Name & Address</h2>
        <div className="mt-2">
          <p className="text-gray-700">Name: {reservation.informationGuest.FirstName} {reservation.informationGuest.LastName}</p>
          <div className='flex gap-1'>
          <p className="text-gray-700">Booking Address: {reservation.informationGuest.Address} {reservation.informationGuest.City}, {reservation.informationGuest.Country}</p>
          </div>
          <p className="text-gray-700">Email Address: {reservation.informationGuest.User.email}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">Hotel Name</p>
            <p className="text-gray-700">Period</p>
            <p className="text-gray-700 py-7">Room Type</p>
            <p className="text-gray-700"># of Rms.</p>
            <p className="text-gray-700"># Num adults</p>
            <p className="text-gray-700"># Num children</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700">{reservation.Hotel.Hotelname}</p>
            <p className="text-gray-700">December 6, 2014 - December 7, 2014 1 night(s)</p>
            <p className="text-gray-700">Standard</p>
            <p className="text-gray-700 py-8">1</p>
            <p className="text-gray-700" style={{marginTop:'-34px'}}>{reservation.Numadults}</p>
            <p className="text-gray-700">{reservation.Numchild}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">Total Room Charges</p>
            <p className="text-gray-700">Total Enhancment Charges</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700">THB {(reservation.Totalprice * 0.07 +reservation.Totalprice * 0.10 + reservation.Totalprice  ).toFixed(2)}</p>
            <p className="text-gray-700">THB {reservation.Enhanc.EnhancPrice}.00</p>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-300 pt-4">
          <div className="flex justify-between">
            <p className="text-gray-700 font-bold">GRAND TOTAL</p>
            <p className="text-gray-700 font-bold">THB {(reservation.Totalprice * 0.07 +reservation.Totalprice * 0.10 + reservation.Totalprice  + reservation.Enhanc.EnhancPrice ).toFixed(2)}</p>
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