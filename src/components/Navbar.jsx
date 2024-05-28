import { useState, useEffect } from "react";
import logoSidedTransparency from "../assets/nimbus-sided-logo-transparency.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className={`p-4 fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-ni-blue-dark" : "bg-ni-blue-dark/00"
        }`}
        id="navbar"
      >
        <div className="max-w-100 mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home">
                <img className="h-10" src={logoSidedTransparency} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex ml-auto font-nunito">
            {/* Opções de navegação */}
            <a
              href="#home"
              className="text-ni-blue-dark nav-link px-5 py-2 hover:underline hover:text-blue-800 bg-ni-white rounded-full transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light transition duration-300"
            >
              About us
            </a>
            <a
              href="#services"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light transition duration-300"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light transition duration-300"
            >
              Contact us
            </a>
          </div>
          <div className="md:hidden">
            {/* Ícone de menu burger para dispositivos móveis */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <div className={`menu-icon ${isOpen ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
        {/* Menu burger para dispositivos móveis */}
        {isOpen && (
          <div
            className={`md:hidden font-nunito mt-2 bg-ni-blue-dark transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href="#home" className="block text-center text-white px-3 py-2">
              Home
            </a>
            <a href="#about" className="block text-center text-white px-3 py-2">
              About us
            </a>
            <a
              href="#services"
              className="block text-center text-white px-3 py-2"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block text-center text-white px-3 py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-center text-white px-3 py-2"
            >
              Contact us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
