// File: Header.jsx
// Description: Top header bar component
// Author: Shally Jha
// Created: June 2025

/**
 * Top header bar for dashboard.
 * @returns {JSX.Element}
 */
const Navbar = () => {
  return (
    <header className="z-10 fixed w-full flex items-center justify-between h-16 px-6 bg-white border-b-2 border-gray-400 shadow-sm">
      <div className="flex items-center h-16 px-6">
        {/* <img src="/logo192.png" alt="LzyCrazy Logo" className="h-8 mr-2" /> */}
        <span className="font-bold text-lg text-blue-700">LzyCrazy</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-home"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-th"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-play"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-database"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-key"></i></button>
      </div>
      <div className="flex-1 flex justify-center">
        <input type="text" placeholder="Search LzyCrazy..." className="w-80 px-4 py-1 rounded bg-gray-100 border border-gray-200 focus:outline-none" />
      </div>
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1 text-gray-700"><i className="fas fa-user"></i> <span>Test</span></span>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-users"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-bell"></i></button>
        <button className="text-gray-400 hover:text-blue-600"><i className="fas fa-cog"></i></button>
      </div>
    </header>
  );
};

export default Navbar; 