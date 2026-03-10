"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Send, MessageSquare } from 'lucide-react';
import { SpecialText } from './special-text';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUESTIONS = [
  {
    id: 'leads',
    question: 'Qual o seu volume médio de leads por mês?',
    options: ['Até 100', '100 a 500', '500 a 2.000', 'Acima de 2.000'],
  },
  {
    id: 'team',
    question: 'Qual o tamanho do seu time comercial hoje?',
    options: ['Sou apenas eu', '2 a 5 pessoas', '5 a 15 pessoas', 'Mais de 15 pessoas'],
  },
  {
    id: 'pain',
    question: 'Qual o seu maior gargalo atual?',
    options: ['Demora no atendimento', 'Falta de follow-up', 'Custo operacional alto', 'Leads desqualificados'],
  },
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (option: string) => {
    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Olá Naotho! Acabei de qualificar meu perfil no site Engage Max:%0A%0A` +
      `*Volume de leads:* ${answers.leads}%0A` +
      `*Time comercial:* ${answers.team}%0A` +
      `*Maior gargalo:* ${answers.pain}%0A%0A` +
      `Gostaria de agendar minha demonstração técnica!`;
    
    window.open(`https://wa.me/5515997268563?text=${message}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-zinc-950 border border-white/10 p-8 md:p-12 shadow-2xl rounded-sm overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isFinished ? (
              <div>
                <div className="mb-12">
                  <div className="flex gap-2 mb-6">
                    {QUESTIONS.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 flex-1 transition-colors duration-500 ${i <= step ? 'bg-brand-purple' : 'bg-white/10'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-brand-purple uppercase tracking-[0.3em] mb-4 block">
                    Passo {step + 1} de {QUESTIONS.length}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {QUESTIONS[step].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {QUESTIONS[step].options.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 10 }}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left p-5 border border-white/5 bg-white/[0.02] hover:bg-brand-purple/10 hover:border-brand-purple/50 transition-all flex items-center justify-between group"
                    >
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{option}</span>
                      <ArrowRight size={18} className="text-brand-purple opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check size={40} className="text-brand-purple" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                  Perfil Qualificado
                </h3>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                  Identificamos que sua operação possui um alto potencial de escala com a Engage Max. Fale agora com o Naotho para finalizar o agendamento.
                </p>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-brand-purple text-white font-bold py-6 px-10 rounded-sm hover:bg-brand-purple/80 transition-all flex items-center justify-center gap-4 uppercase tracking-widest text-sm"
                >
                  <MessageSquare size={20} />
                  Falar com Naotho no WhatsApp
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
