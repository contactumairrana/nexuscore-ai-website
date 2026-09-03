import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-4 z-50 px-4 mb-8">
      <div className="max-w-7xl mx-auto glass-nav rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-sm">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="NexusCore AI Labs" 
            className="w-10 h-10 rounded-xl object-cover shadow-md border border-slate-200 group-hover:scale-105 transition-transform" 
          />
          <div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
              NexusCore <span className="text-blue-600 font-bold text-sm bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">AI LABS</span>
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services & Pricing</a>
          <a href="#tools" className="hover:text-blue-600 transition-colors">Free Tools Hub</a>
          <a href="#swarm" className="hover:text-blue-600 transition-colors">AI Swarm</a>
          <a href="#proof" className="hover:text-blue-600 transition-colors">Before vs After</a>
        </nav>

        {/* Live Status & CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Swarm Active • 15-Min Delivery</span>
          </div>

          <button
            onClick={() => onOpenModal('Emergency Engineering Fix ($15)')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>Hire Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
