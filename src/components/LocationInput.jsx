// File: LocationInput.jsx
// Description: Location input field component
// Author: Shally Jha
// Created: June 2025

/**
 * Location input field.
 * @param {string} value - Location value
 * @param {function} onChange - Handler for input change
 * @returns {JSX.Element}
 */
const LocationInput = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Location</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
        placeholder="Enter location"
      />
    </div>
  );
};

export default LocationInput; 