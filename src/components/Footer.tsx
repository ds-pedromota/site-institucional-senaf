
import React from 'react';
import { Instagram, MessageCircle, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-senaf-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <img src="/senaf maior.png" alt="Logo Senafinancing" className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Senafinance</h3>
            <span className="text-gray-400">- Despachante</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/senafgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-senaf-primary transition-colors p-2 rounded-full hover:bg-senaf-primary/10"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/5512988550059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-senaf-secondary transition-colors p-2 rounded-full hover:bg-senaf-secondary/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
            <a
              href="mailto:atendimento@senaf.com.br"
              className="text-gray-400 hover:text-senaf-primary transition-colors p-2 rounded-full hover:bg-senaf-primary/10"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 Senafinance - Despachante. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Documentação veicular com parcelamento no boleto • Atendimento em todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
