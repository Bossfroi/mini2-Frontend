import React, { useState, useEffect } from 'react';


export default function HomeLogedcopy() {

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem('aa');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUserData(parsedUser);
          setFormData((prevData) => ({ ...prevData, email: parsedUser.email }));
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };
    fetchUserData();
  }, []);
  


  const [formData, setFormData] = useState(() => {
  
    return savedData ? JSON.parse(savedData) : {
      name: '',
      family_name: '',
      email: '',
      picture: 'https://icon-library.com/images/person-icon-png/person-icon-png-1.jpg',
      password: '',
      confirmPassword: ''
    };
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    localStorage.setItem('aa', JSON.stringify(updatedData));
  };

  return (
    
    <section className="bg-gray-100 flex items-center justify-center mt-2">
      <div className="bg-slate-50 p-8 w-96 shadow-md mt-2">
        <img className="flex-auto" src="/src/assets/components/images/Logo.png" alt="Logo" />
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <h1>{}</h1>
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
          <button type="submit" className="bg-sky-600 shadow-lg py-2 px-4 rounded-md hover-bg-red-700">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
  
}
