import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SnacksSection() {
  const products = [
    {
      id: 1,
      name: "Kurkure Masala Munch",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1773048060308-1090.png",
      weight: "90 g",
      price: 20,
      mrp: 25,
      time: "8 MINS",
    },
    {
      id: 2,
      name: "Lay's Cream & Onion Chips",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5e254288-11fd-4e73-80b4-df858b92c98c.png",
      weight: "52 g",
      price: 20,
      mrp: 25,
      time: "8 MINS",
    },
    {
      id: 3,
      name: "Haldiram's Bhujia",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777953701494-8433.png",
      weight: "200 g",
      price: 85,
      mrp: 100,
      time: "10 MINS",
    },
    {
      id: 4,
      name: "Bingo Mad Angles",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087",
      weight: "66 g",
      price: 20,
      mrp: 25,
      time: "8 MINS",
    },
    {
      id: 5,
      name: "Doritos Nacho Cheese",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777267443546-1418.png",
      weight: "82 g",
      price: 45,
      mrp: 50,
      time: "10 MINS",
    },
    {
      id: 6,
      name: "Too Yumm Multigrain Chips",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1777288944667-217.png",
      weight: "60 g",
      price: 30,
      mrp: 35,
      time: "9 MINS",
    },
    {
      id: 7,
      name: "Pringles Original Chips",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1776743327762-502.png",
      weight: "107 g",
      price: 99,
      mrp: 120,
      time: "9 MINS",
    },
    {
      id: 8,
      name: "Balaji Wafers Classic",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1775636579132-122.png",
      weight: "150 g",
      price: 50,
      mrp: 60,
      time: "8 MINS",
    },
    {
      id: 9,
      name: "Corn Puffs Cheese Balls",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773048060308-754.png",
      weight: "60 g",
      price: 30,
      mrp: 35,
      time: "8 MINS",
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-3xl font-bold text-black">
            Snacks & Munchies
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