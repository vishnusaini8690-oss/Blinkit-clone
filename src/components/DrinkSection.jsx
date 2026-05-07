import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DrinksSection() {
  const products = [
    {
      id: 1,
      name: "Coca Cola Soft Drink",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1770356946958-190.png",
      weight: "750 ml",
      price: 40,
      mrp: 45,
      time: "8 MINS",
    },
    {
      id: 2,
      name: "Pepsi Soft Drink",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/43929b24-995e-4cd0-bd60-6ea8a271286e.png",
      weight: "750 ml",
      price: 40,
      mrp: 45,
      time: "8 MINS",
    },
    {
      id: 3,
      name: "Sprite Lemon Drink",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1775639625125-104.png",
      weight: "750 ml",
      price: 40,
      mrp: 45,
      time: "8 MINS",
    },
    {
      id: 4,
      name: "Frooti Mango Drink",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/80bbcd00-fd0a-4cc0-a983-2eaa83ebee4d.png",
      weight: "1 L",
      price: 70,
      mrp: 80,
      time: "10 MINS",
    },
    {
      id: 5,
      name: "Real Mixed Fruit Juice",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ff4a3ece-1ddf-4860-b293-c2c22c768bb6.png",
      weight: "1 L",
      price: 110,
      mrp: 130,
      time: "10 MINS",
    },
    {
      id: 6,
      name: "Tropicana Orange Juice",
      image:
        "https://cdn.grofers.com/app/images/products/full_screen/pro_137060.jpg",
      weight: "1 L",
      price: 115,
      mrp: 130,
      time: "10 MINS",
    },
    {
      id: 7,
      name: "Red Bull Energy Drink",
      image:
        "https://cdn.grofers.com/app/images/products/full_screen/pro_270352.jpg",
      weight: "250 ml",
      price: 115,
      mrp: 125,
      time: "7 MINS",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
    ],
  };

  const ProductCard = ({ item }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm h-[240px] flex flex-col">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-full object-contain"
      />

      <p className="text-[11px] text-gray-500 mt-2">⏱ {item.time}</p>

      <h3 className="text-[13px] font-medium mt-1 line-clamp-2 min-h-[38px]">
        {item.name}
      </h3>

      <p className="text-gray-400 text-xs mt-1">{item.weight}</p>

      <div className="flex justify-between items-end mt-auto gap-2">
        <div>
          <p className="font-semibold text-sm">₹{item.price}</p>
          <p className="text-gray-400 line-through text-xs">₹{item.mrp}</p>
        </div>

        <button className="border border-green-600 text-green-600 px-3 py-1 rounded-md text-xs font-semibold hover:bg-green-600 hover:text-white transition">
          ADD
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-3xl font-bold text-black">
            Cold Drinks & Juices
          </h2>

          <button className="text-green-600 font-semibold text-sm">
            see all
          </button>
        </div>

        {/* Mobile Auto Scroll */}
        <div className="block md:hidden overflow-hidden">
          <div className="mobile-auto-slider flex gap-3">
            {[...products, ...products].map((item, index) => (
              <div key={index} className="w-[155px] flex-shrink-0">
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {products.map((item) => (
              <div key={item.id} className="px-2">
                <ProductCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}