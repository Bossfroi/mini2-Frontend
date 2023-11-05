import React from 'react'
import { Outlet } from "react-router-dom";
import truck from './images/aboutTruck.jpg';
import hero from './images/hero1.jpg';
import Footer from './Footer';

export default function About() {
  return (
   <>
    
    <div className="relative">
  <img
    src={hero}
    alt=""
    className="w-full h-auto filter blur-sm"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 text-white">
    <p className="p-2 text-sm xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center leading-snug xxs:p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      Empowering Construction Excellence Through Premium Rentals Your Trusted Resource for Quality Equipment and Tools. Build Smarter, Build Faster with Our Unmatched Rental Solutions.
    </p>
  </div>
</div>



    
    <div className="container mx-auto p-7 bg-red-200">
    <h1 className="text-3xl font-bold mb-4">Our Core Pillars</h1>

    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 p-20 bg-red-300">
        <h2 className="text-xl font-bold">Quality Equipment and Tools:</h2>
        <p>Offering a comprehensive and high-quality inventory of construction equipment and tools is one of the most critical pillars. This includes construction machinery, power tools, vehicles, safety equipment, and more. Ensuring that the equipment is well-maintained, up-to-date, and reliable is essential for meeting the needs of construction professionals.</p>
      </div>

  
      <div className="w-full md:w-1/2 lg:w-1/3 p-20 mt-4 md:mt-0 bg-red-400">
        <h2 className="text-xl font-bold">Availability and Accessibility:</h2>
        <p>Availability and accessibility are key factors in the construction rentals business. Having a wide range of equipment available for rent and ensuring that it is readily accessible to customers is crucial. This includes having multiple rental locations, an efficient reservation and pickup system, and a responsive customer support team to assist with inquiries and bookings.</p>
      </div>

  
      <div className="w-full md:w-1/2 lg:w-1/3 p-20 mt-4 md:mt-0 bg-red-500">
        <h2 className="text-xl font-bold">Customer Service and Support:</h2>
        <p>Exceptional customer service and support are vital for building long-lasting relationships with construction industry professionals. Providing expert advice on equipment selection, training and technical assistance, flexible rental terms, and responsive support for maintenance and repairs are all critical aspects of this pillar.</p>
      </div>
    </div>
  </div>

  <br /><br /><br />
    
<div className="flex">
  
  <div className="w-1/2 p-4">
    <img 
    src={truck} 
    alt=""
    className='rounded-lg'
    />
  </div>
     
  <div className="w-1/2 p-4">
    <div className="bg-red-600 rounded-lg p-10">
        <h2 className="text-3xl font-extrabold text-white mb-4 border-b-4 border-yellow-300 pb-2">Our Business</h2>
        <p className="text-white">
        At Construction Rentals Excellence, we're dedicated to empowering the construction industry with premium rental solutions. With a rich inventory of top-quality equipment and tools, we serve as your trusted resource for all your construction needs. From heavy machinery to power tools and safety equipment, our comprehensive range ensures that you have access to the best tools in the business. We take pride in our commitment to excellence, offering equipment that is well-maintained and reliable. Our mission is to help you build smarter and faster, ensuring unmatched rental solutions that propel your projects to success. With our exceptional customer service, accessibility, and unwavering dedication, we're your partner in construction excellence.
      </p>
    </div>
  </div>
</div>
    <Footer/>
    <Outlet/>
   </>
  )
}
