import React from 'react';
import { CheckCircle, XCircle, ShieldAlert, Award } from 'lucide-react';

export const ProofSlider: React.FC = () => {
  return (
    <section id="proof" className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Quality Verification</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          Real Before vs After Engineering Proofs
        </h2>
        <p className="text-base text-slate-600 mt-3">
          Every task delivered comes with concrete proof and automated test execution verification logs.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Before Fix */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-6 relative">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-rose-100 text-rose-800 mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>BEFORE OUR FIX (BROKEN / SLOW)</span>
            </span>

            <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-3">
              Slow Db2 Queries, Broken Mobile Layout & Webhook Errors
            </h3>

            <ul className="space-y-3 font-mono text-xs text-rose-900">
              <li className="flex items-start gap-2 bg-rose-100/60 p-2.5 rounded-lg border border-rose-200/60">
                <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Db2 SQL Latency:</strong> 8.4 Seconds (Full table scan without composite indexes).
                </div>
              </li>
              <li className="flex items-start gap-2 bg-rose-100/60 p-2.5 rounded-lg border border-rose-200/60">
                <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Mobile Viewport:</strong> Horizontal scrollbar visible, broken flexbox on iPhone 15.
                </div>
              </li>
              <li className="flex items-start gap-2 bg-rose-100/60 p-2.5 rounded-lg border border-rose-200/60">
                <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Stripe Webhooks:</strong> 500 Internal Server Error (Missing raw body signature parser).
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: After Fix */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 relative">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 mb-4">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>AFTER SWARM DELIVERY (100% VERIFIED)</span>
            </span>

            <h3 className="font-heading font-extrabold text-lg text-slate-900 mb-3">
              Optimized Indexes, Fluid Layouts & 200 OK Listeners
            </h3>

            <ul className="space-y-3 font-mono text-xs text-emerald-900">
              <li className="flex items-start gap-2 bg-emerald-100/60 p-2.5 rounded-lg border border-emerald-200/60">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Db2 SQL Latency:</strong> <span className="text-emerald-700 font-bold">0.12 Seconds (70x Speedup)</span> via index rebuild.
                </div>
              </li>
              <li className="flex items-start gap-2 bg-emerald-100/60 p-2.5 rounded-lg border border-emerald-200/60">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Mobile Viewport:</strong> 100% Fluid on all screens (0px horizontal overflow).
                </div>
              </li>
              <li className="flex items-start gap-2 bg-emerald-100/60 p-2.5 rounded-lg border border-emerald-200/60">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Stripe Webhooks:</strong> 200 OK verified with cryptographic signature check.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
