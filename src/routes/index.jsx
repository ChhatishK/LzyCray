// File: routes/index.jsx
// Description: App routes setup using React Router v6
// Author: Shally Jha
// Created: June 2025

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Banner from '../layout/BannerManager';
import CategoryList from '../layout/CategoryList';
import Category from '../layout/Category';
import LogoManager from '../layout/LogoManager';

/**
 * AppRoutes sets up all application routes.
 * @returns {JSX.Element}
 */

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} >
        <Route path='/my-adds-shop/banner' element={<Banner />} />
        <Route path='/my-adds-shop/logo' element={<LogoManager />} />
        <Route path='/my-adds-shop/category' element={<CategoryList />} />
        <Route path='/my-adds-shop/card' element={<Category />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 