'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const dateFormat = "dd/MM/yyyy";


  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen" style={{ paddingTop: '47rem' }}>
      <div>
        <img
          src="/assets/image/home2.jpg"
          className="w-full h-auto rounded-lg"
          style={{ borderRadius: "0px" }}
        />
        <div className="w-full md:w-5/5 p-8 rounded-md flex flex-col md:flex-row">
          <div className="md:mr-4 mb-4 md:mb-0 w-full md:w-1/2 md:w-full">
            <label htmlFor="checkin" className="block mb-2">Check-in Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat={dateFormat}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:w-full mb-4 md:mb-0">
            <label htmlFor="checkout" className="block mb-2">Check-out Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date as Date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat={dateFormat}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 flex">
            <div className="mr-4">
              <label htmlFor="adults" className="block mb-1">Adults:</label>
              <select
                id="adults"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
              >
                {[...Array(3)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="children" className="block mb-1">Children:</label>
              <select
                id="children"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              >
                {[...Array(5)].map((_, index) => (
                  <option key={index} value={index}>{index}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center md:mt-5">
            <Link
              href="//front/ShowDetails"
              className="font-normal py-2 px-4 inline-block text-center"
              style={{
                color: 'white',
                textDecoration: 'none',
                border: '0px solid #446341',
                borderRadius: '1px',
                padding: '2px 50px',
                backgroundColor: '#4E7B96',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              BOOK NOW
            </Link>

          </div>
        </div>
        <div className="w-auto mt-10 text-center" style={{ textAlign: 'center', backgroundColor: '#f7ede5', paddingTop: '5rem', paddingRight: '20rem', paddingBottom: '5rem', paddingLeft: '20rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>CASA Hotel</h1>
          <p style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '2rem' }}>5-star luxury hotels & resorts</p>
          <p style={{ fontSize: '1.2rem' }}>
            Built on expansive, generous space with endless greenery, the hotel is surrounded by leafy,
            mature trees with direct access to a well-preserved beachfront. There is a synergy between nature
            and history; the curator of local gems, hidden spots and undiscovered heritage. Let us take you on
            a journey of local dishes and untrodden paths whilst you soak up the sea, with sand between your toes
            and leave with a refreshed mindset. Immerse yourselves in CASA version of a beach town. There are many
            sides of CASA for you; a reflective getaway, a family staycation or a vacation with friends.<br />
            Make CASA your away.</p></div>


        <div className="w-auto mt-1 text-center" style={{ textAlign: 'center', paddingTop: '1rem', paddingRight: '3rem', paddingBottom: '1rem', paddingLeft: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>CASA Hotel</h1>
          <p style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '2rem' }}>5-star luxury hotels & resorts</p>
          <p style={{ fontSize: '1.2rem' }}>
          </p> </div>
          <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
  <iframe
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=CASA+Hotel`}
    allowFullScreen
  ></iframe>
</div>

      </div>
    </div>



  );
};

export default Home;
