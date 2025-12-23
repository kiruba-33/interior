function HeroContentBelow() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-black mb-4">
            Premium Factory-Made Interiors for Modern Homes
          </h2>

          <h3 className="text-xl font-medium text-gray-700 mb-6">
            Modular Kitchens, Wardrobes & Complete Home Interiors in Theni
          </h3>

          <p className="text-[17px] leading-relaxed text-gray-600 mb-8">
            Transform your space with precision-built, factory-finished interior 
            solutions from 3L Interio. With our in-house manufacturing unit and 
            10+ years of expertise, we deliver durable, stylish, and customized 
            interiors for homes and commercial spaces.
          </p>

          <button className="px-8 py-3 bg-black text-white font-semibold hover:bg-[#d4a373] transition-all duration-300">
            Get Free Consultation
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/hero1.webp"
            alt="Factory Made Interiors"
            className="rounded-xl w-full shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroContentBelow;
