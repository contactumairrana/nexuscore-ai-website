import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 rounded-t-3xl border-t border-slate-800 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/logo.jpg" alt="NexusCore Logo" className="w-8 h-8 rounded-lg object-cover border border-slate-700" />
              <span className="font-heading font-black text-lg text-white">NexusCore AI Labs</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Autonomous Enterprise AI Engineering & Rapid Web Solutions. High-speed Fortune-500 software engineering starting at $15.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-3">Popular Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Figma to React ($20)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile CSS Fix ($15)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Stripe Integration ($30)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maximo BIRT ($50)</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-3">Free In-Browser Tools</h4>
            <ul className="space-y-2">
              <li><a href="#tools" className="hover:text-white transition-colors">JSON Formatter & AI Fix</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Maximo SQL Converter</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Stripe Webhook Tool</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">SVG to JSX</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-3">Global Payment Reception</h4>
            <p className="text-slate-400 leading-relaxed mb-3">
              Apple Pay, Visa, Mastercard, NayaPay, SadaBiz, Standard Chartered & Meezan Bank Direct Wire.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 font-semibold">
              ✔ 100% Satisfaction & Verification Guarantee
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-800 text-center text-slate-400 text-xs flex flex-wrap justify-between items-center gap-2">
          <div>
            © 2026 NexusCore AI Labs (NexusCore Technologies). All Rights Reserved.
          </div>
          <div>
            Chief Executive Officer: <strong className="text-slate-200">Muhammad Umair</strong> (<a href="mailto:contact.umairrana@gmail.com" className="text-blue-400 hover:underline">contact.umairrana@gmail.com</a>)
          </div>
        </div>
      </div>
    </footer>
  );
};
