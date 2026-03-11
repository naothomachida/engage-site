"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  CircleAlert,
  CircleDotDashed,
  CircleX,
} from "lucide-react";
import { motion, AnimatePresence, LayoutGroup, Variants } from "framer-motion";

// Type definitions
interface Subtask {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  tools?: string[]; // Optional array of MCP server tools
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  level: number;
  dependencies: string[];
  subtasks: Subtask[];
}

// Initial task data
const initialTasks: Task[] = [
  {
    id: "1",
    title: "Triagem Inicial do Lead",
    description: "IA analisa o perfil do lead e define a estratégia de abordagem.",
    status: "completed",
    priority: "high",
    level: 0,
    dependencies: [],
    subtasks: [
      {
        id: "1.1",
        title: "Enriquecimento de dados",
        description: "Captura de faturamento, tamanho da empresa e LinkedIn.",
        status: "completed",
        priority: "high",
        tools: ["data-enricher", "linkedin-agent"],
      },
      {
        id: "1.2",
        title: "Análise de ICP",
        description: "Validação se o lead está dentro do perfil de cliente ideal.",
        status: "completed",
        priority: "medium",
        tools: ["scoring-engine"],
      },
    ],
  },
  {
    id: "2",
    title: "Execução de Prospecção Multicanal",
    description: "Abordagem automatizada via WhatsApp e E-mail.",
    status: "in-progress",
    priority: "high",
    level: 0,
    dependencies: ["1"],
    subtasks: [
      {
        id: "2.1",
        title: "Envio de WhatsApp Personalizado",
        description: "Mensagem adaptada baseada na dor identificada na triagem.",
        status: "completed",
        priority: "high",
        tools: ["whatsapp-api"],
      },
      {
        id: "2.2",
        title: "Follow-up de E-mail",
        description: "Sequência de cadência se não houver resposta em 2h.",
        status: "in-progress",
        priority: "medium",
        tools: ["email-sequencer"],
      },
    ],
  },
  {
    id: "3",
    title: "Agendamento com Closer",
    description: "Conversão do interesse em reunião na agenda.",
    status: "pending",
    priority: "high",
    level: 1,
    dependencies: ["2"],
    subtasks: [
      {
        id: "3.1",
        title: "Validação de Horário",
        description: "Verificação de conflito zero na agenda do Closer.",
        status: "pending",
        priority: "medium",
        tools: ["calendar-sync"],
      },
      {
        id: "3.2",
        title: "Confirmação de Reunião",
        description: "Envio de convite e lembrete automático.",
        status: "pending",
        priority: "high",
        tools: ["notification-service"],
      },
    ],
  },
];

export default function Plan() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [expandedTasks, setExpandedTasks] = useState<string[]>(["2"]);
  const [expandedSubtasks, setExpandedSubtasks] = useState<{
    [key: string]: boolean;
  }>({});
  
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId],
    );
  };

  const toggleSubtaskExpansion = (taskId: string, subtaskId: string) => {
    const key = `${taskId}-${subtaskId}`;
    setExpandedSubtasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const statuses = ["completed", "in-progress", "pending", "need-help", "failed"];
          const currentIndex = Math.floor(Math.random() * statuses.length);
          const newStatus = statuses[currentIndex];
          const updatedSubtasks = task.subtasks.map((subtask) => ({
            ...subtask,
            status: newStatus === "completed" ? "completed" : subtask.status,
          }));
          return { ...task, status: newStatus, subtasks: updatedSubtasks };
        }
        return task;
      }),
    );
  };

  const toggleSubtaskStatus = (taskId: string, subtaskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const updatedSubtasks = task.subtasks.map((subtask) => {
            if (subtask.id === subtaskId) {
              const newStatus = subtask.status === "completed" ? "pending" : "completed";
              return { ...subtask, status: newStatus };
            }
            return subtask;
          });
          const allSubtasksCompleted = updatedSubtasks.every((s) => s.status === "completed");
          return { ...task, subtasks: updatedSubtasks, status: allSubtasksCompleted ? "completed" : task.status };
        }
        return task;
      }),
    );
  };

  const taskVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -5 },
    visible: { opacity: 1, y: 0, transition: { type: (prefersReducedMotion ? "tween" : "spring") as any, stiffness: 500, damping: 30 } },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -5, transition: { duration: 0.15 } }
  };

  const subtaskListVariants: Variants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { height: "auto", opacity: 1, overflow: "visible", transition: { duration: 0.25, staggerChildren: prefersReducedMotion ? 0 : 0.05, when: "beforeChildren", ease: [0.2, 0.65, 0.3, 0.9] as any } },
    exit: { height: 0, opacity: 0, overflow: "hidden", transition: { duration: 0.2, ease: [0.2, 0.65, 0.3, 0.9] as any } }
  };

  const subtaskVariants: Variants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -10 },
    visible: { opacity: 1, x: 0, transition: { type: (prefersReducedMotion ? "tween" : "spring") as any, stiffness: 500, damping: 25 } },
    exit: { opacity: 0, x: prefersReducedMotion ? 0 : -10, transition: { duration: 0.15 } }
  };

  const subtaskDetailsVariants: Variants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "visible", transition: { duration: 0.25, ease: [0.2, 0.65, 0.3, 0.9] as any } }
  };

  return (
    <div className="bg-transparent text-foreground h-full overflow-hidden p-0">
      <motion.div 
        className="bg-zinc-950 border-white/5 rounded-lg border shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <LayoutGroup>
          <div className="p-4">
            <ul className="space-y-1">
              {tasks.map((task, index) => {
                const isExpanded = expandedTasks.includes(task.id);
                const isCompleted = task.status === "completed";

                return (
                  <motion.li
                    key={task.id}
                    className={` ${index !== 0 ? "mt-1 pt-2 border-t border-white/5" : ""} `}
                    variants={taskVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="group flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-white/5 transition-colors"
                      onClick={() => toggleTaskExpansion(task.id)}
                    >
                      <div className="mr-3 flex-shrink-0">
                        {task.status === "completed" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : task.status === "in-progress" ? (
                          <CircleDotDashed className="h-5 w-5 text-brand-purple animate-spin-slow" />
                        ) : (
                          <Circle className="text-gray-600 h-5 w-5" />
                        )}
                      </div>

                      <div className="flex flex-grow items-center justify-between min-w-0">
                        <span className={`font-medium truncate ${isCompleted ? "text-gray-600 line-through" : "text-gray-200"}`}>
                          {task.title}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest ml-4 ${
                          task.status === "completed" ? "bg-green-500/10 text-green-500" : 
                          task.status === "in-progress" ? "bg-brand-purple/10 text-brand-purple" : 
                          "bg-gray-800 text-gray-400"
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          variants={subtaskListVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="ml-8 border-l border-white/10 pl-4 py-2"
                        >
                          {task.subtasks.map((subtask) => (
                            <motion.div 
                              key={subtask.id} 
                              variants={subtaskVariants}
                              className="mb-3 last:mb-0"
                            >
                              <div className="flex items-center gap-3">
                                {subtask.status === "completed" ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Circle className="h-4 w-4 text-gray-700" />
                                )}
                                <span className={`text-sm ${subtask.status === "completed" ? "text-gray-600" : "text-gray-400"}`}>
                                  {subtask.title}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {subtask.tools?.map((tool, idx) => (
                                  <span key={idx} className="text-[9px] bg-white/5 text-gray-500 border border-white/10 px-1.5 py-0.5 uppercase font-bold tracking-tighter">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </LayoutGroup>
      </motion.div>
    </div>
  );
}
