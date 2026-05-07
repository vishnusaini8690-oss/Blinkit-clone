import { Search, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Catagory from "./components/Catagory";
import Footer from "./components/Footer";
import Banners from "./components/Banners";
import RollingPaperSection from "./components/RollingPaperSection";
import SnacksSection from "./components/SnacksSection";
import MouthFreshenerSection from "./components/MouthFresheners";
import DrinksSection from "./components/DrinkSection";
import DairyProduct from "./components/DairyProduct";


function App() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [product, setProducts] = useState([]);

  // const getProduct = async () => {
  //   try {
  //     const response = await fetch(
  //       "APi Doesnt Work"
  //     );

  //     const data = await response.json();
  //     setProduct(data.items || []);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  // const chocolates = product.filter((item) => item.category === "Chocolate Packs");

  return (
    <div className="w-full">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-2">

        {/* Banner */}
        <Banners />
        <Catagory />
      </div>

      {/* All Sections */}
      <DairyProduct />
      <RollingPaperSection />
      <SnacksSection />
      <MouthFreshenerSection />
      <DrinksSection />

      {/* Footer */}
      <Footer />

    </div>


  );
}

export default App;