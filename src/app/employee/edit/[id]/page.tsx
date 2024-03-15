'use client'

import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Edit = ({ params }: { params: { id: string } }) => {
  const [Emfname, setFirstname] = useState('')
  const [Emlname, setLastname] = useState('')
  const [Gender , setGender] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')
  const [Email, setEmail] = useState('')
  const [Salary, setSalary] = useState('')
  const [Password, setPassword] = useState('')
  const router = useRouter()
  const { id } = params

  const fetchPost = async (id: Number) => {
    try {
      const res = await axios.get(`/api/admin/${id}`)
      setFirstname(res.data.Emfname)
      setLastname(res.data.Emlname)
      setGender(res.data.Gender)
      setPhoneNo(res.data.PhoneNo)
      setEmail(res.data.Email)
      setSalary(res.data.Salary)
      setPassword(res.data.Password)
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
      await axios.put(`/api/admin/${id}`, {
        Emfname,
        Emlname,
        Gender,
        PhoneNo,
        Email,
        Salary,
        Password,
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
            Firstname
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={Emfname}
            onChange={(e) => setFirstname(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Lastname
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={Emlname}
            onChange={(e) => setLastname(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            PnoneNumber
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={PhoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="content"
            id="content"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Salary
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={Salary}
            onChange={(e) => setSalary(e.target.value)}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
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