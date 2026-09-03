import React, { useState } from 'react';
import { X, Send, MessageSquare, ShieldCheck } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Muhammad Umair (NexusCore AI Labs)! I would like to order: ${serviceTitle || 'Engineering Fix'}. My name is ${name || 'Client'}. Requirements: ${details || 'Need quick turnaround'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 p-1.5 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 text-xs font-bold font-mono text-blue-600 uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Instant Dispatch Gateway</span>
          </div>

          <h3 className="font-heading font-black text-2xl text-slate-900 mb-1">
            Order: {serviceTitle || 'Fast Engineering Task'}
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Enter your details below to send an instant email to our engineering desk, or connect directly on WhatsApp (+92 314 4226718).
          </p>

          {/* Standard Native FormSubmit POST — 100% Reliable Delivery */}
          <form 
            action="https://formsubmit.co/contact.umairrana@gmail.com" 
            method="POST" 
            className="space-y-4"
          >
            {/* FormSubmit Config Fields */}
            <input type="hidden" name="_subject" value={`🚀 New Client Order: ${serviceTitle}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://nexuscoretech.vercel.app" />
            <input type="hidden" name="Selected Service" value={serviceTitle} />

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1">Your Name / Company:</label>
              <input
                type="text"
                name="Client Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe / Acme Corp"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1">Your Email Address:</label>
              <input
                type="email"
                name="Client Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@company.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase font-mono mb-1">Requirement / Error Details:</label>
              <textarea
                name="Project Requirements"
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Paste error logs, Figma URL, or requirements here..."
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>🚀 Dispatch Task (Send Email)</span>
              </button>

              <a
                href={`https://wa.me/924144226718?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>💬 Direct WhatsApp 1-Click (+92 314 4226718)</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
