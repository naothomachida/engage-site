import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Zap, Clock, BarChart3, LayoutDashboard, UserPlus, Lightbulb, Calendar, Target, ChevronUp, Layers, Rocket, ShieldCheck, Sparkles, BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Demo } from './components/ui/demo';
import { MarqueeDemo } from './components/ui/marquee-demo';
import { SpecialText } from './components/ui/special-text';
import { AnimatedListDemo } from './components/ui/animated-list';
import { AdaptiveChat } from './components/ui/adaptive-chat';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { BookingModal } from './components/ui/booking-modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["agenda reuniões", "qualifica leads", "vende 24/7", "não sente sono", "escala seu lucro"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 selection:bg-brand-blue selection:text-white font-sans antialiased overflow-x-hidden">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[90] bg-brand-blue text-white p-4 rounded-full shadow-2xl hover:bg-white hover:text-black transition-all border border-white/10"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Engage Max" className="h-16 md:h-20 w-auto object-contain -ml-2" />
            
            {/* Botão Mobile - Ao lado do logo */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
             <a href="#solucoes" className="hover:text-brand-blue transition-colors flex items-center gap-2 group"><Layers size={12} className="group-hover:text-brand-blue" /> Soluções</a>
             <a href="#performance" className="hover:text-brand-blue transition-colors flex items-center gap-2 group"><Rocket size={12} className="group-hover:text-brand-blue" /> Performance</a>
             <a href="#diferenciais" className="hover:text-brand-blue transition-colors flex items-center gap-2 group"><ShieldCheck size={12} className="group-hover:text-brand-blue" /> Diferenciais</a>
             <button 
               onClick={() => setIsModalOpen(true)}
               className="bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-6 py-3 hover:bg-brand-blue hover:text-white transition-all"
             >
               Agendar Demo Técnica
             </button>
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-white/5 px-6 py-8 overflow-hidden"
            >
              <div className="flex flex-col gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                <a 
                  href="#solucoes" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-blue transition-colors flex items-center gap-2 group"
                >
                  <Layers size={14} className="group-hover:text-brand-blue" /> Soluções
                </a>
                <a 
                  href="#performance" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-blue transition-colors flex items-center gap-2 group"
                >
                  <Rocket size={14} className="group-hover:text-brand-blue" /> Performance
                </a>
                <a 
                  href="#diferenciais" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-blue transition-colors flex items-center gap-2 group"
                >
                  <ShieldCheck size={14} className="group-hover:text-brand-blue" /> Diferenciais
                </a>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="bg-brand-blue text-white px-6 py-4 hover:bg-brand-blue/80 transition-all text-center tracking-[0.2em]"
                >
                  Agendar Demo Técnica
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section (Fused with Animated List) */}
      <section className="pt-56 pb-24 px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center z-10 relative">
          
          <div className="z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              Escale suas vendas <br/>
              deixando o trabalho <br/>
              repetitivo com a <span className="text-white">SDR IA</span> <br/>
              que <SpecialText key={wordIndex} className="text-brand-blue">{words[wordIndex]}</SpecialText>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10 space-y-2"
            >
              <p className="text-xl md:text-2xl text-white font-bold tracking-tight">
                Prospecte 5x mais. <span className="text-gray-500 font-normal">Com 3x menos custo.</span>
              </p>
              <p className="text-xl md:text-2xl text-gray-500 font-normal">
                Em menos tempo. Sem esforço.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-brand-blue text-white font-bold px-10 py-5 rounded-sm hover:bg-brand-blue/80 transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
              >
                Solicitar Demonstração
                <ArrowRight size={18} />
              </button>
              <a 
                href="#solucoes"
                className="bg-transparent border border-white/20 text-white font-bold px-10 py-5 rounded-sm hover:bg-white/5 transition-all uppercase text-sm tracking-widest text-center flex items-center justify-center gap-2"
              >
                Ver Tecnologia
              </a>
            </motion.div>

            {/* Micro Pain Cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
               <div className="p-4 bg-zinc-950 border border-white/5 flex gap-4 items-center">
                  <Clock size={20} className="text-red-500 shrink-0" />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">Leads esfriam <br/><span className="text-white">em 5 minutos</span></p>
               </div>
               <div className="p-4 bg-brand-blue/5 border border-brand-blue/20 flex gap-4 items-center">
                  <Zap size={20} className="text-brand-blue shrink-0" />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">Engage Max <br/><span className="text-brand-blue">Atende em 2s</span></p>
               </div>
            </div>
          </div>

          <div className="relative lg:block hidden justify-self-end w-full max-w-md">
             <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
             <div className="relative z-10">
                <AnimatedListDemo />
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Integrations Marquee */}
      <div className="bg-black border-b border-white/5 py-12">
         <div className="max-w-7xl mx-auto px-6 mb-6">
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.5em]">Ecossistema de Integração Nativa</span>
         </div>
         <MarqueeDemo />
      </div>

      {/* Seção: Persuasão Adaptativa */}
      <section className="py-24 bg-zinc-950 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-20 bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
             <AdaptiveChat />
          </div>
          <div className="order-1 lg:order-2 max-w-2xl">
             <span className="text-xs font-bold tracking-[0.4em] text-brand-blue uppercase mb-6 block text-center lg:text-left">Inteligência Comportamental</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight text-center lg:text-left">
               Abordagem sob medida <br/>
               <span className="text-brand-blue italic">para cada perfil de lead.</span>
             </h2>
             <p className="text-lg text-gray-500 mb-10 leading-relaxed text-center lg:text-left">
               A Engage Max não segue roteiros engessados. Nossa IA analisa o perfil psicológico e a urgência do lead em tempo real, adaptando o vocabulário, o tom de voz e a estratégia de persuasão para garantir conversas naturais e humanas que convertem.
             </p>
             <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center lg:text-left">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center lg:justify-start gap-2 text-brand-blue">
                      <Sparkles size={16} /> Naturalidade
                   </h4>
                   <p className="text-xs text-gray-600 leading-relaxed font-medium">Sem vícios de linguagem ou sotaques robóticos. A IA fala a língua do seu cliente.</p>
                </div>
                <div className="text-center lg:text-left">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center lg:justify-start gap-2 text-brand-blue">
                      <BrainCircuit size={16} /> Contexto
                   </h4>
                   <p className="text-xs text-gray-600 leading-relaxed font-medium">Identificação automática de objeções e contra-argumentação baseada em frameworks de elite.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Grid de Funcionalidades Institucional */}
      <section id="solucoes" className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <BarChart3 className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">KPIs Automáticos</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Monitoramento de CAC, LTV e ROI processados sem intervenção humana.</p>
            </div>
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <TrendingUp className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Performance Analítica</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Otimização de conversão baseada em dados históricos.</p>
            </div>
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <LayoutDashboard className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Pipeline Autônomo</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Gerenciamento automático de CRM através da análise semântica.</p>
            </div>
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <UserPlus className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Ingestão de Dados</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Captura e higienização instantânea de leads.</p>
            </div>
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Lightbulb className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Inteligência Tática</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Geração de resumos executivos e insights estratégicos.</p>
            </div>
            <div className="bg-black p-10 hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Calendar className="text-brand-blue mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Agendamento Otimizado</h3>
              <p className="text-gray-500 leading-relaxed text-sm">Links de agenda baseados em probabilidade de conversão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Estratégia & Operação */}
      <section id="diferenciais" className="py-24 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Gestão de Fluxo Comercial e <br/><SpecialText inView className="text-brand-blue">Orquestração de Closers</SpecialText></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                   <div className="w-px h-12 bg-brand-blue"></div>
                   <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-2">Roteiros Dinâmicos</h4>
                      <p className="text-gray-500 text-sm">Scripts adaptados via IA para frameworks de alta conversão.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-px h-12 bg-brand-blue"></div>
                   <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-2">Roleta de Vendas</h4>
                      <p className="text-gray-500 text-sm">Distribuição inteligente baseada em performance e presença.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-px h-12 bg-brand-blue"></div>
                   <div>
                      <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-2">Conflito Zero</h4>
                      <p className="text-gray-500 text-sm">Sincronização multicanal de agenda sem sobreposição.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-white/10 bg-black rounded-sm shadow-2xl">
               <Demo />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Demonstração Visual (Scroll Animation) */}
      <section id="performance" className="bg-black py-20 overflow-hidden border-b border-white/5">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold tracking-[0.4em] text-brand-blue uppercase mb-4 block">Interface de Comando</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8 text-center px-4">
                Sua operação comercial em <br/>
                <SpecialText inView className="text-brand-blue italic">um único cockpit estratégico</SpecialText>.
              </h2>
            </div>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400&h=800"
            alt="Dashboard Engage Max"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Remarketing Profissional */}
      <section className="py-24 bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <Target className="text-brand-blue/20 absolute -top-12 -left-12" size={160} />
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight relative z-10">Onipresença <br/><span className="text-brand-blue">Inteligente</span></h2>
             <p className="text-lg text-gray-500 leading-relaxed mb-10">Recupere oportunidades perdidas com cadências de remarketing automáticas e personalizadas.</p>
             <button 
               onClick={() => setIsModalOpen(true)}
               className="bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all"
             >
               Ativar Remarketing Agora
             </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-8 border border-white/5 bg-zinc-950 shadow-xl">
                <span className="text-4xl font-bold text-white">+28%</span>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Taxa de Reengajamento</p>
             </div>
             <div className="p-8 border border-white/5 bg-zinc-950 shadow-xl">
                <span className="text-4xl font-bold text-white">-45%</span>
                <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-bold">Lead Lost Rate</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contato" className="py-32 bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">Prepare sua operação para a <br/><SpecialText inView className="text-brand-blue">escala do próximo nível</SpecialText>.</h2>
          <p className="text-gray-500 mb-12 text-lg">Pare de rasgar dinheiro com processos manuais lentos. Comece agora sua transformação.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black font-bold px-16 py-6 rounded-sm hover:bg-brand-blue hover:text-white transition-all uppercase text-sm tracking-[0.2em] shadow-2xl"
          >
            Agendar Demonstração Técnica
          </button>
        </div>
      </section>

      {/* Footer Sóbrio */}
      <footer className="border-t border-white/5 py-20 bg-black text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
           <img src="/logo.png" alt="Engage Max" className="h-12 md:h-16 object-contain opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
           <p className="text-[10px] font-bold text-gray-700 tracking-[0.5em] uppercase">© 2026 Engage Max • Inteligência Comercial Autônoma</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
