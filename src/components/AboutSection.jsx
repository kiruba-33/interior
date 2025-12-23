import { useNavigate } from "react-router-dom";

function AboutSection() {
  const navigate = useNavigate()
  return (
    <section className="py-24 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src="/images/hero1.webp"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-[#d4a373] text-sm tracking-widest mb-4">
            ABOUT US
          </h3>

          <h2 className="text-4xl font-bold leading-tight mb-4">
            Crafting Interiors With Engineering Precision
          </h2>

          <h4 className="text-lg font-semibold mb-4 opacity-80">
            Factory-Made | Durable | Custom-Built Interiors Since 2015
          </h4>

          <p className="text-[17px] leading-relaxed opacity-80">
            3L Interior combines engineering expertise with modern factory
            manufacturing to deliver interiors that last. From modular kitchens
            to wardrobes, storage solutions, paneling, and partitions — every
            product is crafted in our own factory using premium engineered
            materials. With over a decade of experience, we bring innovation,
            quality, and reliability to homes and commercial spaces across Theni
            and surrounding areas.
          </p>

          <button onClick={() => navigate('/about')} className="mt-8 px-8 py-3 bg-white text-black font-semibold hover:bg-[#d4a373] transition">
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
