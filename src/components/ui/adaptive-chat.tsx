"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  role: "user" | "bot";
  content: string;
  strategy?: string;
}

const CONVERSATION: Message[] = [
  { id: 1, role: "user", content: "Gostaria de saber o preço, mas meu time é pequeno e não sei se faz sentido agora." },
  { id: 2, role: "bot", content: "Entendo perfeitamente. Na verdade, a Engage Max foi desenhada justamente para times que precisam escalar sem contratar mais pessoas. Qual seu maior gargalo hoje?", strategy: "Empatia + Reenquadramento" },
  { id: 3, role: "user", content: "O problema é que os leads chegam e a gente demora horas pra responder." },
  { id: 4, role: "bot", content: "Exatamente onde somos imbatíveis. Nossa IA reduz esse tempo para 2 segundos. Se eu te mostrar que o custo por lead atendido cai 70%, o preço deixaria de ser um peso?", strategy: "Ataque à Dor + SPIN Selling" },
];

export function AdaptiveChat() {
  const [index, setIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (index < CONVERSATION.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, CONVERSATION[index]]);
        setIndex(index + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const reset = setTimeout(() => {
        setVisibleMessages([]);
        setIndex(0);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-950 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-white/[0.03] p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <BrainCircuit size={14} className="text-brand-blue" /> 
            IA Adaptativa em tempo real
          </span>
        </div>
        <Sparkles size={14} className="text-brand-blue" />
      </div>

      <div className="p-6 h-[400px] overflow-y-auto space-y-6 flex flex-col">
        <AnimatePresence>
          {visibleMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex flex-col max-w-[85%]",
                msg.role === "bot" ? "self-start" : "self-end"
              )}
            >
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.role === "bot" 
                  ? "bg-brand-blue/10 border border-brand-blue/20 text-gray-200 rounded-tl-none" 
                  : "bg-zinc-900 border border-white/5 text-gray-400 rounded-tr-none"
              )}>
                {msg.content}
              </div>
              
              {msg.strategy && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-[9px] font-bold text-brand-blue uppercase tracking-tighter flex items-center gap-1"
                >
                  <Bot size={10} /> Estratégia: {msg.strategy}
                </motion.span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="p-4 bg-white/[0.02] border-t border-white/5">
        <div className="h-2 w-1/2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-blue"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
