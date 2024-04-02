'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Receipt = () => {
    const [reservations, setReservations] = useState([]);

    const fetchReceipts = async () => {
        try {
            const response = await axios.get('/api/reservation');
            setReservations(response.data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        fetchReceipts();
    }, []);

    return (
        <div className="" style={{paddingLeft:'17rem', paddingRight:'17rem'}}>
            {reservations.map((reservation: any) => (
                <div key={reservation.BookID} className="mb-8">
                    <div className="flex justify-end mb-2">
                        <img src="/assets/image/logo4.png" alt="logo" style={{ width: '100px' }} />
                    </div>
                    <div className="flex justify-end">
                        <p>Telephone <span className="font-medium">{reservation.Hotel.PhoneNo}</span></p>
                    </div>

                    <h2 className="text-xl">Address</h2>
                    <div className="grid">
                        <span className="font-bold">{reservation.Hotel.Hotelname}</span>
                        <span className="font-bold">{reservation.Hotel.Address} {reservation.Hotel.Postcode}</span>
                        <span className="font-bold">{reservation.Hotel.City}</span>
                        <span className="font-bold">{reservation.Hotel.Country}</span>
                    </div>
                    <div className="grid py-4">
                        <div className="flex gap-3">
                            <p>BookingID:</p>
                            <span className="font-bold">{reservation.BookID}</span>
                        </div>
                        <p>Change date {reservation.Bookingdate}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-xl">Receipt</p>
                    </div>
                    <table className="w-full border border-gray-200">
                        <thead style={{ backgroundColor: '#bcb4ff' }}>
                            <tr className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ color: '#000' }}>
                                <th className="px-6 py-3">CUSTOMER NAME & ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="px-6 py-4 whitespace-nowrap">
                                <td>
                                    <div className="grid gap-2 py-4">
                                        <div className="flex gap-2">
                                            <p className="text-lm font-bold">Hotel Name</p>
                                            <p className="text-lm font-medium">{reservation.Hotel.Hotelname}</p>
                                        </div>
                                        <div className="flex gap-2 py-2">
                                            <p className="text-lm font-bold">Period</p>
                                            <p className="text-lm font-medium">{reservation.ArrivalDeparture}</p>
                                        </div>
                                        <div className="flex gap-2 py-2">
                                            <p className="text-lm font-bold">RoomType</p>
                                            <p className="text-lm font-medium">{reservation.Room.RoomType.RoomType_name}, RoomNo {reservation.Room.RoomNo}</p>
                                        </div>
                                        <div>
                                            <p className="text-lm px-2 font-bold"># of rooms</p>
                                            <p className="text-lm px-2 font-bold"># num adults</p>
                                            <p className="text-lm px-2 font-bold"># num child</p>
                                        </div>
                                        <div className="flex gap-2 py-2">
                                            <p className="text-lm font-bold">Enhancment</p>
                                            <p className="text-lm font-medium">{reservation.Enhanc.Enhancname}</p>
                                        </div>
                                        <div className="flex gap-2 py-2">
                                            <p className="text-lm font-bold">Special req</p>
                                            <p className="text-lm font-medium">No req</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-lm font-bold">Total Room Charge</p>
                                            <p className="text-lm font-medium">13500</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Receipt;
