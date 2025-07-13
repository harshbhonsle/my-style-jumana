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
    <nav className="bg-[#FCEFF1]/80 shadow-md fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1
          className="text-3xl md:text-6xl font-playfair text-[#D66C82] cursor-pointer"
          onClick={() => scrollToId("home")}
        >
          Jumana
        </h1>

        <ul className="hidden md:flex space-x-10 text-[#D66C82] text-2xl font-montserrat font-medium">
          {["home", "about", "services", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToId(section)}
                className="hover:text-[#B05263] transition-colors duration-200"
              >
                {section === "about" ? "About Me" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl text-[#D66C82]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* mobile menu here */}
    </nav>
  );
};

export default Navbar;
