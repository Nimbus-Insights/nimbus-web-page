import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              {/* Insira aqui sua logo */}
              <img className="h-8" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block ml-auto">
            {/* Opções de navegação */}
            <a href="#" className="text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="text-white px-3 py-2">
              Sobre
            </a>
            <a href="#" className="text-white px-3 py-2">
              Serviços
            </a>
            <a href="#" className="text-white  py-2">
              Contato
            </a>
          </div>
          <div className="md:hidden">
            {/* Ícone de menu burger para dispositivos móveis */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu burger para dispositivos móveis */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <a href="#" className="block text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="block text-white px-3 py-2">
              Sobre
            </a>
            <a href="#" className="block text-white px-3 py-2">
              Serviços
            </a>
            <a href="#" className="block text-white px-3 py-2">
              Contato
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
