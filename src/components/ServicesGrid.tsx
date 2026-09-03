import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/services';
import { ArrowRight, Check, Zap } from 'lucide-react';

interface ServicesGridProps {
  onOpenModal: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenModal }) => {
  const [filter, setFilter] = useState<'all' | 'quick' | 'core' | 'enterprise'>('all');

  const filteredServices = SERVICES.filter(s => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <section id="services" className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>Transparent Flat Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          Fixed-Price Engineering Packages
        </h2>
        <p className="text-base text-slate-600 mt-3">
          Guaranteed same-day turnaround with automated verification logs. Zero hourly billing surprises.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Packages ({SERVICES.length})
          </button>
          <button
            onClick={() => setFilter('quick')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'quick'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            ⚡ Quick Fixes ($15 - $20)
          </button>
          <button
            onClick={() => setFilter('core')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'core'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            🧩 Core Services ($25 - $35)
          </button>
          <button
            onClick={() => setFilter('enterprise')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'enterprise'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏛️ Enterprise & Maximo ($50 - $75)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service: ServiceItem) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between relative group"
          >
            {service.popular && (
              <span className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                Most Popular
              </span>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {service.categoryLabel}
                </span>
                <span className="text-xs font-bold font-mono text-emerald-600">
                  ⚡ {service.turnaround}
                </span>
              </div>

              <h3 className="font-heading font-black text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-2xl font-black font-heading text-slate-900">{service.price}</span>
                <span className="text-xs text-slate-500 ml-1 font-medium">/ fixed</span>
              </div>

              <button
                onClick={() => onOpenModal(`${service.title} (${service.price})`)}
                className="bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
