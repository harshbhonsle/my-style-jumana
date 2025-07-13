import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/70 shadow-md fixed w-full top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-3xl md:text-5xl font-playfair text-[#2C2C2C] cursor-pointer"
          onClick={() => scrollToId("home")}
        >
          My Style by Jumana
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#2C2C2C] text-lg font-montserrat font-medium">
          {["home", "about", "services", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToId(section)}
                className="hover:text-[#C38B8B] transition-colors duration-200"
              >
                {section === "about" ? "About Me" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl text-[#2C2C2C]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 bg-white/90 backdrop-blur transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? "scale-y-100 opacity-100 max-h-screen" : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        <ul className="space-y-4 py-4 text-[#2C2C2C] text-lg font-montserrat font-medium">
          {["home", "about", "services", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToId(section)}
                className="block hover:text-[#C38B8B] transition-colors duration-200"
              >
                {section === "about" ? "About Me" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
