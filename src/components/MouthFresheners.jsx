import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MouthFreshenerSection() {
  const products = [
    {
      id: 1,
      name: "Rajnigandha Pan Masala",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ba04d020-743f-4b02-b146-74e62dc62682.png",
      weight: "100 g",
      price: 95,
      mrp: 110,
      time: "8 MINS",
    },
    {
      id: 2,
      name: "Pass Pass Sweet Magic Mix",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/05838157-fd5d-4a44-995d-faee6f3d293e.png",
      weight: "150 g",
      price: 120,
      mrp: 140,
      time: "8 MINS",
    },
    {
      id: 3,
      name: "Tulsi Royal Khajoor Plus",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776660677396-16.png",
      weight: "100 g",
      price: 90,
      mrp: 110,
      time: "9 MINS",
    },
    {
      id: 4,
      name: "Pan Vilas Silver Mouth Freshener",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d37286d5-2122-4fe2-97fa-5a809e8f7d6f.png",
      weight: "100 g",
      price: 105,
      mrp: 120,
      time: "10 MINS",
    },
    {
      id: 5,
      name: "Catch Saunf Mouth Freshener",
      image: "https://cdn.grofers.com/app/images/products/full_screen/pro_204889.jpg",
      weight: "200 g",
      price: 130,
      mrp: 150,
      time: "8 MINS",
    },
    {
      id: 6,
      name: "Happydent Chewing Gum",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773373870128-417.png",
      weight: "50 pcs",
      price: 60,
      mrp: 70,
      time: "7 MINS",
    },
    {
      id: 7,
      name: "Center Fresh Mint Gum",
      image: "https://cdn.grofers.com/app/images/products/full_screen/pro_118389.jpg",
      weight: "100 pcs",
      price: 95,
      mrp: 110,
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
            Mouth fresheners
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