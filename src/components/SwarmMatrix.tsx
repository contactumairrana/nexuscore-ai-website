import React from 'react';
import { SQUADS } from '../data/squads';
import { Bot } from 'lucide-react';

export const SwarmMatrix: React.FC = () => {
  return (
    <section id="swarm" className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
          <Bot className="w-3.5 h-3.5" />
          <span>Our AI Engineering Hierarchy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          The 9-Squad Specialized Multi-AI Swarm
        </h2>
        <p className="text-base text-slate-600 mt-3">
          Every client request is autonomously analyzed by the Front-Desk Router, assigned to dedicated domain squads, and strictly verified by our Lead AI Architect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SQUADS.map((squad) => (
          <div 
            key={squad.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span 
                  className="text-xs font-bold px-2.5 py-1 rounded-full text-white font-mono"
                  style={{ backgroundColor: squad.color }}
                >
                  {squad.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Online</span>
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                {squad.name}
              </h3>
              <div className="text-xs font-semibold text-slate-500 mb-3 font-mono">
                Role: {squad.leadRole}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {squad.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {squad.stack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
