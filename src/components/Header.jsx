import React, { useState } from "react";
import { Search, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white  shadow-sm sticky top-0  z-50">
      
      <div className=" flex items-center justify-between px-6 h-[90px]">
        
       
        <div className="flex items-center gap-5">
          
          {/* Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-yellow-400">
            blink<span className="text-green-500">it</span>
          </h1>

          {/* Divider */}
          <div className="hidden md:block h-10 w-px bg-gray-200"></div>

          {/* Location */}
          <div className="hidden md:flex flex-col leading-tight">
            <span className="font-bold text-lg text-gray-950">
              Delivery in 24 minutes
            </span>
            <div className="flex items-center text-xs text-gray-600 cursor-pointer">
              <span>6, Krishna Nagar-B, Mahesh Na...</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 mx-10">
          <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition rounded-xl px-5 py-3 w-full shadow-inner">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder='Search "Products, brands and more"'
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          
          <button className="hidden md:block text-gray-700 font-medium hover:text-black transition">
            Login
          </button>

          <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition px-4 py-3 rounded-xl text-sm text-gray-600">
            <ShoppingCart size={18} />
            <span className="hidden md:inline font-medium">
              My Cart
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder='Search "bread"'
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-5 py-5 space-y-4 shadow-lg">
          <p className="font-medium">Login</p>
          <p>My Orders</p>
          <p>Saved Address</p>
          <p>Help</p>
        </div>
      )}
    </header>
  );
}