import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Why Us?", to: "/why-us" },
    { name: "Our Experts", to: "/experts" },
    { name: "How It Works", to: "/howitworks" },
    // { name: "Projects", to: "/Projects" },
  ];

  const linkClass = (isActive: boolean) =>
    isActive
      ? "text-bg font-semibold"
      : "text-gray-700 hover:text-black transition-colors";

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 md:w-5/6 lg:w-2/3 bg-secondary backdrop-blur-xl border border-white/20 rounded-xl shadow-lg px-6 py-3 flex items-center justify-between z-50">
      
      <NavLink to="/" className="flex-shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </NavLink>

      
      <ul className="hidden md:flex items-center space-x-8">
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${linkClass(isActive)} text-sm tracking-wide uppercase`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      
      <div className="hidden md:block">
        <button className="px-5 py-2 hover:cursor-pointer rounded-full bg-bg text-black font-semibold shadow-md hover:shadow-lg transition">
          Get Started
        </button>
      </div>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex justify-center items-center w-10 h-10 rounded-full bg-bg/20 transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? (
          <FaTimes className="text-2xl text-black transform transition-transform duration-300 rotate-180" />
        ) : (
          <FaBars className="text-2xl text-black transform transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl mt-4 shadow-lg flex flex-col space-y-4 py-6 px-6 transform transition-all duration-500 origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              `${linkClass(isActive)} block text-base`
            }
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button className="w-full px-5 py-2 rounded-full bg-bg text-black font-semibold shadow-md hover:shadow-lg transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
