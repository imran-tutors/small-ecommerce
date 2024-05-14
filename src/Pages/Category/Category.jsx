import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  let categoryTitle;
  if (category === "grocery-and-grains") {
    categoryTitle = "Grocery & Grains";
  } else if (category === "grocery-as-gifts") {
    categoryTitle = "Grocery as Gifts";
  } else if (category === "honey-nuts-and-seeds") {
    categoryTitle = "Honey, Nuts & Seeds";
  } else if (category === "oil-and-extracts") {
    categoryTitle = "Oil & Extracts";
  } else {
    categoryTitle = "Tea Lovers";
  }

  useEffect(() => {
    fetch("https://swiftshop-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryTitle]);

  const filteredProducts = products.filter(
    (item) => item.category === categoryTitle
  );

  let renderProduct;

  if (filteredProducts.length === 0) {
    renderProduct = (
      <div className="mt-10">
        <h3 className="font-bold text-2xl">No product found</h3>
      </div>
    );
  } else {
    renderProduct = filteredProducts.map((item) => (
      <ProductCard key={item._id} data={item} />
    ));
  }

  return (
    <div>
      <div className="bg-green-100 rounded-lg px-20 py-24">
        <h2 className="text-3xl font-bold">{categoryTitle}</h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-4 gap-6">{renderProduct}</div>
      </div>
    </div>
  );
}
