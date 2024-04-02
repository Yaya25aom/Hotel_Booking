'use client';
import React from 'react';

const Experience = () => {
    return (
        <div className="flex flex-col items-center" style={{paddingTop: ''}}>
            <img
                src="/assets/image/home2.jpg"
                className="w-full h-auto rounded-lg"
                style={{ borderRadius: "0px" }} />
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-5xl font-bold text-center text-gray-800 mb-8 mg-top-100" style={{ paddingTop: '4rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>Facilities & Wellness</div>
                <div className="text-center text-xl mb-8" style={{ paddingTop: '2rem', paddingRight: '15rem', paddingBottom: '3rem', paddingLeft: '15rem', fontFamily: 'Raleway, Roboto, sans-serif' }}>
                    CALISA VILLAGE Facilities & Wellness offers guests a well-rounded luxury stay. There are all kinds of experiences to indulge here, from our swimming pools with a view, to our fitness facilities and a beach pavilion for a soothing body treatment. There's something for all parts of the day.
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8" style={{ paddingRight: '4rem', paddingLeft: '4rem' }}>
                    <div>
                        <img src="/assets/image/Swim2.jpg" alt="Swimming Pools" className="w-full h-96 object-cover rounded-lg" />
                        <h2 className="text-3xl font-bold mt-4" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Swimming Pools</h2>
                        <p className="text-m mt-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                            Swimming Pool
                            Soak up the fresh air and sun in our spacious swimming pool. A true CALISA VILLAGE highlight, the panoramic Olympic-sized swimming pool extends right to the oceanfront. Dip your toes onto the all marble tile floor, or simply float your day away.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/image/kitchen3.jpg" alt="Kitchen & Bar" className="w-full h-96 object-cover rounded-lg" />
                        <h2 className="text-3xl font-bold mt-4" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Kitchen</h2>
                        <p className="text-m mt-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                            Kitchen serves Thai and international cuisine with locally sourced ingredients. Enjoy dynamic menus curated with local chefs. Start your day with a colorful breakfast and end with sophisticated dining featuring tapas and grill selections.
                        </p><br />
                    </div>
                    <div>
                        <img src="/assets/image/spa1.png" alt="SELA Sea Sanctuary Spa" className="w-full h-96 object-cover rounded-lg" />
                        <h2 className="text-3xl font-bold mt-4" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>SELA Sea Sanctuary Spa</h2>
                        <p className="text-m mt-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                            SELA Sea Sanctuary Spa , harnessing oceanic healing. Luxurious treatments with sea-inspired ingredients. Tranquil facilities for holistic rejuvenation. Tailored pathways for guests' perfect relaxation.
                        </p>
                    </div>
                    <div>
                        <img src="/assets/image/fit1.jpg" alt="Fitness" className="w-full h-96 object-cover rounded-lg" />
                        <h2 className="text-3xl font-bold mt-4" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>Fitness</h2>
                        <p className="text-m mt-2" style={{ fontFamily: 'Raleway, Roboto, sans-serif' }}>
                            Did you overindulge? Our air-conditioned fitness centre is fully stocked with high quality gym equipment including free weights, treadmills, an elliptical trainer and an exercise bike. Located near the Lobby.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;