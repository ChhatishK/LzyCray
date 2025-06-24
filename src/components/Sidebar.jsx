// File: Sidebar.jsx
// Description: Sidebar navigation component with collapsible 'My Adds Shop'
// Author: Shally Jha
// Created: June 2025

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Sidebar navigation for dashboard with collapsible section.
 * @returns {JSX.Element}
 */
const Sidebar = () => {
  const [addsOpen, setAddsOpen] = useState(true);
  const location = useLocation();

  return (
    <aside className="fixed w-64 bg-white h-full border-r-2 border-gray-400 shadow-md hidden lg:flex flex-col mt-16">
      
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1 text-gray-700 text-sm">
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">
            <Link to="/" className={location.pathname === '/' ? 'text-blue-700 font-semibold' : ''}>Dashboard</Link>
          </li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Category</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Address</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Shop</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Post</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Products</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Client Enquiry</li>
          <li className="py-2 pl-2 hover:bg-gray-100 rounded cursor-pointer">Join Team</li>
          <li className="mt-4 text-xs text-blue-700 font-semibold cursor-pointer flex items-center justify-between" onClick={() => setAddsOpen(v => !v)}>
            <span>My Adds Shop</span>
            <svg className={`w-4 h-4 ml-2 transition-transform ${addsOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </li>
          {addsOpen && (
            <ul className="ml-4">
              <li className={`py-2 pl-4 rounded cursor-pointer ${location.pathname === '/my-adds-shop/logo' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
                <Link to="/my-adds-shop/logo">Logo</Link>
              </li>
              <li className={`py-2 pl-4 rounded cursor-pointer ${location.pathname === '/my-adds-shop/banner' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
                <Link to="/my-adds-shop/banner">Banner</Link>
              </li>
              <li className={`py-2 pl-4 rounded cursor-pointer ${location.pathname === '/my-adds-shop/category' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
                <Link to="/my-adds-shop/category">Category</Link>
              </li>
              <li className={`py-2 pl-4 rounded cursor-pointer ${location.pathname === '/my-adds-shop/card' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
                <Link to="/my-adds-shop/card">Card</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 