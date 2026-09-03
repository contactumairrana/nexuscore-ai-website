export interface ServiceItem {
  id: string;
  title: string;
  category: 'quick' | 'core' | 'enterprise';
  categoryLabel: string;
  price: string;
  turnaround: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'figma-react',
    title: 'Figma to React / Tailwind',
    category: 'quick',
    categoryLabel: 'Quick Micro',
    price: '$20',
    turnaround: '15 Mins',
    description: 'Convert any Figma frame or design component into clean, pixel-perfect React / Next.js code.',
    features: ['100% Pixel-Perfect Match', 'Clean TailwindCSS & Typescript', 'Mobile & Desktop Responsive'],
    popular: true
  },
  {
    id: 'mobile-css',
    title: 'Mobile CSS & Responsive Repair',
    category: 'quick',
    categoryLabel: 'Quick Micro',
    price: '$15',
    turnaround: '10 Mins',
    description: 'Fix broken mobile viewports, navbar issues, horizontal scroll overflow, and flex/grid bugs.',
    features: ['Tested on iPhone & Android', 'Zero Layout Shifts (CLS Optimized)', 'Before vs After Screenshot Proof']
  },
  {
    id: 'stripe-integration',
    title: 'Stripe & PayPal Webhook Setup',
    category: 'core',
    categoryLabel: 'Core Service',
    price: '$30',
    turnaround: '15 Mins',
    description: 'Configure Checkout sessions, recurring subscriptions, and secure webhook listeners with 200 OK handlers.',
    features: ['Stripe Webhook 200 OK Handlers', 'SCA Security Compliance', 'Customer Portal & Invoicing'],
    popular: true
  },
  {
    id: 'chrome-extension',
    title: 'Custom Chrome Extension (V3)',
    category: 'core',
    categoryLabel: 'Core Service',
    price: '$35',
    turnaround: '20 Mins',
    description: 'Build a Manifest V3 browser extension for scraping, automation, workflow accelerators, or custom UI.',
    features: ['Manifest V3 Compliant', '1-Click Data Export to CSV', 'Background Service Worker']
  },
  {
    id: 'maximo-birt',
    title: 'IBM Maximo BIRT & SQL Tuning',
    category: 'enterprise',
    categoryLabel: 'Enterprise',
    price: '$50',
    turnaround: '20 Mins',
    description: 'Design and fix Eclipse BIRT .rptdesign templates, /*INJECT_WHERE*/ wrappers, and optimize slow DB2 queries.',
    features: ['100% IBM Compliance Guarantee', 'Db2 / Oracle Dialect Support', '10x Query Latency Drop']
  },
  {
    id: 'nextjs-landing',
    title: 'Modern Next.js SaaS Landing Page',
    category: 'enterprise',
    categoryLabel: 'Enterprise',
    price: '$75',
    turnaround: '30 Mins',
    description: 'Complete high-converting SaaS landing page with dark/light mode, 100/100 PageSpeed, and free Vercel hosting.',
    features: ['Next.js 15 + Tailwind CSS', '100/100 Google PageSpeed Score', 'Free SSL & Lifetime Hosting']
  },
  {
    id: 'python-scraper',
    title: 'Python Web Scraper & Lead Harvest',
    category: 'core',
    categoryLabel: 'Core Service',
    price: '$25',
    turnaround: '15 Mins',
    description: 'Extract structured data from any website into clean Excel (.xlsx), CSV, or Google Sheets with zero duplicate rows.',
    features: ['Clean Data Structuring', 'Proxy & Anti-Bot Protection', 'Excel / CSV Delivery']
  },
  {
    id: 'maximo-jython',
    title: 'Maximo Jython Automation Scripts',
    category: 'enterprise',
    categoryLabel: 'Enterprise',
    price: '$60',
    turnaround: '25 Mins',
    description: 'Custom MBO launch points, attribute validations, action scripts, and workflow automated conditions in Maximo.',
    features: ['Object / Attribute Launch Points', 'Zero-Downtime Script Deployment', 'Full Logging & Error Handling']
  },
  {
    id: 'seo-audit-fix',
    title: 'Technical SEO & Schema Markup',
    category: 'core',
    categoryLabel: 'Core Service',
    price: '$35',
    turnaround: '15 Mins',
    description: 'Fix Google Search Console indexing bugs, robots.txt, sitemap.xml, and inject JSON-LD rich schema markup.',
    features: ['Google Rich Snippets Ready', 'Core Web Vitals Boost', 'Complete Indexing Fix']
  }
];
