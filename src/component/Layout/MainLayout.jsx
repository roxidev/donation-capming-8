import React from 'react';
import Navber from '../Header/Navber/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
