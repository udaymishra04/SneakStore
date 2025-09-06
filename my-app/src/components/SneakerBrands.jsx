import "./../styles/SneakerBrand.css";

export default function SneakerBrands() {
  return (
    <section className="py-10 bg-white pd-4" id="brands">
      <h2 className="text-center text-gray-600 text-lg font-medium mb-10">
        Trusted by global sneaker brands
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-14 px-6">
        
        {/* Nike */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike"
          className="h-10"
        />

        {/* Adidas */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
          alt="Adidas"
          className="h-10"
        />

        {/* Puma */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s"
          alt="Puma"
          className="h-10 rem4"
        />

        {/* New Balance */}
        <img
          src="https://images.seeklogo.com/logo-png/9/2/new-balance-logo-png_seeklogo-98723.png"
          alt="New Balance"
          className="h-10 rem5"
        />

        {/* Converse */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHy1KlSOLvCwmUlpbbIRjghIscHuJHbm_xQ&s"
          alt="Converse"
          className="h-10 rem4"
        />

        {/* Reebok */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xCZ6VzhcPNjDnBJM0XnUsWEhQXCBPE6olg&s"
          alt="Reebok"
          className="h-10"
        />

      </div>
    </section>
  );
}
