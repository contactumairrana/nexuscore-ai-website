import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ToolsHub } from './components/ToolsHub';
import { ServicesGrid } from './components/ServicesGrid';
import { SwarmMatrix } from './components/SwarmMatrix';
import { ProofSlider } from './components/ProofSlider';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Fast Engineering Task ($15)');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const whatsappDirectUrl = "https://wa.me/924144226718?text=" + encodeURIComponent("Hello Muhammad Umair (NexusCore AI Labs), I need a fast engineering task/consultation.");

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <div>
        <Navbar onOpenModal={handleOpenModal} />
        <main>
          <HeroSection onOpenModal={handleOpenModal} />
          <ToolsHub onOpenModal={handleOpenModal} />
          <ServicesGrid onOpenModal={handleOpenModal} />
          <SwarmMatrix />
          <ProofSlider />
        </main>
      </div>

      <Footer />

      {/* Direct Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp (+92 314 4226718)"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center gap-2 group border-2 border-white"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-sm pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
