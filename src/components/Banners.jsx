import React from 'react'

export default function Banners() {
  return (
    <div>
         {/* Main Banner */}
        <div className="max-w-7xl mx-auto hidden md:block">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg"
            alt="Main Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 3 Category Banners */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              className="w-full rounded-lg shadow-md hover:scale-105 transition duration-300"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
              alt="Pharmacy"
            />

            <img
              className="w-full rounded-lg shadow-md hover:scale-105 transition duration-300"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png"
              alt="Pet"
            />

            <img
              className="w-full rounded-lg shadow-md hover:scale-105 transition duration-300"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png"
              alt="Baby"
            />
          </div>
        </div>
    </div>
  )
}
