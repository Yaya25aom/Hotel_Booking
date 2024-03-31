'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BeachHouseComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/assets/image/sky1.jpg',
    '/assets/image/sky4.jpg',
    '/assets/image/sky5.jpg',
    '/assets/image/sky3.jpg',
    '/assets/image/sky2.jpg',
    

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
          <h1 className="text-4xl font-bold mb-4"style={{fontFamily: 'Raleway, Roboto, sans-serif'}}>SKY BEACHFRONT</h1>
          <p className="mb-10" style={{ color: '#263B56' , fontSize: '1.25rem' , fontFamily: 'Raleway, Roboto, sans-serif'}}>
          In our bespoke Sky Beachfront, sitting on the top floor of our beachfront building, guests will indulge in an expansive, floor-to-ceiling glass windowed sanctuary. Relax in a luxurious bathtub while enjoying the beautiful and endless views of the Gulf of Thailand. Truly get lost in the elements.
          </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>SIZE</p>
                <p>46 SQ.M</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' , fontFamily: 'Raleway, Roboto, sans-serif'}}>BEDS</p>
                <p>KING SIZED BED</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem' , fontFamily: 'Raleway, Roboto, sans-serif'}}>GUESTS</p>
                <p>TWO</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>VIEW</p>
                <p>BEACH</p>
                </div>
            </div>
            <div>
            <hr style={{ border: 'none', borderBottom: '1px solid #DCDCDC', height: '5px', margin: '10px 0'}}></hr>
            <p className="text-xl font-bold mb-1" style={{fontFamily: 'Raleway, Roboto, sans-serif',paddingTop: '3rem' ,paddingBottom: '1rem'}}>ROOM FEATURES & AMENITIES</p>
            <div style={{ display: 'flex', alignItems: 'center' ,paddingBottom: '1rem'}}>
              <Image src="/wifi.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>Complimentary high-speed Wi-Fi</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,paddingBottom: '1rem'}}>
              <Image src="/TV.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>49” flat screen LED smart TV with cable channels</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,paddingBottom: '1rem'}}>
              <Image src="/air.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>Climate-controlled Air Conditioning</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,paddingBottom: '1rem'}}>
              <Image src="/coffee.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>Nespresso coffee machine and tea kettle</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' ,paddingBottom: '1rem'}}>
              <Image src="/tub.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>Indoor Bathtub</p>
            </div>          
            <div style={{ display: 'flex', alignItems: 'center',paddingBottom: '3rem' }}>
              <Image src="/hair.svg" alt="WiFi Icon" width={24} height={24} style={{ marginRight: '8px' }} />
              <p style={{ margin: 0 ,fontSize: '1.15rem', fontFamily: 'Raleway, Roboto, sans-serif'}}>Hairdryer</p>
            </div>
            
              </div>
      
            <div className="flex items-center">
            <Link
                  href="/Bookroom/showroomavai"
                  className="font-normal py-2 px-4"
                  style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '7px 35px', backgroundColor: '#263B56' ,
                  fontSize: '1.25rem', fontFamily: 'Raleway, Roboto, sans-serif' }}
                >
                  BOOK
                </Link>
              
            </div>
          </div>
        </div>        

  );
};

export default BeachHouseComponent;
              