
import React from 'react';
import { Database, Cpu, Settings, Globe } from 'lucide-react';

const Integrations: React.FC = () => {
  const systems = [
    { icon: <Database />, name: "ERP (SAP, Oracle)" },
    { icon: <Cpu />, name: "MES / QMS" },
    { icon: <Settings />, name: "SCADA / PLC" },
    { icon: <Globe />, name: "Custom APIs" }
  ];

  return (
    <div className="py-24 bg-gray-50/50 dark:bg-dark/50 border-y border-gray-200 dark:border-uiBorder transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 dark:text-white transition-colors">
            Connect AXON ONE with your technology ecosystem
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {systems.map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-[#222222] border border-gray-200 dark:border-uiBorder flex items-center justify-center text-gray-500 group-hover:text-techBlue group-hover:border-techBlue transition-all mb-4 shadow-sm dark:shadow-none">
                  {s.icon}
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
