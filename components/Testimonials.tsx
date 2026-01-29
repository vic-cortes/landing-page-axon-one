
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "AXON ONE transformed our lot sorting process. We reduced false rejects by 30% in the first quarter alone.",
      author: "Marcus Chen",
      role: "VP Operations, Precision Castings Corp",
      result: "30% scrap reduction"
    },
    {
      quote: "The traceability dashboard is unmatched. We can now respond to audits in minutes instead of days.",
      author: "Sarah Jenkins",
      role: "Quality Assurance Lead, Global Automotive",
      result: "Instant Compliance"
    }
  ];

  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white transition-colors">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 bg-white/60 dark:bg-[#1f2937]/30 backdrop-blur-sm border border-gray-200 dark:border-uiBorder rounded-2xl relative transition-all">
              <Quote className="absolute top-8 right-8 text-techBlue/10 dark:text-techBlue/10 w-12 h-12" />
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed transition-colors">"{t.quote}"</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-bold text-gray-900 dark:text-white transition-colors">{t.author}</div>
                  <div className="text-sm text-gray-500 transition-colors">{t.role}</div>
                </div>
                <div className="px-3 py-1 bg-approvalGreen/10 border border-approvalGreen/20 text-approvalGreen text-[10px] font-bold rounded uppercase">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
