'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OceanHouseComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/assets/image/sv1.jpg',
    '/assets/image/sv5.jpg',
    '/assets/image/sv4.jpg',
    '/assets/image/sv2.jpg',
    '/assets/image/sv3.jpg',
        
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
    alt="Sky"
    className="w-full h-auto rounded-lg shadow-lg"
    width={1000}
    height={900}
  />
  <div className="absolute bottom-4 right-4 text-white" style={{ fontSize: '1.5rem' }}>
    {currentImage + 1} of {images.length}
  </div>
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
  <button
    onClick={handlePrevImage}
    className="bg-blue-200 hover:bg-blue-100 text-#263B56 font-normal py-1 px-3 rounded text-2xl"
  >
    &lt;
  </button>
</div>
<div className="absolute top-1/2 right-4  transform -translate-y-1/2">
  <button
    onClick={handleNextImage}
    className="bg-blue-200 hover:bg-blue-100 text-#263B56 font-normal py-1 px-3 rounded text-2xl"
  >
    &gt;
  </button>
</div>

  </div>
</div>

        </div><br/><br/>
          <div>
            <h1 className="text-4xl font-bold mb-4">POOL VILLA SEA VIEW</h1>
            <p className="mb-10" style={{ fontSize: '1.25rem' }}>
            A serene space and filled with VALA’s luxurious touch, where less is truly more. The spacious terrace comes with sun loungers, offering you hours of pleasure by simply gazing 
            at the glistening sea. Privacy, serenity, private garden, and an impressive view of the sea.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>SIZE</p>
                <p>140-166 SQ.M</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>BEDS</p>
                <p>KING SIZED BED</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>GUESTS</p>
                <p>TWO</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' }}>VIEW</p>
                <p>SEA</p>
                </div>
            </div>
            <div>
            <hr style={{ border: 'none', borderBottom: '1px solid #DCDCDC', height: '5px', margin: '10px 0' }} /><br /> 
            <p className="text-xl font-bold mb-1">ROOM FEATURES & AMENITIES</p> <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/wifi.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Complimentary high-speed Wi-Fi</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/TV.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>49” flat screen LED smart TV with cable channels</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/air.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Climate-controlled Air Conditioning</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/coffee.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Nespresso coffee machine and tea kettle</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/tub.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Indoor Bathtub</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/shower.svg" alt="WiFi Icon" width={24} height={30} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Outdoor rainforest shower</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/sofa.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Living Space</p>
            </div><br />    
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/blue.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Bluetooth speaker</p>
            </div><br />         
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/hair.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Hairdryer</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/pool.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Private swimming pool size: 2.8 x 8 m.</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/flower.svg" alt="WiFi Icon" width={22} height={22} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Expansive private garden</p>
            </div><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/sun.svg" alt="WiFi Icon" width={24} height={30} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem'}}>Sunloungers</p>
            </div><br />

              </div>
            <div className="flex items-center">
            <Link
                 href="//front/ShowDetails"
                 className="font-normal py-2 px-4"
                 style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '7px 35px', backgroundColor: '#263B56' ,
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