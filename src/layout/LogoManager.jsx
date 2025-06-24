import React, { useState } from 'react';

export default function LogoManager() {
  const [logo, setLogo] = useState(null);
  const [icon, setIcon] = useState(null);
  const [location, setLocation] = useState("311, Block 2, Sector 29 Noida Uttar Pradesh");

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
      console.log("Logo updated:", file.name);
    }
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(URL.createObjectURL(file));
      console.log("Icon updated:", file.name);
    }
  };

  const handleSave = () => {
    alert("Changes saved!");
    console.log("Location:", location);
    console.log("Logo File:", logo);
    console.log("Icon File:", icon);
  };

  return (
    <div className="p-8 w-[70%] mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Logo Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 
        <div className="flex flex-col items-center">
          <img
            src={logo || '/default-logo.png'}
            alt="Logo"
            className="w-32 h-32 object-contain border rounded"
          />
          <label className="mt-2 cursor-pointer text-blue-600 hover:underline">
            Change
            <input type="file" accept="image/*" onChange={handleLogoChange} className="hidden" />
          </label>
        </div>

        <div className="col-span-2">
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={handleSave}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
