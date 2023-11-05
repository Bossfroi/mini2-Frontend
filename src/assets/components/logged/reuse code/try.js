import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from '../logged/datafields/inputfields-userdatamongodb';
import Show from '../images/mediaLogo/show.png';
import Hide from '../images/mediaLogo/hide.png';

const HomeLogged = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    companyname: '',
    companyaddress: '',
    businesstype: '',
    companynumber: '',
  });
  const [isContentVisible, setContentVisibility] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem('userData');
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

  // MongoDB API Fetch
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data/view');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/data/addOrUpdateUserdata',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        window.alert('Successfully Saved');
        localStorage.setItem('userData1', JSON.stringify(formData));
        console.log(formData);
      } else {
        window.alert('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while saving your data.');
    }
  };

  return (
    <div className="w-full md:w-3/3 p-4 md:p-1 justify-center text-center flex">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
        {userData && (
          <>
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              Welcome, {userData.name}
            </h1>
            <p className="text-sm text-gray-700">Sign in as {userData.email}</p>
            <img src={userData.picture} alt="" className="h-8 w-8 mx-auto" />
          </>
        )}

        <h1>Please set up your details</h1>
        <div onClick={() => setContentVisibility(!isContentVisible)}>
          {isContentVisible ? (
            <img src={Hide} alt="" className="h-7 w-7 cursor-pointer" />
          ) : (
            <img src={Show} alt="" className="h-7 w-7 cursor-pointer" />
          )}
        </div>
        {isContentVisible && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {data.map((item) => (
              <div key={item.email}>
                <input
                  type="hidden"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Your Company"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  placeholder={item.companyname}
                />
                <InputField
                  label="Your Address"
                  name="companyaddress"
                  value={formData.companyaddress}
                  onChange={handleChange}
                  placeholder={item.companyaddress}
                />
                <InputField
                  label="Your Type of Business"
                  name="businesstype"
                  value={formData.businesstype}
                  onChange={handleChange}
                  placeholder={item.businesstype}
                />
                <InputField
                  label="Your Company Number"
                  name="companynumber"
                  value={formData.companynumber}
                  onChange={handleChange}
                  placeholder={item.companynumber}
                />
              </div>
            ))}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default HomeLogged;
