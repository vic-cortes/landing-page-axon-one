
import React from 'react';

const ImpactMetrics: React.FC = () => {
  const metrics = [
    { value: "85%", label: "Reduction in Analysis Time", color: "text-techBlue" },
    { value: "99.7%", label: "Classification Accuracy", color: "text-approvalGreenDark dark:text-approvalGreen" },
    { value: "+50%", label: "Operational Efficiency", color: "text-techBlue" },
    { value: "100%", label: "Guaranteed Traceability", color: "text-approvalGreenDark dark:text-approvalGreen" }
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className={`text-4xl md:text-6xl font-bold mb-4 ${m.color}`}>
                {m.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;
