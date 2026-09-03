import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ToolsHub } from './components/ToolsHub';
import { ServicesGrid } from './components/ServicesGrid';
import { SwarmMatrix } from './components/SwarmMatrix';
import { ProofSlider } from './components/ProofSlider';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Fast Engineering Task ($15)');

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
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
    </div>
  );
}

export default App;
