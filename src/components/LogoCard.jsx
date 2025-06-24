// File: LogoCard.jsx
// Description: Logo upload and display card component
// Author: Shally Jha
// Created: June 2025

/**
 * Logo upload and display card.
 * @param {string} logoUrl - Logo image URL
 * @param {function} onChange - Handler for logo change
 * @returns {JSX.Element}
 */
const LogoCard = ({ logoUrl, onChange }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-80">
      <div className="w-full flex flex-col items-center">
        <img
          src={logoUrl || 'https://via.placeholder.com/200x120?text=Logo'}
          alt="Logo"
          className="w-48 h-28 object-contain rounded border mb-2"
        />
        <button
          className="w-full py-2 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition-all"
          onClick={onChange}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default LogoCard; 