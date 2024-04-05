import React, { useState } from 'react';
import Auth from '../Auth';
import AdpLogo from '../images/adplogo.png';

const Navbar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para rolar suavemente para a seção correspondente
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white p-4 shadow sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between relative">
        <div className="flex items-center relative z-10">
          <img
            className="h-12 md:h-16 mr-2"
            src={AdpLogo}
            alt="Logo"
          />
          <span className="text-gray-600 font-bold text-lg md:text-xl">ADP TRANSPORTES & MUDANÇAS</span>
        </div>
        
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4h16v2H2V4zm0 6h16v2H2v-2zm0 6h16v2H2v-2z"
              />
            </svg>
          </button>
        </div>
        
        <ul className={`lg:flex lg:items-center lg:w-auto w-full ${
          menuOpen ? 'block' : 'hidden'
        } text-center`}>
          <li className="block m-4 lg:mt-0">
            <button onClick={() => scrollToSection('home')} className="text-black hover:text-gray-300 focus:outline-none">Home</button>
          </li>
          <li className="block m-4 lg:mt-0">
            <button onClick={() => scrollToSection('sobre')} className="text-black hover:text-gray-300 focus:outline-none">Sobre</button>
          </li>
          <li className="block m-4 lg:mt-0">
            <button onClick={() => scrollToSection('servicos')} className="text-black hover:text-gray-300 focus:outline-none">Serviços</button>
          </li>
          <li className="block m-4 lg:mt-0">
            <Auth user={user} setUser={setUser} buttonText="Entre com o google"/>
          </li>
        </ul>
    
      </div>
    </nav>
  );
};

export default Navbar;
