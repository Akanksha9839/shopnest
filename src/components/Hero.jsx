const Hero = () => {
  return (
    <div className="bg-gray-100 h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Welcome to <span className="text-orange-500">ShopNest</span>
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Discover the best products at unbeatable prices.  
        Your one-stop destination for smart shopping.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
