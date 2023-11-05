import React from 'react'
import Navigation from './Navigation'
import FacebookSVG from './images/mediaLogo/facebook.png'
import InstagramSVG from './images/mediaLogo/instagram.png'
import LinkedinSVG from './images/mediaLogo/linkedin.png'
import TwitterSVG from './images/mediaLogo/twitter.png'
import FooterLogo from './images/Logo.png'
import { Outlet } from "react-router-dom";

function Footer() {
    return (
<footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <img src={FooterLogo} alt="Footer Logo" className="mx-auto md:mx-0" />
            <p className="mt-2">123 Main Street, City</p>
            <p>contact@company.com</p>
            <p className="mt-4">Your Trusted Partner in Construction Rentals</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-2">
              <li><a href="/Home" className="hover:underline">Home</a></li>
              <li><a href="/About" className="hover:underline">About Us</a></li>
              <li><a href="/Categories" className="hover:underline">Services</a></li>
              <li><a href="/ContactUs" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Social Media</h3>
            <ul className="list-disc">
              <li className="flex items-center mb-2">
                <img src={FacebookSVG} alt="Facebook" className="w-6 h-6 mr-2" />
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="flex items-center mb-2">
                <img src={TwitterSVG} alt="Twitter" className="w-6 h-6 mr-2" />
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="flex items-center mb-2">
                <img src={LinkedinSVG} alt="LinkedIn" className="w-6 h-6 mr-2" />
                <a href="#" className="hover:underline">LinkedIn</a>
              </li>
              <li className="flex items-center mb-2">
                <img src={InstagramSVG} alt="Instagram" className="w-6 h-6 mr-2" />
                <a href="#" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-2">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="mt-2">
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 text-white"
                placeholder="Your Email"
              />
              <button
                className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>

    );
  }
  
  export default Footer;

