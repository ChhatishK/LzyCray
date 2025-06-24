// File: LogoPage.jsx
// Description: Logo management page (matches screenshot)
// Author: Shally Jha
// Created: June 2025

import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import Category from '../layout/Category';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';

/**
 * Logo management page layout (matches screenshot).
 * @returns {JSX.Element}
 */
const Dashboard = () => {
  const location = useLocation().pathname?.split("/")[2]?.toLowerCase();
  console.log(location)

  return (
    <div className="relative flex h-screen bg-gray-50">
      <Sidebar />
      <div className="h-full flex-1 overflow-auto">
        <div className="mx-auto w-10/12 max-w-[calc(100wh-16rem)] mt-30">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Dashboard; 