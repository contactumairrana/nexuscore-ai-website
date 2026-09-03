export interface SquadItem {
  id: number;
  name: string;
  leadRole: string;
  badge: string;
  color: string;
  stack: string[];
  description: string;
}

export const SQUADS: SquadItem[] = [
  {
    id: 1,
    name: 'Squad 1: Maximo & WAS',
    leadRole: 'Maximo Infrastructure Lead',
    badge: 'Enterprise',
    color: '#0284c7',
    stack: ['Maximo 7.6 / MAS 9', 'Jython Scripts', 'MBOs', 'WebSphere JVM'],
    description: 'Specialized in IBM Maximo automation scripts, MBO launch points, WebSphere JVM heap memory tuning and crontasks.'
  },
  {
    id: 2,
    name: 'Squad 2: Multi-DB Admin',
    leadRole: 'Database Reliability Lead',
    badge: 'Database',
    color: '#d97706',
    stack: ['IBM Db2 LUW', 'Oracle 19c', 'MS SQL', 'HADR Tuning'],
    description: 'Expertise in Db2 HADR replication, Oracle queries, execution plans, index tuning, and dialect translation.'
  },
  {
    id: 3,
    name: 'Squad 3: BIRT & Cognos',
    leadRole: 'Enterprise Analytics Lead',
    badge: 'Reporting',
    color: '#059669',
    stack: ['Eclipse BIRT', 'Cognos Analytics', 'TM1 Cubes', 'SQL Datasets'],
    description: 'Design and optimization of complex IBM BIRT .rptdesign templates, /*INJECT_WHERE*/ wrappers, and Cognos BI dashboards.'
  },
  {
    id: 4,
    name: 'Squad 4: Pentaho & EBS',
    leadRole: 'ETL & Integration Lead',
    badge: 'Integrations',
    color: '#dc2626',
    stack: ['Pentaho Kettle', 'Oracle EBS', 'Maximo MIF', 'JMS Queues'],
    description: 'Build robust ETL data pipelines, XML/JSON payload transformations, and seamless enterprise system integrations.'
  },
  {
    id: 5,
    name: 'Squad 5: Desktop Studio',
    leadRole: 'Commercial Product Lead',
    badge: 'Software',
    color: '#7c3aed',
    stack: ['PySide6 / Qt', 'RSA-2048 Licensing', 'Local RAG', 'FastMCP'],
    description: 'Engineering the Maximo AI Studio Enterprise desktop app with hardware-locked licensing and offline intelligence.'
  },
  {
    id: 6,
    name: 'Squad 6: Full-Stack Web',
    leadRole: 'Web Engineering Lead',
    badge: 'Full-Stack',
    color: '#2563eb',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'FastAPI / Node'],
    description: 'Rapid production web apps, ultra-fast SaaS portals, REST/GraphQL APIs, and responsive UI components.'
  },
  {
    id: 7,
    name: 'Squad 7: Figma & Design',
    leadRole: 'UI/UX & Graphics Lead',
    badge: 'UI/UX',
    color: '#db2777',
    stack: ['Figma to Code', 'Layered PSD', 'Design Systems', 'CSS Flex/Grid'],
    description: 'Pixel-perfect conversion of Figma/PSD designs to code with fluid mobile responsiveness and modern aesthetics.'
  },
  {
    id: 8,
    name: 'Squad 8: Stripe & DevOps',
    leadRole: 'E-Com & Cloud Lead',
    badge: 'DevOps',
    color: '#0d9488',
    stack: ['Stripe APIs', 'Webhooks', 'Cloudflare CDN', 'Vercel Edge'],
    description: 'Securing payment gateways, recurring subscriptions, DNS records, free SSL certificates, and 99.99% uptime.'
  },
  {
    id: 9,
    name: 'Squad 9: AI Lead Scout',
    leadRole: 'Growth & Outreach Lead',
    badge: 'Growth',
    color: '#ea580c',
    stack: ['Job Scraping', 'Reddit & Upwork', 'Proposal AI', 'Lead Gen'],
    description: 'Autonomous scanning of client job boards, real-time lead capture, and instant proposal draft generation.'
  }
];
