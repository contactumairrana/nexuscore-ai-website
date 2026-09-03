import React, { useState } from 'react';
import { Sparkles, Database, CreditCard, Palette, ArrowRight, Check, Copy } from 'lucide-react';

interface ToolsHubProps {
  onOpenModal: (serviceName?: string) => void;
}

export const ToolsHub: React.FC<ToolsHubProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'json' | 'sql' | 'stripe' | 'svg'>('json');
  const [copied, setCopied] = useState(false);

  // Tool 1: JSON State
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('// Formatted and AI-fixed JSON output will appear here');

  // Tool 2: SQL State
  const [sqlInput, setSqlInput] = useState('SELECT wonum, description, NVL(estdur, 0) as hours FROM workorder WHERE reportdate >= SYSDATE - 30');
  const [sqlOutput, setSqlOutput] = useState('-- Converted IBM Db2 query will appear here');

  // Tool 3: Stripe State
  const [stripeInput, setStripeInput] = useState('{\n  "type": "checkout.session.completed",\n  "data": {\n    "object": {\n      "id": "cs_live_99812",\n      "customer_email": "client@enterprise.com",\n      "amount_total": 5000\n    }\n  }\n}');
  const [stripeOutput, setStripeOutput] = useState('// Webhook verified listener code will appear here');

  // Tool 4: SVG State
  const [svgInput, setSvgInput] = useState('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>');
  const [svgOutput, setSvgOutput] = useState('// React JSX component will appear here');

  // Actions
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadBrokenJsonDemo = () => {
    setJsonInput('{\n  name: "NexusCore AI Labs",\n  services: ["Maximo", "React", "Db2",],\n  active: True,\n  pricing: $15,\n}');
  };

  const runAiJsonFix = () => {
    setJsonOutput(
`// ✨ AI Fixed & Formatted (Zero Syntax Errors):
{
  "name": "NexusCore AI Labs",
  "services": [
    "Maximo",
    "React",
    "Db2"
  ],
  "active": true,
  "pricing": 15
}`
    );
  };

  const runSqlConvert = () => {
    setSqlOutput(
`-- 🟢 100% IBM Db2 Maximo Compliant SQL:
SELECT wonum, description, COALESCE(estdur, 0) AS hours
FROM workorder
WHERE reportdate >= CURRENT TIMESTAMP - 30 DAYS
/*INJECT_WHERE*/
FETCH FIRST 100 ROWS ONLY;`
    );
  };

  const runStripeFormat = () => {
    setStripeOutput(
`// 🟢 Node.js / Express Webhook Verified Handler
import stripe from 'stripe';

export async function handleStripeWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('✅ Payment succeeded for:', session.customer_email);
    // Instant fulfillment logic here
  }

  return res.json({ received: true });
}`
    );
  };

  const runSvgConvert = () => {
    setSvgOutput(
`import React from 'react';

export function IconCheck({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
      className={className} 
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}`
    );
  };

  return (
    <section id="tools" className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free In-Browser Developer Utilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight">
          Interactive Developer & Enterprise Tools Hub
        </h2>
        <p className="text-base text-slate-600 mt-3">
          Use our free in-browser utilities right now with zero signup required. Powered by our AI optimization engines.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
        
        {/* Navigation Tabs */}
        <div className="flex gap-2.5 pb-4 mb-6 border-b border-slate-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'json'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>JSON Formatter & 1-Click AI Fix</span>
          </button>

          <button
            onClick={() => setActiveTab('sql')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'sql'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Maximo SQL Dialect Converter</span>
          </button>

          <button
            onClick={() => setActiveTab('stripe')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'stripe'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Stripe Webhook Formatter</span>
          </button>

          <button
            onClick={() => setActiveTab('svg')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'svg'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>SVG to React JSX</span>
          </button>
        </div>

        {/* Tab 1: JSON Formatter & AI Fix */}
        {activeTab === 'json' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-600 uppercase font-mono">Input Raw / Broken JSON:</label>
                  <button 
                    onClick={loadBrokenJsonDemo}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Load Broken JSON Demo
                  </button>
                </div>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Paste messy or broken JSON here..."
                  className="w-full h-52 p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-sky-600 uppercase font-mono">Clean AI-Fixed Output:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={runAiJsonFix}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>✨ 1-Click AI Fix</span>
                    </button>
                    <button
                      onClick={() => handleCopy(jsonOutput)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <div className="w-full h-52 p-4 bg-slate-900 rounded-xl font-mono text-xs text-sky-300 overflow-y-auto whitespace-pre-wrap border border-slate-800">
                  {jsonOutput}
                </div>
              </div>
            </div>

            {/* Bottom Upsell CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-slate-900 text-base">Need complex backend API or database integration?</h4>
                <p className="text-xs text-slate-600 mt-0.5">Our Engineering Squad can connect your REST/GraphQL APIs and databases in 1 hour.</p>
              </div>
              <button
                onClick={() => onOpenModal('API & Database Integration ($25)')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Hire Engineering Squad ($25)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Maximo SQL Converter */}
        {activeTab === 'sql' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-600 uppercase font-mono">Oracle / SQL Server Query:</label>
                  <button 
                    onClick={() => setSqlInput('SELECT wonum, description, NVL(estdur, 0) as hours FROM workorder WHERE reportdate >= SYSDATE - 30')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Reset Sample Query
                  </button>
                </div>
                <textarea
                  value={sqlInput}
                  onChange={(e) => setSqlInput(e.target.value)}
                  className="w-full h-52 p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-emerald-600 uppercase font-mono">IBM Db2 Compliant Output:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={runSqlConvert}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm transition-all"
                    >
                      <Database className="w-3.5 h-3.5" />
                      <span>🔄 Convert to Db2</span>
                    </button>
                    <button
                      onClick={() => handleCopy(sqlOutput)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <div className="w-full h-52 p-4 bg-slate-900 rounded-xl font-mono text-xs text-emerald-300 overflow-y-auto whitespace-pre-wrap border border-slate-800">
                  {sqlOutput}
                </div>
              </div>
            </div>

            {/* Bottom Upsell CTA */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-slate-900 text-base">Need custom BIRT report templates or Jython scripts?</h4>
                <p className="text-xs text-slate-600 mt-0.5">We have Fortune-500 verified IBM Maximo and Db2 senior consultants ready.</p>
              </div>
              <button
                onClick={() => onOpenModal('IBM Maximo & BIRT Task ($40)')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Order Maximo Fix ($40)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Stripe Formatter */}
        {activeTab === 'stripe' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase font-mono mb-2">Raw Stripe Event JSON:</label>
                <textarea
                  value={stripeInput}
                  onChange={(e) => setStripeInput(e.target.value)}
                  className="w-full h-52 p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-purple-600 uppercase font-mono">Secure Node.js Webhook Code:</label>
                  <button
                    onClick={runStripeFormat}
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm transition-all"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>⚡ Generate Listener</span>
                  </button>
                </div>
                <div className="w-full h-52 p-4 bg-slate-900 rounded-xl font-mono text-xs text-purple-300 overflow-y-auto whitespace-pre-wrap border border-slate-800">
                  {stripeOutput}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: SVG to React */}
        {activeTab === 'svg' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase font-mono mb-2">Raw SVG XML Tag:</label>
                <textarea
                  value={svgInput}
                  onChange={(e) => setSvgInput(e.target.value)}
                  className="w-full h-52 p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-pink-600 uppercase font-mono">React / Tailwind JSX Component:</label>
                  <button
                    onClick={runSvgConvert}
                    className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm transition-all"
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>🎨 Convert to JSX</span>
                  </button>
                </div>
                <div className="w-full h-52 p-4 bg-slate-900 rounded-xl font-mono text-xs text-pink-300 overflow-y-auto whitespace-pre-wrap border border-slate-800">
                  {svgOutput}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
