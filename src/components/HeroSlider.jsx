import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import gsap from "gsap";

const slides = [
  {
    title1: "Premium Factory-Made",
    title2: "Interiors for Modern",
    title3: "Homes",
    desc: "Transform your space with precision-built, factory-finished interior solutions from 3L Interio. With our in-house manufacturing unit and 10+ years of expertise, we deliver durable, stylish, and customized interiors for homes and commercial spaces.",
    btn: "Get Free Consultation",
    img: "/images/hero1.webp",
  },

  {
    title1: "Experience True Quality",
    title2: "With Factory-Finished",
    title3: "Craftsmanship",
    desc: "Every piece we create — from modular kitchens to wardrobes and storage units — is engineered in our factory for unmatched accuracy and long-lasting performance. Built by experts. Trusted by engineers, homeowners, and builders across Theni.",
    btn: "View Our Work",
    img: "/images/hero1.webp",
  },

  {
    title1: "Your Dream Interiors,",
    title2: "Designed & Built by",
    title3: "Specialists",
    desc: "Since 2015, we’ve helped hundreds of families and commercial clients bring their interior ideas to life. With our latest showroom and advanced production setup, we provide end-to-end interior services that are beautiful, functional, and customizable.",
    btn: "Book a Site Visit",
    img: "/images/hero1.webp",
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full h-screen relative">

  <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000 }}
  loop={true}
  pagination={{ clickable: true }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

  /* FULLSCREEN FIX */
  className="w-full h-full !min-h-screen"
>

        {slides.map((s, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              {/* FIXED GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white hero-text">
                  <h1 className="text-6xl font-bold leading-tight">{s.title1}</h1>
                  <h1 className="text-6xl font-bold leading-tight">{s.title2}</h1>
                  <h1 className="text-6xl font-bold leading-tight">{s.title3}</h1>

                  <p className="max-w-xl mt-4 text-lg opacity-90">{s.desc}</p>

                  <button className="mt-8 px-8 py-3 bg-white text-black font-semibold hover:bg-[#d4a373] transition">
                    {s.btn}
                  </button>
                </div>
              </div>

              <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-ping"></div>
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Black Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white py-4 px-6 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <div className="flex items-center space-x-4">
            <div
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 flex items-center justify-center border border-white cursor-pointer hover:bg-white hover:text-black transition"
            >
              ←
            </div>

            <div
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 flex items-center justify-center border border-white cursor-pointer hover:bg-white hover:text-black transition"
            >
              →
            </div>
          </div>

          <h2 className="text-xl font-semibold leading-tight">
            {slides[activeIndex].title1} <br />
            {slides[activeIndex].title2}
          </h2>

          <div className="w-[280px]">
            <Swiper slidesPerView={3} spaceBetween={10} loop={true} className="mini-swiper">
              {slides.map((s, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={s.img}
                    className="w-full h-16 object-cover border border-white/30"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HeroSlider;
