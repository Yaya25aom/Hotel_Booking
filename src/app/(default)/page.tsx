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
    <div className="flex flex-col md:flex-row justify-center items-center h-screen" style={{ paddingTop: '52rem' }}>
      <div>
        <img
          src="/assets/image/home2.jpg"
          className="w-full h-auto rounded-lg"
          style={{ borderRadius: "0px" }}
        />
        <div className="w-full md:w-5/5 p-8 rounded-md flex flex-col md:flex-row">
          <div className="md:mr-4 mb-4 md:mb-0 w-full md:w-1/2 md:w-full" style={{ paddingRight: '5rem', paddingLeft: '5rem', }}>
            <label htmlFor="checkin" className="block mb-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Check-in Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat={dateFormat}
              className="w-full p-2 border border-gray-300 rounded-md "
            />
          </div>
          <div className="w-full md:w-1/2 md:w-full mb-4 md:mb-0">
            <label htmlFor="checkout" className="block mb-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Check-out Date:</label>
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
              <label htmlFor="adults" className="block mb-1" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Adults:</label>
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
              <label htmlFor="children" className="block mb-1" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Children:</label>
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
          <div className=" items-center md:mt-5 px-24 self-center">
            <Link
              href="/Bookroom/select"
              className="font-normal py-3 px-24 inline-block text-center "
              style={{
                color: 'white',
                textDecoration: 'none',
                border: '0px solid #446341',
                borderRadius: '1px',
                padding: '15px 25px',
                backgroundColor: '#4E7B96',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Raleway, Roboto, sans-serif'
              }}
            >
              <div className='w-24'>
                BOOK NOW
              </div>
            </Link>

          </div>
        </div>
        <div className="w-auto mt-10 text-center" style={{ textAlign: 'center', backgroundColor: '#f7ede5', paddingTop: '5rem', paddingRight: '20rem', paddingBottom: '5rem', paddingLeft: '20rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Raleway, Roboto, sans-serif', fontWeight: 'bold' }}>CASA Hotel</h1>
          <p style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '2rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>5-star luxury hotels & resorts</p>
          <p style={{ fontSize: '1.2rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>
            Built on expansive, generous space with endless greenery, the hotel is surrounded by leafy,
            mature trees with direct access to a well-preserved beachfront. There is a synergy between nature
            and history; the curator of local gems, hidden spots and undiscovered heritage. Let us take you on
            a journey of local dishes and untrodden paths whilst you soak up the sea, with sand between your toes
            and leave with a refreshed mindset. Immerse yourselves in CASA version of a beach town. There are many
            sides of CASA for you; a reflective getaway, a family staycation or a vacation with friends.<br />
            Make CASA your away.</p></div>

        <div className="self-center">
          <div className="flex gap-10 p-8">
            <div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.331252595549!2d100.51171287485724!3d13.81913698657983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b877800c9af%3A0xd754c571fc7177b!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4Lie4Lij4Liw4LiZ4LiE4Lij4LmA4Lir4LiZ4Li34Lit!5e0!3m2!1sth!2sth!4v1711870591318!5m2!1sth!2sth" width="700" height="300" loading="lazy" className=" rounded-lg shadow"></iframe>
            </div>
            <div className="w-full">
              <div className="p-15">
                <p className="font-bold text-2xl" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >  KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</p>
                <p style={{ fontFamily: 'Raleway, Roboto, sans-serif', paddingTop: '1rem' }} >1518 Pracharat 1 Road,Wongsawang, Bangsue, Bangkok 10800</p>
                <div className="mt-10" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                  <p style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Contact Us. Tel: 099-999-9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Home;
