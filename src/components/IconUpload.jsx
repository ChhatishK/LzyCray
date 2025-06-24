// File: IconUpload.jsx
// Description: Icon upload button component
// Author: Shally Jha
// Created: June 2025

/**
 * Icon upload button.
 * @param {function} onUpload - Handler for icon upload
 * @returns {JSX.Element}
 */
const IconUpload = ({ onUpload }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Icon</label>
      <button
        className="w-12 h-12 flex items-center justify-center border rounded bg-gray-100 hover:bg-gray-200 transition-all"
        onClick={onUpload}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
};

export default IconUpload; 