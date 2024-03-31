'use client'
import React, { useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";


import AddEnhancementButton from '@/components/ui/AddEnhancementButton';
import EnhancementModal from '@/components/form/EnhancementModal'; // นำเข้า EnhancementModal มาก่อนเรียกใช้


const List = () => {
  const [selectedRateOption, setSelectedRateOption] = useState("limited-time-offer");
  const handleRateOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRateOption(event.target.value);
  };
  

  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [roomTypes, setRoomTypes] = useState([]);
  const [Enhanc, setEnhanc] = useState([]);

  const roomData = [
    {
      id: 1001,
      name: "Ocean View Pool Junior Suite",
      image: "/assets/image/pp2.png",
    },
    {
      id: 1002,
      name: "Deluxe Ocean View Suite",
      image: "/assets/image/oc2.png",
    },
    // Add other room data as needed
  ];

  const fetchRoomTypes = async () => {
    try {
      const response = await axios.get('/api/statusroom');
      setRoomTypes(response.data.filter((room: { Status: boolean }) => room.Status === true));
    } catch (error) {
      console.log('error', error);
    }
  };

  const toggleCollapse = (roomNo: number) => {
    setIsOpen(prevOpen => (prevOpen === roomNo ? null : roomNo));
  };

  useEffect(() => {
    fetchRoomTypes();
  }, []);
    return (
        <div>
      <div
        className="  flex items-center justify-center border-b border-gray-700 "
        style={{ paddingTop: "8rem" }}
      >
        <a href="#" className="text-black-500 " style={{ textDecorationLine: "underline" }}>
          Add more rooms
        </a>
      </div>
      <div className="flex items-center justify-center " style={{ paddingTop: "8rem" }}>
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M22 21H2v-2h1V4a1 1 0 011-1h14a1 1 0 011 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z"
          />
        </svg>
        <a href="#" className="text-black-500 hover:underline">
          room
        </a>
      </div>
      {roomTypes.map((room: any) => (
        <div key={room.RoomNo} className="bg-white shadow-md rounded-lg overflow-hidden" style={{ paddingTop: "8rem" }}>
          <div className="bg-red-700 text-white font-bold px-4 py-2">Limited Time Offer</div>
          <div className="flex">
            <div className="w-1/2 p-4 relative">
              <Link href={`/room/${room.RoomNo}`} passHref>
                <div>
                <img
              src={roomData.find((data) => data.id === room.RoomNo)?.image || ""}
              alt={room.RoomType?.RoomType_name || ""}
              className="w-full h-64 object-cover"
              onMouseEnter={() => setHoveredRoom(room.RoomNo)}
              onMouseLeave={() => setHoveredRoom(null)}
            />
                  {hoveredRoom === room.RoomNo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white">Click to go to another page</p>
              </div>
            )}
                </div>
              </Link>
            </div>
            <div className="text-white p-6 " style={{ backgroundColor: "rgb(223 229 236)" }}>
              <h2 className="text-2xl font-semibold mb-4">
                <span className="text-lg font-bold">{room.RoomType?.RoomType_name}</span>
              </h2>
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{room.RoomType?.RoomType_guest} people</span>
                </div>
                <div className="mr-4">
                  <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v11m0-11l4 4m0 0l4-4m-4 4v11" />
                  </svg>
                  <span>{room.RoomType?.RoomType_bed} Bed</span>
                </div>
                <div>
                  <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.447-.894L15 4"
                    />
                  </svg>
                  <span>{room.RoomType?.RoomType_size} m² </span>
                </div>
              </div>
              <p className="mb-4">The Ocean View Pool Junior Suites are situated on the highest level of the resort, offering cool breezes, total privacy and panoramic ocean views overlooking It has a private entrance walkway leading to the 70 squar...</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 mb-6 inline-block">View Room Details And Enhancements</a>
              <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
              <input
      id={`limited-time-offer-${room.RoomNo}`}
      type="radio"
      name={`rate-option-${room.RoomNo}`}
      value="limited-time-offer"
      defaultChecked
      className="form-radio h-5 w-5 text-blue-500"
      onChange={handleRateOptionChange}
    />
    <label htmlFor={`limited-time-offer-${room.RoomNo}`} className="ml-2">Limited Time Offer With Wellbeing Credits</label>
    <span className="font-semibold">THB {room.RoomType.RoomPrice}</span>
</div>
<div className="flex items-center mb-4">
<input
      id={`best-flexible-${room.RoomNo}`}
      type="radio"
      name={`rate-option-${room.RoomNo}`}
      value="best-flexible"
      className="form-radio h-5 w-5 text-blue-500"
      onChange={handleRateOptionChange}
    />
    <label htmlFor={`best-flexible-${room.RoomNo}`} className="ml-2">Best Flexible With Wellbeing Credits</label> {/* แก้ label เป็นปกติ */}
    <span className="font-semibold">THB {room.RoomType.DefalutRoomPrice}</span>
  </div>
 
</div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">THB {room.RoomType.RoomPrice}</span>
                <button
          onClick={() => toggleCollapse(room.RoomNo)} // ส่ง RoomNo เข้าไปใน toggleCollapse เพื่อระบุห้องที่ต้องการเปิด/ปิด
          className="bg-brown-500 text-white py-2 px-4 rounded-md hover:bg-brown-600 transition-colors duration-300"
        >
          BOOK
        </button>
              </div>
              
              </div>
              
          </div>
          {isOpen === room.RoomNo && (
  <div className=" flex-grow bg-gray-100 rounded-lg p-8 items-center jutify-content " style={{paddingLeft:'10rem', paddingRight:'32rem'}}>
    <div className="mb-4 items-center ">
      <h3 className="text-lg font-semibold text-center">{room.RoomType?.RoomType_name}</h3>
      <div className="flex items-center mt-2">
        <div className="mr-4 flex items-center">
          <svg
            className="h-6 w-6 text-gray-400 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-gray-600">{room.RoomType?.RoomType_guest} People</span>
        </div>
        <div className="mr-4 flex items-center">
        <svg
        className="text-black-200 mr-2"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1.8em"
      width="2em"
      
    >
      <path d="M432 230.7a79.44 79.44 0 00-32-6.7H112a79.51 79.51 0 00-32 6.69A80.09 80.09 0 0032 304v112a16 16 0 0032 0v-8a8.1 8.1 0 018-8h368a8.1 8.1 0 018 8v8a16 16 0 0032 0V304a80.09 80.09 0 00-48-73.3zM376 80H136a56 56 0 00-56 56v72a4 4 0 005.11 3.84A95.5 95.5 0 01112 208h4.23a4 4 0 004-3.55A32 32 0 01152 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h24.46a4 4 0 004-3.55A32 32 0 01304 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h4.2a95.51 95.51 0 0126.89 3.85A4 4 0 00432 208v-72a56 56 0 00-56-56z" />
    </svg>

          <span className="text-gray-600">{room.RoomType?.RoomType_bed}</span>
        </div>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-gray-400 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.447-.894L15 4"
            />
          </svg>
          <span className="text-gray-600">{room.RoomType?.RoomType_size}</span>
        </div>
      </div>
    </div>
    <span className="text-gray-600 text-center jutify-content">{room.RoomType?.RoomTypeDescrip}</span>
    <div className="border border-black p-4 font-sans" style={{width:'40%',marginLeft:'820px',marginTop:'-180px'}}>
  <h3 className="bg-red-600 text-white py-2 px-4 mb-4">Limited Time Offer</h3>
  <div>
    <h4 className="font-bold mb-2">Current Rate Selection</h4>
    <p className="mb-1">Limited Time Offer</p>
    <p className="mb-1">With Wellbeing Credits</p>
    <p className="mb-1">
      THB {selectedRateOption === 'limited-time-offer' ? room.RoomType.RoomPrice : room.RoomType.DefalutRoomPrice} x 1 Night{' '}
      <span className="line-through">THB {room.RoomType.DefalutRoomPrice}</span>
    </p>
    <p className="mb-4">THB {selectedRateOption === 'limited-time-offer' ? room.RoomType.RoomPrice : room.RoomType.DefalutRoomPrice}</p>
    <hr className="border-black mb-4" />
    <p className="mb-1">
      Subtotal <span className="line-through">THB {room.RoomType.DefalutRoomPrice}</span>
    </p>
    <p className="mb-4">THB {selectedRateOption === 'limited-time-offer' ? room.RoomType.RoomPrice : room.RoomType.DefalutRoomPrice}</p>
  </div>
  <Link href="/Bookroom/detailbook" passHref>
  <button className="text-white py-2 px-4" style={{ backgroundColor: '#725a5a' }}>
    ADD ROOM & CHECKOUT
  </button>
</Link>
</div>

    <img src="/assets/image/oc2.png"></img>
    <div className="flex gap-8">
        <h1 className="mb-1" style={{paddingTop:'5rem',fontSize:'1.87rem',fontFamily:'Raleway, Roboto, sans-serif'}}>Enhance Your Stay
  OR
  </h1>
  <div className="" style={{paddingTop:'5rem'}}>

    <button className='text-white py-2 px-4' style={{backgroundColor:'#725a5a'}}>SKIP & CHECKOUT</button>
  </div>
  </div>
  

    <div className="flex gap-16 mb-2 py-8">
      <img src="/assets/image/lob.jpeg" style={{ width: '40%' }}></img>
      <img src="/assets/image/bbq.jpeg" style={{ width: '40%' }}></img>
    </div>
    <div className="flex" style={{ gap: '13em' }}>
      <div>
        <button className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}> ADD ENHANCEMENT</button>
      </div>
      <div>
        <button className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}> ADD ENHANCEMENT</button>
      </div>
      
    </div>
    <div className="flex gap-16 py-3 mb-3">
      <img src="/assets/image/roman.webp" style={{ width: '40%' }}></img>
      <img src="/assets/image/treat.jpeg" style={{ width: '40%' }}></img>
    </div>
    <div className="flex" style={{ gap: '13em' }}>
      <div>
        <button className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}> ADD ENHANCEMENT</button>
      </div>
      
      <div>
        <button className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}>ADD ENHANCEMENT</button>
      </div>
    </div>
  </div>
  
)}



        
        </div>
      ))}
      
    </div>
    
    
  );
          
};


export default List;
