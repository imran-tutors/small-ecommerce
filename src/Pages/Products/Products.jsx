import AllProducts from "../../Components/AllProducts/AllProducts";

export default function Products() {
  return (
    <div>
      <div className="border bg-blue-100 px-20 py-24 rounded-xl">
        <h1 className="text-4xl font-bold">Our products</h1>
      </div>
      <div className="py-8">
        <AllProducts page="all-products" />
      </div>
    </div>
  );
}
