import { useNavigate } from 'react-router-dom';

function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Modular Kitchen",
      desc: "Smart, spacious, and fully customized factory-made kitchens designed for daily convenience and long-lasting performance.",
      img: "/images/service1.jpg",
    },
    {
      title: "Wardrobes",
      desc: "Sliding, open, or hinged — premium wardrobes crafted with engineered precision for maximum storage and elegant style.",
      img: "/images/service2.jpg",
    },
    {
      title: "Storage Cot",
      desc: "Strong, functional, and aesthetically designed storage cots tailored to match your bedroom interiors.",
      img: "/images/service3.jpg",
    },
    {
      title: "TV Unit",
      desc: "Modern, space-saving TV Units designed to enhance your living room’s look and keep essentials organized.",
      img: "/images/service4.jpg",
    },
    {
      title: "Pooja Unit",
      desc: "Beautiful and thoughtfully crafted Pooja Units that bring elegance, tradition, and calmness to your space.",
      img: "/images/service5.jpg",
    },
    {
      title: "Paneling",
      desc: "Decorative and premium wall paneling solutions that elevate the ambience of living rooms, bedrooms, and commercial spaces.",
      img: "/images/service6.jpg",
    },
    {
      title: "Partitions",
      desc: "Stylish room partitions for homes and offices — designed to create privacy, enhance aesthetics, and maximize space.",
      img: "/images/service7.jpg",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <h4 className="text-sm tracking-widest text-[#d4a373] mb-3">
          OUR SERVICES
        </h4>

        <h2 className="text-4xl font-bold mb-4 text-black">
          Complete Interior Solutions, Crafted for Life
        </h2>

        <h3 className="text-lg font-medium text-gray-700 mb-6">
          Factory-Made Interiors Built for Style, Strength & Long-Term Durability
        </h3>

        {/* Short Intro */}
        <p className="text-[17px] leading-relaxed text-gray-600 max-w-3xl mb-12">
          At 3L Interio, every interior element is engineered and manufactured in our own factory 
          to ensure precision, durability, and a flawless finish. We provide end-to-end solutions 
          for homes, villas, offices, and commercial buildings in Theni & surrounding areas — 
          trusted by engineers, architects, and homeowners.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <img
                src={s.img}
                alt={s.title}
                className="rounded-lg w-full h-48 object-cover mb-6"
              />

              <h3 className="text-2xl font-semibold mb-3 text-black">
                {s.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                {s.desc}
              </p>

              <button className="mt-4 px-6 py-2 text-black border border-black hover:bg-[#d4a373] hover:border-[#d4a373] transition font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
         <button
  onClick={() => navigate("/services")}
  className="px-10 py-3 bg-black text-white text-lg font-semibold hover:bg-[#d4a373] transition-all duration-300"
>
  Explore All Services
</button>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
