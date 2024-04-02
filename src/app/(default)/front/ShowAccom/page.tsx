import React from 'react';
import Link from 'next/link';

const VillasAndHousesSection = () => {
  return (
    <div className="py-8 flex justify-center items-center" style={{ paddingTop: '0rem' }}>
      <div>
        <img
          src="/assets/image/home2.jpg"
          className="w-full h-auto rounded-lg"
          style={{ borderRadius: "0px" }} />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-5xl font-bold text-center text-gray-800 mb-8 mg-top-100"
            style={{ paddingTop: '4rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Accommodation</div>
          <div>
            <div className="text-center text-xl mb-8"
              style={{
                paddingTop: '2rem', paddingRight: '10rem', paddingBottom: '3rem', paddingLeft: '10rem',
                fontFamily: 'Raleway, Roboto, sans-serif'
              }}>
              Just moments from a secluded beach with serene views over a sparkling bay blend organically
              with the lush tropical landscape and awaken true feelings of escape. Tranquility and refinement
              capture the essence of a luxury beach residence, where comfortable furnishings crafted from
              natural materials combine with neutral color palettes, subtle Thai influences and abundant natural
              light to infuse a timeless elegance. Immerses the guest in the soothing ambiance of a beachside
              retreat with floor-to-ceiling windows opening on to the private sanctuary of a verdant garden
              terrace featuring an plunge pool, relaxed outdoor seating and a daybed.
            </div>

            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <img
                    src="/assets/image/du1.jpg"
                    alt="Deluxe room"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2"
                    style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>DELUXE ROOM</h3>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    The Deluxe room is located on the upper floors, offering expansive views of lush green landscapes.
                    Step onto the terrace and delight in the view of the sea.
                  </p>
                  <p className="text-gray-800 font-bold mb-2"
                    style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>56 SQ.M</p>
                  <p className="text-gray-600 mb-4"
                    style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>DOUBLE BED | TWO</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Deluxe" className="text-white font-bold py-2 px-10 rounded" style={{
                        color: '#075985', textDecoration: 'none',
                        border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif'
                      }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{
                        color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px',
                        backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif'
                      }}
                    >
                      BOOK
                    </Link>
                  </div><br />

                </div>
                <div>
                  <img
                    src="/assets/image/sky1.jpg"
                    alt="The Sky Beachfront"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>SKY BEACHFRONT</h3>

                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    The Sky Beachfront, located on the top floor of our beachfront building, offers breathtaking ocean views and luxurious bathrooms.
                  </p>
                  <p className="text-gray-800 font-bold mb-2" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>60 SQ.M</p>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>KING SIZED BED | TWO</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Sky" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#075985', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif' }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{ color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}
                    >
                      BOOK
                    </Link>
                  </div><br />
                </div>
                <div>
                  <img
                    src="/assets/image/fam1.jpg"
                    alt="Family Room"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>FAMILY ROOM</h3>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    A family-friendly room, perfect for relaxation and enjoyment, with a spacious terrace, a bunk bed, and a play area, perfect for children.
                  </p>
                  <p className="text-gray-800 font-bold mb-2" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>220 SQ.M</p>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>KING SIZED & BUNK BEDS | FOUR</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Fam" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#075985', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif' }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{ color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}
                    >
                      BOOK
                    </Link>


                  </div>
                </div>
                <div>
                  <img
                    src="/assets/image/pool1.jpg"
                    alt="Pool Villa Garden"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>VILLA GARDEN</h3>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    The pool villa is set in a serene, enclosed tropical garden, perfect for those seeking privacy and ample space to unwind.
                  </p>
                  <p className="text-gray-800 font-bold mb-2" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>120 SQ.M</p>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>KING SIZED BED | TWO</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Garden" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#075985', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif' }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{ color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}
                    >
                      BOOK
                    </Link>
                  </div><br />

                </div>
                <div>
                  <img
                    src="/assets/image/sv1.jpg"
                    alt="Pool Villa Sea view"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>VILLA SEA VIEW</h3>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    A serene space filled with luxurious touches, the spacious terrace boasts sun loungers for you to admire the beautiful sea view.
                  </p>
                  <p className="text-gray-800 font-bold mb-2" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>110 SQ.M</p>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>KING SIZED BED | TWO</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Seaview" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#075985', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif' }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{ color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}
                    >
                      BOOK
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="/assets/image/bf1.jpg"
                    alt="Pool Villa Beachfront"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}>VILLA BEACHFRONT</h3>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }} >
                    The Pool Villa Beachfront is just a few steps away from the sandy beach, featuring an indoor bathtub and luxurious amenities.
                  </p>
                  <p className="text-gray-800 font-bold mb-2" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>140 SQ.M</p>
                  <p className="text-gray-600 mb-4" style={{ color: '#4E7B96', fontFamily: 'Raleway, Roboto, sans-serif' }}>KING SIZED BED | TWO</p>
                  <div className="flex justify-between">
                    <Link
                      href="/front/ShowDetails_Beachfront" className="text-white font-bold py-2 px-10 rounded" style={{ color: '#075985', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', fontFamily: 'Raleway, Roboto, sans-serif' }}>Details
                    </Link>
                    <Link
                      href="/Bookroom/showroomavai"
                      className="font-normal py-2 px-4"
                      style={{ color: 'white', textDecoration: 'none', border: '1px solid #075985', borderRadius: '5px', padding: '5px 30px', backgroundColor: '#075985', fontFamily: 'Raleway, Roboto, sans-serif' }}
                    >
                      BOOK
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillasAndHousesSection;
