function HeroContentBelow() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE FIRST ON MOBILE */}
        <div className="md:order-2">
          <img
            src="/images/hero1.webp"
            alt="Factory Made Interiors"
            className="rounded-xl w-full shadow-xl"
          />
        </div>

        {/* TEXT */}
        <div className="md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black mb-4">
            Premium Factory-Made Interiors for Modern Homes
          </h2>

          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-5">
            Modular Kitchens, Wardrobes & Complete Home Interiors in Theni
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
            Transform your space with precision-built, factory-finished interior
            solutions from 3L Interio. With our in-house manufacturing unit and
            10+ years of expertise, we deliver durable, stylish, and customized
            interiors for homes and commercial spaces.
          </p>

          <button className="px-6 py-3 glass-btn-light text-sm sm:text-base font-semibold hover:bg-[#d4a373] transition rounded">
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}

export default HeroContentBelow;
