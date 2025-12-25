import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        backdrop-blur-md
        ${scrolled ? "bg-white/70 text-black shadow-sm" : "bg-black/20 text-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Artima</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:opacity-80">Home +</Link>
          <Link to="/about" className="hover:opacity-80">About Us</Link>
          <Link to="/services" className="hover:opacity-80">Services +</Link>
          <Link to="/contact" className="hover:opacity-80">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-[2px] mb-1 transition ${scrolled ? "bg-black" : "bg-white"}`} />
          <span className={`block w-6 h-[2px] mb-1 transition ${scrolled ? "bg-black" : "bg-white"}`} />
          <span className={`block w-6 h-[2px] transition ${scrolled ? "bg-black" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 text-white">

          {/* 🔹 Close Bar (X Button) */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
            <span className="text-lg font-semibold">Menu</span>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
