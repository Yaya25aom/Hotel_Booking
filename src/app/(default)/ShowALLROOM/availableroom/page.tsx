'use client'
import { db } from "@/lib/db";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { NextResponse } from "next/server";

const List = () => {
  const [room, setroom] = useState([])

  const fetchPosts = async () => {
    try{
      const response = await axios.get('/api/statusroom')
      setroom(response.data)
    }catch(error){
      console.log('error', error)
    }
  }

      useEffect(() => {
        fetchPosts()
      }, [])
    

  function deleteEmployee(id: any): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="max-w-6xl mx-auto px-4"  style={{ paddingTop: '8rem' }}>
        
      <h1 className="text-2xl font-semibold mb-6">ROOMAVAILABLE</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="" style={{backgroundColor: '#bcb4ff'}}>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{color:'#000'}}
              >
                room_no
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"style={{color:'#000'}}
              >
                status_room
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"style={{color:'#000'}}
              >
                type_room
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"style={{color:'#000'}}
              >
                room_price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"style={{color:'#000'}}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {room.map((room: any) => (
            
            
              <tr key={room.RoomNo}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {room.RoomNo}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
  <div className="text-sm font-medium text-gray-900 bg-green-500 rounded-full">
                    {(room.Status as boolean) ? 'Active' : 'Inactive'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {room.RoomType.RoomType_name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {room.RoomType.RoomPrice}
                  </div>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee.Gender}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee.PhoneNo}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee.Email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee.Password}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {employee.Salary}
                  </div>
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    href={`/ShowALLROOM/editroom/${room.RoomNo}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(room.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
))}
          </tbody>
        </table>
      </div>
      <Link
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="/employee/create"
      >
        Create a New ROOM
      </Link>
    </div>
  )
}

export default List;