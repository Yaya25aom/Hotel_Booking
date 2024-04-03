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
    <div className="flex flex-col md:flex-row justify-center items-center h-screen"
      style={{ paddingTop: '50.3rem' }}>
      <div>
        <img
          src="/assets/image/home2.jpg"
          className="w-full h-auto rounded-lg"
          style={{ borderRadius: "0px" }}
          alt=''
        />

          <div className=" items-center md:mt-5 px-24 self-center">
            <Link
              href="/Bookroom/showroomavai"
              className="font-normal py-3 px-24 inline-block text-center "
              style={{
                color: 'white',
                textDecoration: 'none',
                borderRadius: '1px',
                padding: '15px 25px',
                backgroundColor: '#075985',
                fontSize: '1rem',
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Raleway, Roboto, sans-serif'
              }}
            >
              <div className='w-24 '>
                BOOK NOW
              </div>
            </Link>
        </div>
        <div className="w-auto mt-10 text-center"
          style={{ textAlign: 'center', backgroundColor: '#f7F2eB', paddingTop: '5rem', paddingRight: '20rem', paddingBottom: '5rem', paddingLeft: '20rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Raleway, Roboto, sans-serif', fontWeight: 'bold' }}>CALISA VILLAGE</h1>
          <p style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '2rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>5-star luxury hotels & resorts</p>
          <p style={{ fontSize: '1.2rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>
            Built on expansive, generous space with endless greenery, the hotel is surrounded by leafy,
            mature trees with direct access to a well-preserved beachfront. There is a synergy between nature
            and history; the curator of local gems, hidden spots and undiscovered heritage. Let us take you on
            a journey of local dishes and untrodden paths whilst you soak up the sea, with sand between your toes
            and leave with a refreshed mindset. Immerse yourselves in CALISA VILLAGE version of a beach town. There are many
            sides of CALISA VILLAGE for you; a reflective getaway, a family staycation or a vacation with friends.<br />
            Make CALISA VILLAGE your away.</p></div>

        <div className="self-center">
          <div className="flex gap-10 p-8">
            <div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.331252595549!2d100.51171287485724!3d13.81913698657983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b877800c9af%3A0xd754c571fc7177b!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4Lie4Lij4Liw4LiZ4LiE4Lij4LmA4Lir4LiZ4Li34Lit!5e0!3m2!1sth!2sth!4v1711870591318!5m2!1sth!2sth"
                width="700" height="300" loading="lazy" className=" rounded-lg shadow"></iframe>
            </div>
            <div className="w-full">
              <div className="p-15">
                <p className="font-bold text-4xl" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Contact us</p>
                <p className="font text-2xl" style={{ fontFamily: 'Raleway, Roboto, sans-serif', paddingTop: '1rem' }} >  KING MONGKUTS UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</p>
                <p style={{ fontFamily: 'Raleway, Roboto, sans-serif', paddingTop: '1rem' }} >1518 Pracharat 1 Road,Wongsawang, Bangsue, Bangkok 10800</p>
                <div className="mt-10" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                  <p style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Tel : +66 (0) 99-999-9999</p>
                  <p style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Line : @calisahotel</p>
                  <p style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Facebook : Calisa hotel</p>
                  <p style={{ fontFamily: 'Raleway, Roboto, sans-serif' }} >Email : info@calisahotel.com</p>
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
