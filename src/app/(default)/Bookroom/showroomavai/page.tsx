'use client'
import React, { useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

const List = () =>{
    const [roomType, showroomtype] = useState([])
    const fetchPosts = async () => {
        try{
            const response = await axios.get('/api/room')
            showroomtype(response.data)
        }catch(error){
            console.log('error',error)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div>
 
        
       
        {roomType.map((roomType: any) => (
            
            <tr key={roomType.RoomType_Id}>
               <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-red-700 text-white font-bold px-4 py-2">Limited Time Offer</div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <img
            src="/assets/image/r1.png"
            alt="Ocean View Pool Junior Suite"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="w-1/2 p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold">{roomType.RoomType_name}</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full">Best Deal</span>
          </div>
          <div className="flex mb-2">
            <div className="mr-4">
              <i className="fas fa-user mr-2"></i>
              <span>{roomType.RoomType_guest}</span>
            </div>
            <div className="mr-4">
              <i className="fas fa-bed mr-2"></i>
              <span>{roomType.RoomType_bed}</span>
            </div>
            <div>
              <i className="fas fa-square-full mr-2"></i>
              <span>135 m² / 1453 ft²</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            The Ocean View Pool Junior Suites are situa.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            View Room Details And Enhancements
          </a>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <span className="text-sm mr-2">Limited Time Offer With Wellbeing Credits</span>
              <span className="text-xl font-bold">THB 48,214.18</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-sm mr-2">Best Flexible With Wellbeing Credits</span>
              <span className="text-xl font-bold">THB 36,160.64</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold">THB 31,339.22</span>
            <button className="bg-brown-500 text-white px-4 py-2 rounded-lg">BOOK</button>
          </div>
        </div>
      </div>
    </div>
            </tr>
           
    ))}
         </div>
    
        
      );

};
export default List