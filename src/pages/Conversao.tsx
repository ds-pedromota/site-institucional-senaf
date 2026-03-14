import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Conversao = () => {
  const whatsappUrl = "https://wa.me/5512988550059?text=Ol%C3%A1%2C%20encontrei%20a%20Senaf%20Financing%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento";

  useEffect(() => {
    // Pequeno delay para permitir o carregamento de scripts de tracking (ex: Facebook Pixel), se houver
    const timeout = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 10500); 

    return () => clearTimeout(timeout);
  }, [whatsappUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Helmet>
        <title>Redirecionando... | Senaf Financing</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="w-16 h-16 border-4 border-senaf-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-senaf-dark mb-4">Redirecionando para o WhatsApp...</h1>
        <p className="text-gray-600 mb-6">
          Aguarde um momento enquanto conectamos você com nossa equipe de atendimento.
        </p>
        <a href={whatsappUrl} className="text-senaf-primary font-medium hover:underline">
          Se não for redirecionado em alguns segundos, clique aqui.
        </a>
      </div>
    </div>
  );
};

export default Conversao;