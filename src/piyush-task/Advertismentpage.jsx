import React, { useState } from "react";
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry"
];

const stateCityMap = {
  "Jharkhand": ["Barhi", "Ranchi", "Dhanbad"],
  "Uttar Pradesh": ["Lucknow", "Varanasi"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
};
const AdvertismentForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    title: "",
    description: "",
    price: "",
    photos: Array(12).fill(null),
    state: "",
    city: "",
    neighborhood: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMultiplePhotos = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = [...formData.photos];
    let added = 0;

    for (let i = 0; i < newPhotos.length && added < files.length; i++) {
      if (!newPhotos[i]) {
        newPhotos[i] = files[added];
        added++;
      }
    }

    setFormData({ ...formData, photos: newPhotos });
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = [...formData.photos];
    newPhotos[index] = null;
    setFormData({ ...formData, photos: newPhotos });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl mx-auto space-y-6 border border-gray-300 rounded-md bg-white shadow-sm"
    >
      <div>
        <h2 className="text-lg font-semibold">SELECTED CATEGORY</h2>
        <p className="text-sm text-blue-900 cursor-pointer">
          Mobiles / Mobile Phones <span className="underline text-blue-600">Change</span>
        </p>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="space-y-4">
        <h3 className="font-semibold">INCLUDE SOME DETAILS</h3>

        <div>
          <label className="block font-medium">Brand<span className="text-red-500">*</span></label>
          <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full border p-2 rounded">
            <option value="">Select Brand</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Redmi">Redmi</option>
            <option value="Realme">Realme</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Ad title<span className="text-red-500">*</span></label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Ad title"
            maxLength={70}
            className="w-full border p-2 rounded"
          />
          <div className="text-xs text-gray-500 mt-1 flex justify-between">
            <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
            <span>{formData.title.length}/70</span>
          </div>
        </div>

        <div>
          <label className="block font-medium">Description<span className="text-red-500">*</span></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            maxLength={4300}
            className="w-full border p-2 rounded h-24"
          />
          <div className="text-xs text-gray-500 mt-1 flex justify-between">
            <span>Include condition, features and reason for selling</span>
            <span>{formData.description.length}/4300</span>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <h3 className="font-semibold">SET A PRICE</h3>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="₹"
          className="w-full border p-2 rounded"
        />
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <h3 className="font-semibold">UPLOAD UP TO 12 PHOTOS</h3>
        <div className="grid grid-cols-4 gap-2">
          {formData.photos.map((photo, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 relative flex items-center justify-center w-24 h-24 rounded overflow-hidden"
            >
              {photo ? (
                <div className="relative w-full h-full">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`uploaded-${index}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(index)}
                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs"
                  >
                    X
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center justify-center h-full w-full">
                  <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="#ccc">
                    <path d="M861.099...z" />
                  </svg>
                  <span className="text-sm mt-1">Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleMultiplePhotos}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <h3 className="font-semibold">CONFIRM YOUR LOCATION</h3>

        <div>
          <label className="block font-medium">State<span className="text-red-500">*</span></label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
          >
            <option value="">Select State</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">City<span className="text-red-500">*</span></label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-2"
            disabled={!stateCityMap[formData.state]}
          >
            <option value="">{formData.state ? "Select City" : "Select State First"}</option>
            {stateCityMap[formData.state]?.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Neighbourhood<span className="text-red-500">*</span></label>
          <select
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Neighbourhood</option>
            <option value="Konna">Konna</option>
          </select>
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default AdvertismentForm;