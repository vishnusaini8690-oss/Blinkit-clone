import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  AtSign,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Useful Links */}
          <div>
            <h2 className="text-black font-semibold mb-4">
              Useful Links
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Blog", "Privacy", "Terms", "FAQs", "Security", "Contact",
                "Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources",
                "Recipes", "Bistro", "District", "Blinkit Ambulance"
              ].map((item, i) => (
                <p key={i} className="hover:text-black cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-black font-semibold">Categories</h2>
              <span className="text-green-600 cursor-pointer">
                see all
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Vegetables & Fruits", "Cold Drinks & Juices", "Bakery & Biscuits",
                "Dry Fruits, Masala & Oil", "Paan Corner", "Pharma & Wellness",
                "Personal Care", "Magazines", "Electronics & Electricals",
                "Toys & Games", "Rakhi Gifts",

                "Dairy & Breakfast", "Instant & Frozen Food", "Sweet Tooth",
                "Sauces & Spreads", "Organic & Premium", "Cleaning Essentials",
                "Pet Care", "Kitchen & Dining", "Stationery Needs", "Print Store",

                "Munchies", "Tea, Coffee & Milk Drinks", "Atta, Rice & Dal",
                "Chicken, Meat & Fish", "Baby Care", "Home Furnishing & Decor",
                "Beauty & Cosmetics", "Fashion & Accessories", "Books", "E-Gift Cards"
              ].map((item, i) => (
                <p key={i} className="hover:text-black cursor-pointer">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-center md:text-left">
            © Blink Commerce Private Limited, 2016-2026
          </p>

          {/* App Download */}
          <div className="flex items-center gap-3">
            <span className="text-black font-medium">Download App</span>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="appstore"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="playstore"
              className="h-8"
            />
          </div>

          {/* Social Icons*/}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin, AtSign].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full cursor-pointer hover:scale-110 transition"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-base text-gray-500 mt-6 leading-relaxed">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related,
          linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
        </p>

        {/* Creator Credit */}
        <div className="mt-8 pt-5 border-t border-gray-300 text-center">

          <h3 className="text-lg font-semibold text-black">
            Crafted by Vishnu Saini
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Frontend / Full Stack Web Developer
          </p>

        </div>
      </div>
    </footer>
  );
}