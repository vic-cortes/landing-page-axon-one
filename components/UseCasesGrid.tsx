
import React from 'react';
import { Target, TrendingUp, Link, ClipboardCheck, Zap, DollarSign } from 'lucide-react';

const cases = [
  { icon: <Target className="text-techBlue" />, title: "Reduce Product Rejection", desc: "Identify root causes of defects instantly to prevent scrap piles." },
  { icon: <Zap className="text-techBlue" />, title: "Optimize Sorting Processes", desc: "Automate and refine how parts are sorted based on precision analytics." },
  { icon: <Link className="text-techBlue" />, title: "Increase Traceability", desc: "Map every finished good back to its original raw material lot." },
  { icon: <ClipboardCheck className="text-techBlue" />, title: "Improve Compliance", desc: "Meet strict industry regulations with automated documentation." },
  { icon: <TrendingUp className="text-techBlue" />, title: "Accelerate Decisions", desc: "Data-driven insights delivered to leaders in real-time." },
  { icon: <DollarSign className="text-techBlue" />, title: "Reduce Operating Costs", desc: "Minimize waste and manual labor in quality assurance workflows." },
];

const UseCasesGrid: React.FC = () => {
  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">Industrial Use Cases</h2>
          <p className="text-gray-500 max-w-2xl mx-auto transition-colors">Solving complex manufacturing challenges through technical precision and reliable data architectures.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group p-8 bg-white/50 dark:bg-[#1f2937]/30 backdrop-blur-sm border border-gray-200 dark:border-uiBorder rounded-2xl hover:border-techBlue/50 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] dark:hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
              <div className="mb-6 p-3 w-fit rounded-lg bg-techBlue/10 group-hover:bg-techBlue group-hover:text-dark transition-all">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white transition-colors">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed transition-colors">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesGrid;
