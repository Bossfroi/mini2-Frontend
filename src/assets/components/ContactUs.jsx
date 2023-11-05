import React from 'react'
import { Outlet } from "react-router-dom";
import logo from './images/Logo.png';

export default function ContactUs() {
  return (
   <>
   <div className="max-w-lg mx-auto p-6 rounded-lg shadow-md bg-white">
   <img 
   className="flex-auto " 
   src={logo} 
   alt="Logo" />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message:</label>
          <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
      </form>
    </div>
    <Outlet/>
   </>
  )
}
