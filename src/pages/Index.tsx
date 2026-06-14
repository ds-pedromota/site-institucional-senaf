import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { m, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
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

const CountUp = ({ value }: { value: number }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = new Intl.NumberFormat("pt-BR").format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Configuração das animações
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

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
      description: "Enviaremos um contrato online para a sua assinatura, a documentação é concluída no prazo estimado escolhido, em média 10 dias uteis."
    },
    {
      step: 6,
      title: "Pagamento mensal",
      description: "Após sua documentação 100% resolvida, sobrará os boletos parcelados para pagamento."
    }
  ];

  const services = [
    { name: "Assessoria", description: "Orientação especializada para regularizar seu veículo com plano de ação personalizado.", icon: <Handshake size={24} /> },
    { name: "Licenciamento", description: "Licenciamento anual parcelado em até 12x no boleto, sem burocracia.", icon: <FileText size={24} /> },
    { name: "IPVA", description: "Quite seu IPVA em atraso com parcelamento facilitado e sem consulta ao SPC.", icon: <Receipt size={24} /> },
    { name: "Multas", description: "Regularize suas multas de trânsito de forma online e parcelada.", icon: <AlertTriangle size={24} /> },
    { name: "Transferência", description: "Transferência de propriedade do veículo com agilidade e segurança.", icon: <Rotate3d size={24} /> },
    { name: "Retirada de Pátio", description: "Auxiliamos na retirada do seu veículo do pátio com toda a documentação necessária.", icon: <Car size={24} /> },
    { name: "Emplacamento 0 KM", description: "Emplacamento de veículos novos de forma rápida e descomplicada.", icon: <CarFront size={24} /> },
    { name: "Serviço de despachante", description: "Despachante online completo para todos os serviços de trânsito em todo o Brasil.", icon: <FileText size={24} /> }
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
      <Helmet>
        <title>Senaf Financing | Despachante Online - Parcele IPVA e Multas em 12x no boleto</title>
        <meta name="description" content="Regularize a documentação do seu veículo online. Parcele IPVA, Licenciamento e Multas em até 12x no boleto. Sem consulta ao SPC/Serasa. Atendimento em todo o Brasil." />
        <meta name="keywords" content="despachante online, parcelar ipva, licenciamento, multas, senaf financing, documentos veiculo, parcelar licenciamento, regularizar veiculo" />
        <link rel="canonical" href="https://www.senaf.com.br/" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Preciso ter o nome limpo no SPC/Serasa para contratar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. A Senaf Financing não consulta o SPC/Serasa. Qualquer pessoa pode regularizar a documentação do seu veículo conosco, independentemente da situação do nome."
                }
              },
              {
                "@type": "Question",
                "name": "Em quantas parcelas posso parcelar a documentação do veículo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Você pode parcelar em até 12x no boleto bancário, sem consulta ao SPC/Serasa e sem entrada obrigatória."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo leva para resolver a documentação?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Em média, a documentação é concluída em 10 dias úteis após a assinatura do contrato."
                }
              },
              {
                "@type": "Question",
                "name": "O serviço é presencial ou online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Todo o processo é 100% online. Você não precisa sair de casa para resolver sua documentação veicular com a Senaf Financing."
                }
              },
              {
                "@type": "Question",
                "name": "A Senaf Financing atende em todo o Brasil?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, atendemos em todo o Brasil de forma online, sem necessidade de deslocamento."
                }
              },
              {
                "@type": "Question",
                "name": "Como funciona o parcelamento do IPVA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Após uma consulta inicial de R$ 5,00, elaboramos um plano de parcelamento do seu IPVA em até 12x no boleto. Seu veículo fica bloqueado para transferência até o pagamento da última parcela, garantindo a segurança de ambas as partes."
                }
              }
            ]
          }`}
        </script>
      </Helmet>

      <HeroSection />

      {/* Elfsight Google Reviews */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="elfsight-app-ee0b417a-46c4-4281-a22f-c74d89d12dec" data-elfsight-app-lazy></div>
        </div>
      </section>

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
          
          <m.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <m.div 
                key={index}
                className="process-step"
                variants={itemVariants}
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
              </m.div>
            ))}
          </m.div>
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
          
          <m.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <m.div
                key={index}
                className="glassmorphism p-8 text-center card-hover"
                variants={itemVariants}
              >
                <div className="text-senaf-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-senaf-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </m.div>
            ))}
          </m.div>
          
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
          
          <m.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {guarantees.map((guarantee, index) => (
              <m.div 
                key={index}
                className="text-center p-8"
                variants={itemVariants}
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
              </m.div>
            ))}
          </m.div>
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
              href="https://wa.me/5512988550059?text=Ol%C3%A1%2C%20encontrei%20a%20Senaf%20Financing%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
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