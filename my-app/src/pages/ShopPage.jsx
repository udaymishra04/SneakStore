import { useState } from "react";
import ProductCard from "../components/ProductCard";
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

  const products = [
    { id: 1, name: "Nike Air Max", price: 120, brand: "Nike", img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/76e54683-5822-464c-a8cf-8b366b629675/AIR+MAX+DN.png", rating: 4 },
    { id: 2, name: "Adidas Ultraboost", price: 140, brand: "Adidas", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuFHvGIzxWGk9wnHtrCz6K3Yj6PqS4Nn2yw0wysT4g87psUBpOTMOOxdaQcsmU4BG69qMffYW7xfgpskESnavR9OHngtL59nAaUkcJZolzxeYrCl8SCSevAg", rating: 5 },
    { id: 3, name: "Puma RS-X", price: 100, brand: "Puma", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391962/01/sv01/fnd/IND/fmt/png/RS-X-Drip-Men's-Sneakers", rating: 3 },
    { id: 4, name: "New Balance 550", price: 110, brand: "New Balance", img: "https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$", rating: 4 },
  ];

  return (
    <div data-aos="fade-in" className="flex max-w-7xl mx-auto px-6 py-10 gap-8">
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
