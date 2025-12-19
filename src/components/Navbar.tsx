
import React from 'react';
import { FileText, Phone } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/senaf maior.png" alt="Logo Senafinancing" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-senaf-dark">Senaf Financing</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('processo')}
              className="text-senaf-dark hover:text-senaf-primary transition-colors link-hover"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-senaf-dark hover:text-senaf-primary transition-colors link-hover"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('garantias')}
              className="text-senaf-dark hover:text-senaf-primary transition-colors link-hover"
            >
              Garantias
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/message/HJORRYW7IDNDI1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-senaf-primary hover:bg-senaf-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300 btn-glow"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
