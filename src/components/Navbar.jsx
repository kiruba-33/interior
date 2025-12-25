import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      backdrop-blur-md
      ${scrolled ? "bg-white/80 text-black shadow-sm" : "bg-black/30 text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Artima</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/about" className="hover:opacity-80">About</Link>
          <Link to="/services" className="hover:opacity-80">Services</Link>
          <Link to="/contact" className="hover:opacity-80">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <span className={`block w-6 h-[2px] mb-1 ${scrolled ? "bg-black" : "bg-white"}`} />
          <span className={`block w-6 h-[2px] mb-1 ${scrolled ? "bg-black" : "bg-white"}`} />
          <span className={`block w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[999] flex">

          {/* Drawer Panel */}
          <div className="w-[270px] h-full bg-black/95 text-white shadow-2xl flex flex-col">

            {/* Header Row */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <span className="font-semibold text-lg">Menu</span>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl leading-none opacity-90 hover:opacity-100"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col px-4 py-4 gap-4 text-base font-medium">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
          </div>

          {/* Backdrop */}
          <div
  className="flex-1 bg-black/90 backdrop-blur-md transition-opacity duration-200"
  onClick={() => setOpen(false)}
/>

        </div>
      )}
    </header>
  );
};

export default Navbar;
