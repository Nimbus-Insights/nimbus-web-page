import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <img className="h-10" src="/logo-sided.jpg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block ml-auto">
            {/* Opções de navegação */}
            <a
              href="#"
              className="text-white nav-link px-3 py-2 hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white nav-link px-3 py-2 hover:underline"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-white nav-link px-3 py-2 hover:underline"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-white nav-link px-3 py-2 hover:underline"
            >
              Contato
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
          <div className="md:hidden mt-2">
            <a href="#" className="block text-center text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="block text-center text-white px-3 py-2">
              Sobre
            </a>
            <a href="#" className="block text-center text-white px-3 py-2">
              Serviços
            </a>
            <a href="#" className="block text-center text-white px-3 py-2">
              Contato
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
