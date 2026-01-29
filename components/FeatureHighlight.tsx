
import React from 'react';
import { Hexagon, Search, Activity, CheckCircle } from 'lucide-react';

const FeatureHighlight: React.FC = () => {
  return (
    <div className="py-24 relative transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-techBlue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <Hexagon className="absolute w-full h-full text-techBlue/10 stroke-[1px]" />
              <Hexagon className="absolute w-4/5 h-4/5 text-techBlue/20 stroke-[1px]" />
              <div className="relative bg-white dark:bg-[#1A1A1A] p-8 rounded-full border border-techBlue shadow-[0_0_50px_rgba(0,212,255,0.2)] dark:shadow-[0_0_50px_rgba(0,212,255,0.1)] transition-colors">
                <Search className="w-16 h-16 text-techBlue" />
              </div>
            </div>
          </div>

          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
              The Power of <br />
              <span className="text-techBlue">Real-Time</span> Quality Analysis
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed transition-colors">
              AXON ONE doesn't just collect data—it interprets it. By unifying inspection results from multiple sources, we provide a crystal-clear view of your quality landscape, enabling you to identify trends before they become failures.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                { icon: <Activity className="text-techBlue" />, title: "Precision", desc: "Granular defect classification" },
                { icon: <CheckCircle className="text-approvalGreen" />, title: "Traceability", desc: "Full lot birth certificate" },
                { icon: <Search className="text-techBlue" />, title: "Optimization", desc: "Streamlined sorting logic" },
                { icon: <Activity className="text-alertOrange" />, title: "Intelligence", desc: "Automated alert ecosystem" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
