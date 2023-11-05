//googleauth API decode to mongodb to localstorage.

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // ito ay isang valideted  library
import jwtDecode from 'jwt-decode';// PANG DECODE NG GOOGLE RESPONSE
import { useNavigate } from 'react-router-dom'; // ito ay isang ROUTER para makapag navigate makapunta sa ibang pages
import { useBearStore } from '../Navigation'; // ito ay pang store ng data

export default function GoogleAuth() { 

  const [serverResponse, setServerResponse] = useState(null); // State para sa response mula sa server
  const navigate = useNavigate(); // Hook para sa navigation
  const setIsAuthenticated = useBearStore((state) => state.setIsAuthenticated); // Function para sa pag-set ng authentication status

  // Function para sa successful login
  const handleLoginSuccess = async (credentialResponse) => {
    try {
      // Decode ng response mula sa authentication
      const credentialResponseDecode = jwtDecode(credentialResponse.credential);
      console.log(credentialResponseDecode); // Ipapakita sa console ang decoded response

      const credentialResponseJSON = JSON.stringify(credentialResponseDecode); // I-convert ang decoded response sa JSON string
      console.log(credentialResponseJSON); // Ipapakita sa console ang JSON string ng decoded response

      // I-send ang data sa server para i-authenticate o i-update ang user
      const response = await fetch('http://localhost:5000/authGoogle/addOrUpdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: credentialResponseJSON, // I-send ang JSON string ng decoded response mula sa deneclare sa line20
      });

      if (response.ok) {
        const data = await response.json(); // Kunin ang response mula sa server
        console.log('Server response:', data); // Ipapakita sa console ang response mula sa server
        setIsAuthenticated(true); // I-set ang authentication status
        localStorage.setItem('userData', response); // I-save ang na hook na  user data mula sa mongodb to  localStorage
        setServerResponse(data); // I-set ang server response sa state
        window.alert('Successful Login'); // Magpapakita ng alert para sa successful login
        navigate('/FetchData'); // para makapag direct sa page indikasyon na nakalogin kana so gumamit tayo ng usenavigate mula sa routerdom
        localStorage.setItem('userData', credentialResponseJSON); // I-save ang user data sa localStorage
      } else {
        console.error('Server responded with an error:', response.statusText); // Kung may error sa response mula sa server
      }
    } catch (error) {
      console.error('Error sending data to the server:', error); // Kung may error sa pag-send ng data sa server
    }
  };

  // Function para sa failed login
  const handleLoginError = () => {
    console.error('Login Failed'); // Magpapakita ng error message para sa failed login
  };


  

  return (
    //etong code na ito ay nasa google API lang kinuha ko lng sa kanilang sites
    <>
      {/* Component ng GoogleLogin, gagamitin ang mga functions na ito sa successful at failed login */}
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />

      {/* Ipapakita ang server response kung mayroon para madaling maunawaan ang console */}
      {serverResponse && <div>{JSON.stringify(serverResponse)}</div>}
    </>
  );
}
