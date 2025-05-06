
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TabContent from '@/components/TabContent';

const Index = () => {
  const [activeTab, setActiveTab] = useState('announcements');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Scroll down slightly past the hero section when changing tabs
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById('content-section')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="content-section">
          <TabContent activeTab={activeTab} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
