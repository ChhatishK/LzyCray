import React from 'react'

function ProductDetails() {
  return (
    <div>
        <main className="flex-1 p-8 flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg shadow p-8 w-full max-w-5xl min-h-[420px] relative flex flex-col">
            {/* Save Changes button at top right */}
            <div className="absolute right-8 top-8">
              <Button label="Save Changes" onClick={handleSave} />
            </div>
            <div className="flex flex-col md:flex-row gap-12 mt-8">
              {/* Left: Logo */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full">
                  <div className="text-gray-700 font-semibold mb-2 text-base">Logo</div>
                  <LogoCard logoUrl={logoUrl} onChange={handleLogoChange} />
                </div>
              </div>
              {/* Right: Location and Icon */}
              <div className="flex-1 flex flex-col justify-start gap-8">
                <div>
                  <div className="text-gray-700 font-semibold mb-2 text-base">Location</div>
                  <input
                    type="text"
                    // value={location}
                    onChange={handleLocationChange}
                    className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
                    placeholder="313, Block 2, Sector 29 Noida Uttar Pradesh"
                  />
                </div>
                <div>
                  <div className="text-gray-700 font-semibold mb-2 text-base">Icon</div>
                  <IconUpload onUpload={handleIconUpload} />
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default ProductDetails