import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DairyProduct() {
  const products = [
    {
      id: 1,
      name: "Amul Taaza Toned Milk",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png",
      weight: "500 ml",
      price: 27,
      mrp: 30,
      time: "10 MINS",
    },
    {
      id: 2,
      name: "Amul Gold Full Cream Milk",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1772432402055-577.png",
      weight: "500 ml",
      price: 34,
      mrp: 38,
      time: "10 MINS",
    },
    {
      id: 3,
      name: "Mother Dairy Fresh Curd",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1774944833006-555.png",
      weight: "400 g",
      price: 35,
      mrp: 40,
      time: "10 MINS",
    },
    {
      id: 4,
      name: "Amul Butter",
      image: "https://cdn.grofers.com/app/images/products/full_screen/pro_187433.jpg",
      weight: "100 g",
      price: 60,
      mrp: 65,
      time: "10 MINS",
    },
    {
      id: 5,
      name: "Amul Cheese Slices",
      image: "https://cdn.grofers.com/app/images/products/full_screen/pro_187442.jpg",
      weight: "200 g",
      price: 120,
      mrp: 140,
      time: "10 MINS",
    },
    {
      id: 6,
      name: "Britannia Brown Bread",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1772535388856-380.png",
      weight: "400 g",
      price: 45,
      mrp: 50,
      time: "12 MINS",
    },
    {
      id: 7,
      name: "Harvest Gold White Bread",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3f692c01-6d07-4322-a5f3-78b683c8066b.png",
      weight: "400 g",
      price: 40,
      mrp: 45,
      time: "12 MINS",
    },
    {
      id: 8,
      name: "Farm Fresh Eggs (6 pcs)",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7adbb7bd-b04d-4c9c-ba5f-046b1556a083.png",
      weight: "6 pcs",
      price: 60,
      mrp: 70,
      time: "15 MINS",
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

        <button className="border border-green-600 text-green-600 px-3 py-1 rounded-md text-xs font-semibold">
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
            Dairy, Bread & Eggs
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

        {/* Desktop Slick Slider */}
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