import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { 
  FileText, 
  Handshake,
  Rotate3d, 
  CreditCard, 
  CheckCircle, 
  Car, 
  Receipt, 
  AlertTriangle, 
  RotateCcw, 
  CarFront,
  Shield,
  DollarSign,
  Lock,
  Award
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: "Acesse nosso site",
      description: "O cliente nos encontra na internet e acessa nosso site para conhecer nossos serviços."
    },
    {
      step: 2,
      title: "Solicite um orçamento",
      description: "Envie uma mensagem solicitando um orçamento para o serviço desejado."
    },
    {
      step: 3,
      title: "Consulta de orçamento",
      description: "Envie os dados do veículo e realize um pagamento simbólico de R$ 5,00 para a consulta."
    },
    {
      step: 4,
      title: "Assessoria e Orientação Exclusiva",
      description: "Conte com uma orientação especializada e exclusiva, que esclarece cada detalhe do seu caso. Fornecemos todas as informações sobre bloqueios, gravames e valores para guiar você, de forma segura, e com um plano de ação até a solução definitiva e parcelada no boleto."
    },
    {
      step: 5,
      title: "Assinatura do contrato",
      description: "Enviaremos um contrato para assinatura online para sua assinatura, a documentação é concluída no prazo estimado escolhido, em média 10 dias uteis."
    },
    {
      step: 6,
      title: "Pagamento mensal",
      description: "Após sua documentação 100% resolvida, sobrará os boletos parcelados para pagamento."
    }
  ];

  const services = [
    { name: "Assessoria", icon: <Handshake size={24} /> },
    { name: "Licenciamento", icon: <FileText size={24} /> },
    { name: "IPVA", icon: <Receipt size={24} /> },
    { name: "Multas", icon: <AlertTriangle size={24} /> },
    { name: "Transferência", icon: <Rotate3d size={24} /> },
    { name: "Retirada de Pátio", icon: <Car size={24} /> },
    { name: "Emplacamento 0 KM", icon: <CarFront size={24} /> },
    { name: "Serviço de despachante", icon: <FileText size={24} /> }
  ];

  const guarantees = [
    {
      title: "Sem consulta SPC/Serasa",
      description: "Não consultamos seu nome nos órgãos de proteção ao crédito.",
      icon: <Shield size={32} />
    },
    {
      title: "Veículo bloqueado para transferência",
      description: "O veículo fica impossibilitado de ser transferido até o pagamento do último boleto.",
      icon: <Lock size={32} />
    },
    {
      title: "Garantia total",
      description: "Documentação concluída ou seu dinheiro de volta.",
      icon: <Award size={32} />
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Seção Como Funciona */}
      <section id="processo" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-senaf-dark mb-4">
              Nosso Processo Simplificado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como é simples resolver sua documentação e parcelar no boleto
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="process-step animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-senaf-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {step.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-senaf-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seção Serviços */}
      <section id="servicos" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-senaf-dark mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para seu veículo em todo o Brasil
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-senaf-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-senaf-dark">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-senaf-secondary/10 text-senaf-secondary rounded-full px-6 py-3 font-medium">
              <Car className="h-5 w-5 mr-2" />
              Atendemos em todo o Brasil
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção Garantias */}
      <section id="garantias" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-senaf-dark mb-4">
              Sua Segurança em Primeiro Lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regras claras e transparentes para sua tranquilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="text-center p-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-senaf-primary mb-6 flex justify-center">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-senaf-dark mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-senaf-primary to-senaf-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Resolver sua Documentação?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento agora mesmo e parcele sua documentação em até 12x no boleto, sem complicações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5512988550059"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-senaf-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;