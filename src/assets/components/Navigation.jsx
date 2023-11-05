import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Logo1.png';


import { create } from 'zustand';
const useBearStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
const localstorage = () => {
//kung si local storage ay may laman then yung navigator ay walang home at mag kakaroon ng logout
//kung false naman walang magging changes
  if (localStorage.getItem('userData') === "true") {
    useBearStore.getState().setIsAuthenticated(true);
  }
}
export { useBearStore };


export default function Navigation() {
  const isAuthenticated = useBearStore((state) => state.isAuthenticated);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavMenu = [
    
    {
      Title: isAuthenticated ? 'Dashboard' : 'Contactus',
      Link: isAuthenticated ? '/Dashboard' : '/Contactus',
    },
    {
      Title: isAuthenticated ? 'Rent' : 'Services',
      Link: isAuthenticated ? '/Categories' : '/Home',
    },
  
    {
      Title: isAuthenticated ? 'CartItem' : 'About',
      Link: isAuthenticated ? '/cart' : '/About',
    },
    {
      Title: 'News',
      Link: '/News',
    },
    {
      Title: isAuthenticated ? 'Logout' : 'Login',
      Link: isAuthenticated ? '/logout' : '/login',
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
     
      <header className="bg-opacity-90 bg-stone-950 p-4">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/login" className="text-white text-2xl font-bold">
              <img src={logo} className="w-35 h-10" alt="Logo" />
            </Link>
            <div className="hidden md:flex space-x-4">
              {NavMenu.map((item) => (
                <Link to={item.Link} key={item.Link} className="text-sky-200 hover:text-red-700">
                  {item.Title}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-sky-200 hover:text-red-700">
                ☰
              </button>
            </div>
          </div>
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-2 mt-2">
              
              {NavMenu.map((item) => (
                <Link
                  to={item.Link}
                  key={item.Link}
                  className="text-sky-200 hover:text-red-700"
                  onClick={toggleMobileMenu}
                >
                  {item.Title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
