// File: Button.jsx
// Description: Reusable button component
// Author: Shally Jha
// Created: June 2025

/**
 * Reusable Button component.
 * @param {string} label - Button text
 * @param {function} onClick - Click handler
 * @param {string} type - Button type
 */
const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
    >
      {label}
    </button>
  );
};

export default Button; 