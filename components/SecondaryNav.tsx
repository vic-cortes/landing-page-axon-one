
import React from 'react';

const SecondaryNav: React.FC = () => {
  const items = [
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'ROI', href: '#roi' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <div className="bg-white/50 dark:bg-dark/50 border-y border-gray-200 dark:border-uiBorder backdrop-blur-sm sticky top-20 z-40 transition-colors">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center space-x-12 py-4 whitespace-nowrap">
          {items.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-techBlue transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
