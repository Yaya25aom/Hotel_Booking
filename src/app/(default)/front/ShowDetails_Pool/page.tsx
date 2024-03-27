'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OceanHouseComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/assets/image/pp.png',
    '/assets/image/pp1.png',
    '/assets/image/pp3.png',
    '/assets/image/pp2.png',
    
        
  ];

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto p-40" style={{ paddingTop: '8rem' }}>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      <div className="relative flex justify-center items-center">
      <div className="relative">
  <Image
    src={images[currentImage]}
    alt="Beach House"
    className="w-full h-auto rounded-lg shadow-lg"
    width={1000}
    height={400}
  />
  <div className="absolute bottom-4 right-4 text-white" style={{ fontSize: '1.5rem' }}>
    {currentImage + 1} of {images.length}
  </div>
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
  <button
    onClick={handlePrevImage}
    className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded text-3xl"
  >
    &lt;
  </button>
</div>
<div className="absolute top-1/2 right-4  transform -translate-y-1/2">
  <button
    onClick={handleNextImage}
    className="bg-green-900 hover:bg-green-700 text-white font-normal py-2 px-4 rounded text-3xl"
  >
    &gt;
  </button>
</div>

  </div>
</div>

        </div><br/><br/>
          <div>
            <h1 className="text-4xl font-bold mb-4">THE OCEAN HOUSE</h1>
            <p className="mb-10" style={{ fontSize: '1.25rem' }}>
            Representing the epitome of an elevated tropical lifestyle, the residential-like two-bedroom Ocean House offers exceptional exclusivity along a quiet stretch of the shoreline. This haven features garden courtyards, shady terraces and a private pool, and a plunge into the warm, crystalline waters of Emerald Bay is just steps away.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>SIZE</p>
                <p>1,399 FT² / 130 M²</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>BEDS</p>
                <p>ONE KING OR TWO TWIN BEDS</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>GUESTS</p>
                <p>TWO</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>BATHROOMS</p>
                <p>ONE</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>VIEW</p>
                <p>PARTIAL OCEAN VIEW</p>
                </div>
            </div>
            <div>
            <hr style={{ border: 'none', borderBottom: '1px solid #DCDCDC', height: '5px', margin: '10px 0' }} /><br /> 
            <p className="text-xl font-bold mb-1" >ROOM FEATURES & AMENITIES</p> <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/wifi.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem' }}>WiFi and wired high-speed Internet access</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/TV.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>48" high-definition stereo LED Smart TV with high-speed Internet access</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/pool.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Garden courtyards and outdoor terrace with large private pool</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/coffee.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Nespresso coffee machine and tea kettle</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/bar.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Fully stocked personal bar</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/touch.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Touch-panel in-room technology system</p>
            </div><br /><br />

              </div>
            <div className="flex items-center">
            <Link
                 href="//front/ShowDetails"
                 className="font-normal py-2 px-4"
                 style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '7px 35px', backgroundColor: '#446341' ,
                 fontSize: '1.25rem' }}
                >
                  BOOK
                </Link>
              
            </div>
          </div>
          </div>
  );
};

export default OceanHouseComponent;