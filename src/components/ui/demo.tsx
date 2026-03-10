"use client";

import Plan from "./agent-plan";

export function Demo() {
  return (
    <div className="flex flex-col w-full h-full max-w-lg mx-auto">
      <div className="mb-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">IA Execution Monitor</span>
         </div>
         <span className="text-[10px] font-mono text-brand-purple">v1.0.42_STABLE</span>
      </div>
      <Plan />
    </div>
  );
}
