import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>AUTONOMOUS MULTI-AI ENGINEERING SWARM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 leading-[1.12] tracking-tight">
            Enterprise Engineering & Rapid Web Fixes —{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Delivered in Minutes.
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            From IBM Maximo MBO scripts, Db2 SQL optimization, and BIRT reports to pixel-perfect Next.js, Figma-to-Code, and Stripe webhooks. Senior engineering quality starting at just <strong className="text-slate-900 font-bold">$15</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenModal('60-Min Fast Engineering Fix ($15)')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <span>🚀 Order a 60-Min Fix ($15)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#tools"
              className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-slate-600" />
              <span>Explore Free In-Browser Tools</span>
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 max-w-xl">
            <div>
              <div className="text-2xl font-black font-heading text-slate-900">15 Mins</div>
              <div className="text-xs text-slate-500 font-medium">Average Turnaround</div>
            </div>
            <div>
              <div className="text-2xl font-black font-heading text-blue-600">100%</div>
              <div className="text-xs text-slate-500 font-medium">Automated QA Proof</div>
            </div>
            <div>
              <div className="text-2xl font-black font-heading text-slate-900">$15 Fixed</div>
              <div className="text-xs text-slate-500 font-medium">Zero Hidden Charges</div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Swarm Terminal */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900 rounded-2xl p-6 text-slate-100 shadow-2xl border border-slate-800 relative font-mono text-xs leading-relaxed overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Swarm Dispatch Engine • v2.4</span>
              </span>
            </div>

            {/* Terminal Log Stream */}
            <div className="space-y-2.5">
              <div className="text-slate-400">// Incoming client request received</div>
              <div className="text-sky-400 flex items-start gap-1.5">
                <span>[ROUTER]</span>
                <span className="text-slate-200">Dispatching to Squad 6 (Web) & Squad 8 (Stripe)...</span>
              </div>
              <div className="text-purple-400 flex items-start gap-1.5">
                <span>[LEAD-QA]</span>
                <span className="text-slate-300">Evaluating schema & generating automated test suite</span>
              </div>
              <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700/60 my-2 space-y-1">
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span>✔</span>
                  <span>Squad 6: Responsive CSS flexbox overflow fixed</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span>✔</span>
                  <span>Squad 8: Stripe signature verified & 200 OK listener</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span>✔</span>
                  <span>Squad 2: Db2 SQL latency dropped from 8.4s to 0.12s</span>
                </div>
              </div>
              <div className="text-amber-300 flex items-center justify-between pt-1">
                <span>[TOTAL EXECUTION TIME]</span>
                <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">7.2 Mins • PASSED</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
