import React from 'react';
import Link from 'next/link';

const VillasAndHousesSection = () => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-5xl font-bold text-center text-gray-800 mb-8 mg-top-100"  style={{ paddingTop: '8rem' }}>Accommodation</div>
        <div>
        
        <div className="text-gray-600 text-sm text-center" style={{ fontSize: '18px' }}>
        Just moments from a secluded beach with serene views over a sparkling bay blend organically with the lush tropical landscape and awaken true feelings of escape. Tranquility and refinement capture the essence of a luxury beach residence, where comfortable furnishings crafted from natural materials combine with neutral color palettes, subtle Thai influences and abundant natural light to infuse a timeless elegance. Immerses the guest in the soothing ambiance of a beachside retreat with floor-to-ceiling windows opening on to the private sanctuary of a verdant garden terrace featuring an plunge pool, relaxed outdoor seating and a daybed.
        </div>
        
</div>

        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/assets/image/sky1.jpg"
                alt="The Sky Beachfront"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#446341' }}>SKY BEACHFRONT</h3>

              <p className="text-gray-600 mb-4">
              The Sky Beachfront, atop the beachfront building, features a luxurious bathtub with stunning views for relaxation.
              </p>
              <p className="text-gray-800 font-bold mb-2">46 SQ.M</p>
              <p className="text-gray-600 mb-4">KING BED | TWO</p>
              <div className="flex justify-between">
              <Link
                href="/front/ShowDetails_Beach" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#446341', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px' }}>Details
              </Link>
                <Link
                  href="//front/ShowDetails"
                  className="font-normal py-2 px-4"
                  style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#446341' }}
                >
                  BOOK
                </Link>
              </div>
            </div>            
            <div>             
              <img
                src="/assets/image/fam1.jpg"
                alt="Family Room"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#446341' }}>FAMILY ROOM</h3>
              <p className="text-gray-600 mb-4">
              The Family room boasts a large balcony and an outdoor bathtub, perfect for family relaxation. It includes a bunk bed and an in-room play area, suitable for children.
              </p>
              <p className="text-gray-800 font-bold mb-2">60 SQ.M</p>
              <p className="text-gray-600 mb-4">KING SIZED & BUNK BEDS | FOUR</p>
              <div className="flex justify-between">
              <Link
                href="/front/ShowDetails_Ocean" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#446341', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px' }}>Details
              </Link>
                <Link
                  href="//front/ShowDetails"
                  className="font-normal py-2 px-4"
                  style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#446341' }}
                >
                  BOOK
                </Link>


              </div>
            </div>
            <div>             
              <img
                src="/assets/image/pp.png"
                alt="Pool Pavilion"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#446341' }}>POOL PAVILION</h3>
              <p className="text-gray-600 mb-4">
                Partial Ocean View Pool Pavilions feature a tropical setting, floor-to-ceiling windows, plunge pool and an outdoor bath tub.
              </p>
              <p className="text-gray-800 font-bold mb-2">1,399 FT² / 130 M²</p>
              <p className="text-gray-600 mb-4">ONE KING OR TWO TWIN BEDS | TWO</p>
              <div className="flex justify-between">
              <Link
                href="/front/ShowDetails_Pool" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#446341', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px' }}>Details
              </Link>
                <Link
                  href="//front/ShowDetails"
                  className="font-normal py-2 px-4"
                  style={{ color: 'white', textDecoration: 'none', border: '1px solid #446341', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#446341' }}
                >
                  BOOK
                </Link>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default VillasAndHousesSection;
