
import React from 'react';
import { Calendar } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-techBlue relative overflow-hidden transition-colors">
      {/* Translucent Industrial Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-multiply grayscale"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565172341767-40f3b75525b8?auto=format&fit=crop&q=80&w=2070')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-grid invert opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 text-dark">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
          Ready to Elevate Your Quality Standards?
        </h2>
        <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">
          Join the industry leaders leveraging Axon One for high-precision analytics and reliable decision-making.
        </p>
        
        <button className="px-10 py-5 bg-dark text-techBlue font-bold text-lg rounded-xl shadow-2xl hover:translate-y-[-2px] transition-transform flex items-center mx-auto space-x-3 group relative overflow-hidden">
          <Calendar size={24} />
          <span>Schedule a Personalized Demo</span>
        </button>
        
        <p className="mt-8 text-sm font-bold opacity-60">
          No commitment required. Setup takes less than 48 hours.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
