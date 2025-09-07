import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/ShopPage.css";

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: [],
    rating: [],
    brand: [],
  });

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (updated[type].includes(value)) {
        updated[type] = updated[type].filter((item) => item !== value);
      } else {
        updated[type].push(value);
      }
      return updated;
    });
  };

  return (
    <div data-aos="fade-in" className="flex justify-content-center max-w-7xl mx-auto px-6 py-10 gap-8">
      {/* Filters */}
      <aside className="w-64 bg-gray-100 rounded-xl p-5 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-5">
          <h3 className="font-medium mb-2">Category</h3>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("category", "Sneakers")}
            />{" "}
            Sneakers
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("category", "Running")}
            />{" "}
            Running Shoes
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("category", "Casual")}
            />{" "}
            Casual
          </label>
        </div>

        {/* Ratings */}
        <div className="mb-5">
          <h3 className="font-medium mb-2">Ratings</h3>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("rating", "4")}
            />{" "}
            ⭐ 4 & above
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("rating", "3")}
            />{" "}
            ⭐ 3 & above
          </label>
        </div>

        {/* Brands */}
        <div className="mb-5">
          <h3 className="font-medium mb-2">Brands</h3>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("brand", "Nike")}
            />{" "}
            Nike
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("brand", "Adidas")}
            />{" "}
            Adidas
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("brand", "Puma")}
            />{" "}
            Puma
          </label>
          <label className="block">
            <input
              type="checkbox"
              onChange={() => toggleFilter("brand", "New Balance")}
            />{" "}
            New Balance
          </label>
        </div>
      </aside>

      {/* Products */}
      <main className="">
        <h2 className="text-2xl font-bold mb-6">All Sneakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=""
            >
              <ProductCard
                image={product.img}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
