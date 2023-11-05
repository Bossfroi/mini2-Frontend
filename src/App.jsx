import React from 'react';
import AppRouter from './assets/components/route/AppRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Outlet } from "react-router-dom";


const APICLIENTID = "395663339309-7ti4lpgi189j9ki7l0ohnpuevj9q6lsa.apps.googleusercontent.com";

export default function App() {
  return (
    <GoogleOAuthProvider clientId={APICLIENTID}>
      <AppRouter />
    </GoogleOAuthProvider>
    
  );
}
