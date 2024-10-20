import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

export const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <Header />}
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};
