import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
   <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? "bg-black shadow-lg" : "bg-transparent"
}`}>


      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
        >
          Artima
        </Link>

        <nav className="hidden md:flex space-x-8 text-[17px] font-medium">
          <NavLink
            to="/"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] hover:text-[#d4a373] transition"
          >
            Home +
          </NavLink>

          <NavLink
            to="/about"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] hover:text-[#d4a373] transition"
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] hover:text-[#d4a373] transition"
          >
            Services +
          </NavLink>

          <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Contact
          </span>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
