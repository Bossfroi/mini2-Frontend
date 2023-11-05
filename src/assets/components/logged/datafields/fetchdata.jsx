import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FetchData() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  // useEffect for fetching user data from local storage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem('userData');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUserData(parsedUser);
          // You can set formData here if it's defined elsewhere.
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  const [userData1, setUserData1] = useState();

  // useEffect for fetching user data from local storage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData1 = localStorage.getItem('userData1');
        if (userData1) {
          const parsedUser1 = JSON.parse(userData1);
          setUserData1(parsedUser1);
          // You can set formData here if it's defined elsewhere.
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  // useEffect for sending user data to the server and navigating to another route
  useEffect(() => {
    if (userData) {
      const data = {
        email: userData.email,
        companyname: 'Required',
        companyaddress: 'Required',
        businesstype: 'Required',
        companynumber: 'Required',
        CreditCard: 'Required',
      };

      axios
        .post('https://mini2-frontend.onrender.com/data/addOrUpdateUserdata', data)
        .then((response) => {
          localStorage.setItem('userData1', JSON.stringify(response.data));
          // Navigate to the '/Categories' route after a successful response
          navigate('/Categories');
        })
        .catch((error) => {
          console.error('Error sending user data:', error);
        });
    }
  }, [userData, navigate]);

  return (
    <div>
      {/* You can render some loading indicator here if needed */}
    </div>
  );
}
