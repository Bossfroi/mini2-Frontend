import React, { useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Signup() {

  const [formData, setFormData] = useState({
    name: '',
    family_name: '',
    email: '',
    picture: 'https://icon-library.com/images/person-icon-png/person-icon-png-1.jpg',
    password: '',
    confirmPassword: ''
    
  });
localStorage.getItem('userDatasss');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      window.alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/SignupRegs/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful registration
      if (response.status === 200) {
        window.alert('Registration successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 flex items-center justify-center mt-2">
        <div className="bg-slate-50 p-8 w-96 shadow-md mt-2">
          <img className="flex-auto" src="/src/assets/components/images/Logo.png" alt="Logo" />
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="block text-dark-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-dark-300 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="family_name" className="block text-dark-600">
                Family Name:
              </label>
              <input
                type="text"
                id="family_name"
                name="family_name"
                value={formData.family_name}
                onChange={handleChange}
                className="w-full p-2 border border-dark-300 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-dark-600">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-dark-300 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-dark-600">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-dark-300 rounded-md"
                required
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="block text-dark-600">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border border-dark-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-sky-600 shadow-lg py-2 px-4 rounded-md hover:bg-red-700">
              Sign Up
            </button>
          </form>
        </div>
      </section>
      <Outlet />
      <Footer/>
    </>
  );
}
