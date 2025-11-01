import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Why Us?", to: "/why-us" },
    { name: "Success Stories", to: "/cases" },
    { name: "How It Works", to: "/howitworks" },
    // { name: "Projects", to: "/Projects" },
  ];

  const linkClass = (isActive: boolean) =>
    isActive
      ? "text-bg font-semibold"
      : "text-white hover:text-sfg transition-colors";

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 md:w-5/6 lg:w-2/3 bg-black/50 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg px-6 py-4 flex items-center justify-between z-50">
      
      <NavLink to="/" className="flex-shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </NavLink>

      
      <ul className="hidden md:flex items-center space-x-8 font-semibold">
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

      
      <div className="hidden md:block ">
        <button className="px-6 py-2 hover:cursor-pointer rounded-lg bg-bg text-black font-bold shadow-md hover:shadow-lg hover:text-bg hover:bg-black transition-all duration-300">
          Get Started
        </button>
      </div>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex justify-center items-center w-8 h-8 rounded-full bg-bg/80 z-50 transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? (
          <FaTimes className="text-xl text-black transform transition-transform duration-300 rotate-180" />
        ) : (
          <FaBars className="text-xl text-black transform transition-transform duration-300" />
        )}
      </button>

     
      <div
        className={`md:hidden fixed  top-full left-0 w-full bg-black/75 backdrop-blur-xl border border-white/20 rounded-2xl mt-4 shadow-lg flex flex-col space-y-6 py-6 px-6 transform transition-all duration-400 origin-right  ease-out-in
${
          isOpen
            ? "opacity-100 scale-x-100 translate-x-0"
            : "opacity-0 scale-x-0 translate-x-full pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              `${linkClass(isActive)} block text-base font-semibold`
            }
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button className="w-1/2 self-center px-5 py-2 rounded-lg bg-bg text-black font-semibold shadow-md hover:shadow-lg hover:text-bg hover:bg-black transition-all duration-300 ">
          Get Started
        </button>
      </div>
    </nav>
  );
}
