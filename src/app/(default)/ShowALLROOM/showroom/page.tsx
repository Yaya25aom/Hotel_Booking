'use client'
import { db } from "@/lib/db";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { NextResponse } from "next/server";

const List = () => {
  const [roomType, setroomtype] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchPosts = async () => {
    try{
      const response = await axios.get('/api/room')
      setroomtype(response.data)
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
    <div className="max-w-6xl mx-auto px-4 py-8"  style={{ paddingTop: '8rem'}}>
       <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 4.5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 100 2h14a1 1 0 100-2H3zm-1 4.5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>MENU</span>
        </button>
        {/* Dropdown Content */}
        {dropdownOpen && (
          <div className="absolute left-0 mt-1  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{backgroundColor:'#ffcfcf'}}>
            {/* Dropdown Items */}
            <div className="grid py-3 mb-5 gap-3 px-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link href="/ShowALLROOM/showroom">MANAGE TYPEROOM</Link>
              <Link href="/ShowALLROOM/availableroom">MANGE ROOM</Link>
              <Link href="/employee/show">MANGE ACCOUNT</Link>
            </div>
          </div>
        )}
        </div>
      <h1 className="text-2xl font-semibold mb-6">Data ROOMTYPE</h1>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200" >
          <thead className="" style={{backgroundColor: '#bcb4ff'}}>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  style={{color:'#000'}}
              >
                roomtypeID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  style={{color:'#000'}}
              >
                nameroomtype
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  style={{color:'#000'}}
              >
                sizeroomtype
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  style={{color:'#000'}}
              >
                bedroomtype
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"  style={{color:'#000'}}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roomType.map((roomType: any) => (
            
            
              <tr key={roomType.RoomType_Id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {roomType.RoomType_Id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {roomType.RoomType_name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {roomType.RoomType_size}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {roomType.RoomType_bed}
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
                    href={`/ShowALLROOM/editroom/${roomType.RoomType_Id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(roomType.id)}
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