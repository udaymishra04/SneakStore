import React from "react";
import sneakerBrandsCont from "../data/sneakerBrands";
import "../styles/SneakerBrand.css";

export default function SneakerBrands() {
  return (
    <section className="py-10 bg-white pd-4" id="brands">
      <h2 className="text-center text-gray-600 text-lg font-medium mb-10">
        Trusted by global sneaker brands
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-14 px-6">
        
        {sneakerBrandsCont.map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className={brand.className}
          />
        ))}
      </div>
    </section>
  );
}
