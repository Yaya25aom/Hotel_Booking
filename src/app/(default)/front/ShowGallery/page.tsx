'use client';
import React from 'react';

const ImageGallery = () => {
  const images = [
    'gal1.jpg',
    'gal2.jpg',
    'gal3.jpg',
    'gal4.jpg',
    'gal5.jpg',
    'gal6.jpg',
    'gal7.jpg',
    'gal8.jpg',
    'gal9.jpg',
  ];

  return (
    <div className="grid grid-cols-3 gap-4" style={{ paddingTop: '8rem' , paddingBottom: '4rem' , paddingRight: '10rem', paddingLeft: '10rem',}}>
      {images.map((image, index) => (
        <img
          key={index}
          src={`/assets/image/${image}`}
          alt={`Image ${index + 1}`}
          className="rounded-lg shadow-md"
        />
        
      ))}
    </div>
    
  );
};

export default ImageGallery;