import { Link } from "react-router-dom";
import AllProducts from "../../Components/AllProducts/AllProducts";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <AllProducts page="home" />
        <div className="flex justify-center mt-6">
          <Link className="font-semibold text-lg underline" to="/products">
            View all products
          </Link>
        </div>
      </div>
    </div>
  );
}
