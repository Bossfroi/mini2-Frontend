import React, { useState } from 'react';
import GoogleAuth from './API/GoogleAuth'; // Import ang Google authentication component
import { useNavigate } from 'react-router-dom';
import { useBearStore } from './Navigation'; // Import ng custom hook para sa navigation ng authentication
import axios from 'axios'; // Import ng Axios para sa HTTP requests
import logo from './images/Logo.png';
import Footer from './Footer';
import Signup from './Signup';

export default function Login() {
  const navigate = useNavigate(); // Hook para sa navigation
  const setIsAuthenticated = useBearStore((state) => state.setIsAuthenticated); // Function para sa pag-set ng authentication status

  const [formData, setFormData] = useState({ // para sa form data na finilupan ng user
    email: '',
    password: '',
  });

  // Function para sa pag-update ng form data kapag may pagbabago sa mga input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function para sa pag-submit ng login form
  const handleSubmit = async (e) => {
    e.preventDefault();  // pag pigil para sa pag susubmit ng walangdata so babalik sya sa login 

    try {
      const response = await axios.post('https://mini2-frontend.onrender.com/login', formData);   // set response mula para sa localhost kung nasaan ung ginawang function ng serverside

      if (response.status === 200) {
        setIsAuthenticated(true); // I-set ang authentication status para sa navigation para mag bago ang linking
        // I-save ang user data sa localStorage
        localStorage.setItem('userData', JSON.stringify(response.data));
        navigate('/Categories'); // I-navigate ang user sa Dashboard page pag nakapasok na ang data mula sa filupform
        alert('Login Successful'); // Magpapakita ng alert para sa successful login
      } else {  //  para ma fiter if may mali ba sa response ng pag fifilup
        const errorData = await response.data;
        console.error('Login failed:', errorData.error);
        alert('Wrong Email and password'); // Magpapakita ng alert para sa failed login
      }
    } catch (error) {
      console.error('An error occurred', error);
      alert('Wrong Email and password'); // Magpapakita ng alert para sa server error
    }
  };

  return (
    <section className="bg-gray-100 flex items-center justify-center mt-2">
      <div className="bg-slate-50 p-8 w-96 shadow-md mt-2 justify-center">
        <img className="flex-auto" src={logo} alt="Logo" />
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-dark-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="on"
              className="w-full p-2 border border-dark-300 rounded-md"
              value={formData.email}
              onChange={handleInputChange} // I-link ang input field sa function para sa pag-update ng data
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-dark-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="on"
              className="w-full p-2 border border-dark-300 rounded-md"
              value={formData.password}
              onChange={handleInputChange} // I-link ang input field sa function para sa pag-update ng data
            />
          </div>
          <button type="submit" className="bg-sky-600 hover:bg-red-700 shadow-lg py-2 px-4 rounded-md">
            Login
          </button>

          {/* Magdagdag ng mga Facebook at Google login components dito */}
        
          <div className="mt-2 ml-14">
            <GoogleAuth /> {/* I-load ang Google authentication component */}
            <br />
            <a href={'/Signup'}className="bg-sky-600 hover:bg-red-700 shadow-lg py-1 px-10 rounded-md ">
              Sign-up Manually
            </a>
          </div>
        </form>
      </div>
    </section>
    
  );
}
