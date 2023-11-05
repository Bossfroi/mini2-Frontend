import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";
import backgroundImage from './images/home-page-wallpaper.jpg';
import rent from './images/rent-calculatorButton.jpg';
import shipping from './images/book-nowButton.jpg';
import easy from './images/easy-online-rentals.png';
import supply from './images/supplier-nationwide.png';
import handle from './images/we-handle-everything.png';
import video from './images/homePageVideo.mp4';
import Footer from './Footer';


export default function Home() {
  const bodyStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <>
     <>
<body style={bodyStyles} >

  <div className="flex">
    <div className="bg-red-300 m-5 sm:m-10 max-w-md bg-gradient-to-r from-red-500 to-red-300 p-5 rounded-lg shadow-lg hidden sm:block">
      <ul className="list-disc p-6">
        <h2 className="font-extrabold pb-5 text-2xl sm:text-4xl">Product Line</h2>
        <a href="" className="hover:underline"><li>Air Compressor</li></a>
        <a href="" className="hover:underline"><li>Backhoe</li></a>
        <a href="" className="hover:underline"><li>Backhoe Loader</li></a>
        <a href="" className="hover:underline"><li>Boom Truck</li></a>
        <a href="" className="hover:underline"><li>Crane</li></a>
        <a href="" className="hover:underline"><li>Excavator</li></a>
        <a href="" className="hover:underline"><li>Forklift</li></a>
        <a href="" className="hover:underline"><li>Generator</li></a>
        <a href="" className="hover:underline"><li>Grader</li></a>
        <a href="" className="hover:underline"><li>Hydraulic Breaker</li></a>
        <a href="" className="hover:underline"><li>Light Tower</li></a>
        <a href="" className="hover:underline"><li>Manlift</li></a>
        <a href="" className="hover:underline"><li>Road Roller</li></a>
        <a href="" className="hover:underline"><li>Scissor Lift</li></a>
        <a href="" className="hover:underline"><li>Skid Steer Loader</li></a>
        <a href="" className="hover:underline"><li>Telehandler</li></a>
        <a href="" className="hover:underline"><li>Telescopic Clamshell</li></a>
        <a href="" className="hover:underline"><li>Wheel Loader</li></a>
        <a href="" className="hover:underline"><li>Auger Drill</li></a>
        <a href="" className="hover:underline"><li>Trencher</li></a>
      </ul>
    </div>
    <div className="w-full sm:w-1/2 m-5 sm:m-10 space-y-5 sm:space-y-20">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-500 leading-tight mb-4">
        Building Dreams with Quality Rentals.
      </h1>
      <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-red-300 leading-relaxed mb-6">
        From the foundation of your dreams to the towering heights of your ambitions, our extensive selection of top-quality construction equipment rentals is here to provide you with the tools, support, and reliability you need. We're more than just equipment.
      </p>
      <div className="flex space-x-4">
        <a
      href="./Signup"
      className="px-3 py-2 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:from-red-600 hover:to-red-700 hover:shadow-lg transition duration-300">
      <button className="text-sm sm:text-base">Sign-up For Free</button>
    </a>
    <a
      href="./ContactUs"
      className="px-3 py-2 text-red-500 border border-red-500 rounded-full hover:bg-red-100 hover:text-red-600 hover:border-red-600 hover:shadow-lg transition duration-300">
      <button className="text-sm sm:text-base">Questions? We Can Help</button>
    </a>
      </div>
    </div>
  </div>

<div>
<div className="bg-gray-200 py-8">
  <div className="container mx-auto">
    <div className="flex flex-col sm:flex-row pt-8 pb-8">
      <div className="m-2 sm:w-1/2">
        <div className="relative h-72">
          <img
            src={rent}
            alt="Rent Calculator"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 sm:p-8">
            <a href="./RentCalculator">
              <button className="w-full sm:w-48 h-12 text-white font-semibold bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg transition-transform transform hover:scale-105">
                Rent Calculator
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="m-2 sm:w-1/2">
        <div className="relative h-72">
          <img
            src={shipping}
            alt="Shipping Fee Calculator"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 sm:p-8">
            <a href="./ShippingCalculator">
              <button className="w-full sm:w-48 h-12 text-white font-semibold bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg transition-transform transform hover:scale-105">
                Shipping Fee Calculator
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="bg-gray-300 py-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
      <div className="m-2">
        <div className="bg-gray-800 p-6 h-auto rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 flex">
            <span className="logo">
              <img
                src={easy}
                alt="Your Logo"
                className="h-8 w-8 mr-2"
              />
            </span>
            Easy Online Rentals
          </h2>
          <p className="text-base leading-relaxed text-justify">
            Rent without the hassle of a phone call. Place, view, and manage your orders anytime, through any device using our online portal.
          </p>
        </div>
      </div>
      <div className="m-2">
        <div className="bg-gray-800 p-6 h-auto rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 flex">
            <span className="logo">
              <img
                src={supply}
                alt="Your Logo"
                className="h-8 w-8 mr-2" 
              />
            </span>
            Supplier Nationwide
          </h2>
          <p className="text-base leading-relaxed text-justify">
            As a construction rental company, we offer nationwide access to top-quality equipment and machinery, ensuring reliable support for projects.
          </p>
        </div>
      </div>
      <div className="m-2">
        <div className="bg-gray-800 p-6 h-auto rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-700 flex">
            <span className="logo">
              <img
                src={handle}
                alt="Your Logo"
                className="h-8 w-8 mr-2" 
              />
            </span>
            We Handle Everything
          </h2>
          <p className="text-base leading-relaxed text-justify">
            We handle everything – from equipment delivery and setup to maintenance, so you can focus on your construction project with peace of mind.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>




  <div className="bg-gray-200 py-8">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center p-4 lg:p-8  ">
        <div className="w-full md:w-1/2 p-4 bg-gray-800 p-6 md:p-8 h-auto rounded-lg shadow-md text-white">
          <p className="text-base md:text-xl leading-7">
            Welcome to [Equipment Rentals], your one-stop destination for everything related to construction materials. In this insightful video, we delve deep into the world of construction, uncovering the building blocks of your dream projects.
          </p>
          <br /><br />
          <p className="text-base md:text-xl leading-7">
            At [Equipment Rentals], we are passionate about construction and dedicated to sharing our expertise with you. Explore our video library and embark on a journey of discovery, where every video offers a wealth of information, inspiration, and solutions.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
        <div className="relative h-80">
          <video
            className="w-full h-96 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        </div>
      </div>
    </div>
  </div>


  
</div>

</body>
<Footer/>
     </>
    <Outlet/>
    </>
  )
}
