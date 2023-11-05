import React, { useEffect } from 'react';

export default function Logout() {
  const loginPageURL = '/login';

  const handleLogout = () => {
    window.location.reload();
    localStorage.clear();
    window.location.href = loginPageURL;
  };
  useEffect(() => {
    handleLogout();
  }, []); 

  return <></>;
}
