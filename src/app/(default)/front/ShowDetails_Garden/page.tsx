'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OceanHouseComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/assets/image/pool1.jpg',
    '/assets/image/pool5.jpg',
    '/assets/image/pool2.jpg',
    '/assets/image/pool4.jpg',
    '/assets/image/pool3.jpg',


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

      </div><br /><br />
      <div>
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>POOL VILLA GARDEN</h1>
        <p className="mb-10" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>
          The pool villa is set in a serene, enclosed tropical garden.<br />
          Step inside the spacious villa, comfortably cozy with CALISA luxurious touch. This stay is ideal for those who want privacy and the vast grounds to relax in.
          There is no need to escape further, with a large terrace and a 2.8 x 8m private pool and sun loungers. Spend your days outside, take in the fresh air and your very own private garden.
          Villa exclusives include luxurious amenities; a double vanity, cozy sunloungers, refreshing in-room bathtub and shower.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>SIZE</p>
            <p>120 SQ.M</p> 
          </div>
          <div>
            <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>BEDS</p>
            <p>KING SIZED BED</p>
          </div>
          <div>
            <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>GUESTS</p>
            <p>TWO</p>
          </div>
          <div>
            <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>VIEW</p>
            <p>GARDEN</p>
          </div>
        </div>
        <div>
          <hr style={{ border: 'none', borderBottom: '1px solid #DCDCDC', height: '5px', margin: '10px 0' }}></hr>
          <p className="text-xl font-bold mb-1" style={{ fontFamily: 'Raleway, Roboto, sans-serif', paddingTop: '3rem', paddingBottom: '1rem' }}>ROOM FEATURES & AMENITIES</p>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/wifi.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Complimentary high-speed Wi-Fi</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/TV.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>49” flat screen LED smart TV with cable channels</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/air.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Climate-controlled Air Conditioning</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/coffee.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Nespresso coffee machine and tea kettle</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/tub.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Indoor Bathtub</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/shower.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Outdoor rainforest shower</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/sofa.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Living Space</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/sound.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Personal in-room music system with iPod connectivity</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/hair.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Hairdryer</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/pool.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Private swimming pool size: 2.8 x 8 m.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '1rem' }}>
            <Image src="/flower.svg" alt="WiFi Icon" width={22} height={22} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Expansive private garden</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '3rem' }}>
            <Image src="/sun.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
            <p style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Sunloungers</p>
          </div>

        </div>

        <div className="flex items-center">
          <Link
            href="/Bookroom/showroomavai"
            className="font-normal py-2 px-4"
            style={{
              color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '7px 35px', backgroundColor: '#263B56',
              fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif'
            }}
          >
            BOOK
          </Link>

        </div>
      </div>
    </div>
  );
};

export default OceanHouseComponent;