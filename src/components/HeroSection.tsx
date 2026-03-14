
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { Calculator, MessageCircle, CreditCard, FileCheck } from 'lucide-react';

// Helper component for animating numbers
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = new Intl.NumberFormat('pt-BR').format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 50]);
  const y4 = useTransform(scrollY, [0, 500], [0, -50]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-64 h-64 bg-senaf-primary/5 rounded-full blur-3xl"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-senaf-secondary/5 rounded-full blur-3xl"></motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div style={{ y: y3 }} className="absolute top-1/4 left-20 hidden lg:block opacity-20">
        <CreditCard className="h-12 w-12 text-senaf-primary" />
      </motion.div>
      <motion.div style={{ y: y4 }} className="absolute bottom-1/4 right-20 hidden lg:block opacity-20">
        <FileCheck className="h-16 w-16 text-senaf-secondary" />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-senaf-primary/10 text-senaf-primary rounded-full px-6 py-2 text-sm font-medium mb-6">
              <FileCheck className="h-4 w-4 mr-2" />
              Despachante Especializado
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-senaf-dark mb-6">
              Veja como é fácil <span className="text-senaf-primary">parcelar sua documentação</span> 12x no boleto
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Resolva toda a documentação do seu veículo de forma simples e parcele em até 12x no boleto. 
              Sem consulta ao SPC/Serasa e com garantia total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('processo')}
                className="bg-senaf-primary hover:bg-senaf-primary/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </motion.button>
              <a
                href="/conversao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-senaf-primary text-senaf-primary hover:bg-senaf-primary hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Entre em Contato
              </a>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl md:text-4xl font-bold text-senaf-dark">
                  +<AnimatedNumber value={15000} />
                </span>
                <p className="text-sm md:text-base text-gray-500 mt-2">Clientes Satisfeitos</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl md:text-4xl font-bold text-senaf-dark">
                  +<AnimatedNumber value={10000} />
                </span>
                <p className="text-sm md:text-base text-gray-500 mt-2">Documentos Resolvidos</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl md:text-4xl font-bold text-senaf-dark">
                  +<AnimatedNumber value={25} />
                </span>
                <p className="text-sm md:text-base text-gray-500 mt-2">Anos no Mercado</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
