
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SecondaryNav from './components/SecondaryNav';
import FeatureHighlight from './components/FeatureHighlight';
import InteractiveFeatureSplit from './components/InteractiveFeatureSplit';
import UseCasesGrid from './components/UseCasesGrid';
import ImpactMetrics from './components/ImpactMetrics';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`relative overflow-x-hidden min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Background Layer 1: Grid Patterns */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40"></div>
      
      {/* Background Layer 2: Atmospheric Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-techBlue/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-approvalGreen/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <SecondaryNav />
        <section id="features">
          <FeatureHighlight />
        </section>
        <section id="dashboard">
          <InteractiveFeatureSplit />
        </section>
        <section id="use-cases">
          <UseCasesGrid />
        </section>
        <section id="roi">
          <ImpactMetrics />
        </section>
        <section id="integrations">
          <Integrations />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
