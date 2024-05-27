import { useState } from "react";
import logoSidedTransparency from "../assets/nimbus-sided-logo-transparency.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav
        className={
          "bg-ni-blue-dark p-4 fixed top-0 w-full z-50 transition-all duration-300"
        }
        id="navbar"
      >
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <a href="#home">
                <img className="h-10" src={logoSidedTransparency} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="hidden font-nunito md:block ml-auto">
            {/* Opções de navegação */}
            <a
              href="#home"
              className="text-ni-blue-dark  nav-link px-5 py-2 hover:underline hover:text-blue-800 bg-ni-white rounded-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light"
            >
              About us
            </a>
            <a
              href="#projects"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-ni-white nav-link px-5 py-2 hover:underline hover:text-ni-blue-light"
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
            className={`md:hidden font-nunito mt-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <a href="#home" className="block text-center text-white px-3 py-2">
              Home
            </a>
            <a href="#about" className="block text-center text-white px-3 py-2">
              About us
            </a>
            <a
              href="#projects"
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
