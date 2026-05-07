import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RollingPaperSection() {
  const products = [
    {
      id: 1,
      name: "Brown Rolling Paper with Tips",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/735bf21f-8827-4706-991a-3fce6076e758.png",
      weight: "64 pcs",
      price: 199,
      mrp: 220,
      time: "10 MINS",
    },
    {
      id: 2,
      name: "RAW Classic Rolling Paper",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/51d164ea-0ee2-4080-aac3-0affdaf34ded.png",
      weight: "32 sheets",
      price: 99,
      mrp: 120,
      time: "10 MINS",
    },
    {
      id: 3,
      name: "Smoking Filter Tips",
      image:
        "https://cdn.grofers.com/app/images/products/full_screen/pro_339511.jpg",
      weight: "21 pcs",
      price: 149,
      mrp: 180,
      time: "10 MINS",
    },
    {
      id: 4,
      name: "Pre Rolled Cones",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8d385b40-e78b-434a-962d-50ba667891bf.png",
      weight: "20 pcs",
      price: 199,
      mrp: 220,
      time: "10 MINS",
    },
    {
      id: 5,
      name: "Flavoured Rolling Paper",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2a6eb6af-8143-4195-a788-c350255a8e1e.png",
      weight: "24 pcs",
      price: 179,
      mrp: 210,
      time: "10 MINS",
    },
    {
      id: 6,
      name: "Rolling Paper Combo Pack",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/11cff76d-e1f4-45ad-85bd-b9c5e0539357.png",
      weight: "50 pcs",
      price: 249,
      mrp: 300,
      time: "10 MINS",
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
            Rolling paper & tobacco
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