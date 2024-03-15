'use client'

import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Edit = ({ params }: { params: { id: string } }) => {
  const [RoomType_name, setname] = useState('')
  const [RoomType_size, setsize] = useState('')
  const [RoomType_bed , setbed] = useState('')
  const [RoomType_guest, setguest] = useState('')
  const [RoomPrice, setprice] = useState('')
  const [DefalutRoomPrice, setdefalutprice] = useState('')
  const [RoomTypeDescrip, setdescrip] = useState('')
  const router = useRouter()
  const { id } = params

  const fetchPost = async (id: Number) => {
    try {
      const res = await axios.get(`/api/room/${id}`)
      setname(res.data.RoomType_name)
      setsize(res.data.RoomType_size)
      setbed(res.data.RoomType_bed)
      setguest(res.data.RoomType_guest)
      setprice(res.data.RoomPrice)
      setdefalutprice(res.data.DefalutRoomPrice)
      setdescrip(res.data.RoomTypeDescrip)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchPost(parseInt(id))
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.put(`/api/room/${id}`, {
        RoomType_name,
        RoomType_size,
        RoomType_bed,
        RoomType_guest,
        RoomPrice,
        DefalutRoomPrice,
        RoomTypeDescrip,
      })
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Edit EmployeeID {id}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            nametyperoom
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={RoomType_name}
            onChange={(e) => setname(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            sizetyperoom
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={RoomType_size}
            onChange={(e) => setsize(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            bedroomtype
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={RoomType_bed}
            onChange={(e) => setbed(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            guest
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={RoomType_guest}
            onChange={(e) => setguest(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            price
          </label>
          <input
            type="email"
            name="content"
            id="content"
            required
            value={RoomPrice}
            onChange={(e) => setprice(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            defaultprice
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={DefalutRoomPrice}
            onChange={(e) => setdefalutprice(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
    
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit