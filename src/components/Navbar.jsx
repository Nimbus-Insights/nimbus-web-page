import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="bg-ni-blue-dark p-4">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <img className="h-10" src="/logo-sided.jpg" alt="Logo" />
            </div>
          </div>
          <div className="hidden font-nunito md:block ml-auto">
            {/* Opções de navegação */}
            <a
              href="#"
              className="text-ni-white  nav-link px-3 py-2 hover:underline hover:text-ni-blue-light"
            >
              Início
            </a>
            <a
              href="#"
              className="text-ni-white nav-link px-3 py-2 hover:underline hover:text-ni-blue-light"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-ni-white nav-link px-3 py-2 hover:underline hover:text-ni-blue-light"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-ni-white nav-link px-3 py-2 hover:underline hover:text-ni-blue-light"
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
          <div
            className={`md:hidden font-nunito mt-2 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <a href="#" className="block text-center text-white px-3 py-2">
              Início
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
