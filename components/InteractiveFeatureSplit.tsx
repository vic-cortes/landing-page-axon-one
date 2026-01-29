
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { CheckCircle2 } from 'lucide-react';

const data = [
  { name: '08:00', val: 400 },
  { name: '10:00', val: 700 },
  { name: '12:00', val: 600 },
  { name: '14:00', val: 900 },
  { name: '16:00', val: 800 },
  { name: '18:00', val: 1100 },
];

const InteractiveFeatureSplit: React.FC = () => {
  return (
    <div className="py-24 bg-white/30 dark:bg-dark/50 transition-colors">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Integrated Features for Unmatched Performance</h2>
          <ul className="space-y-6">
            {[
              "Real-Time Quality Dashboard",
              "Predictive Defect Analysis",
              "Complete Lot Traceability",
              "Automated Quality Reports",
              "ERP/MES System Integration",
              "Intelligent Quality Alerts"
            ].map((feature, i) => (
              <li key={i} className="flex items-center space-x-4 group cursor-default">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-techBlue/10 flex items-center justify-center border border-techBlue/20 group-hover:bg-techBlue group-hover:text-dark transition-all">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-techBlue/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-white dark:bg-[#222222] border-2 border-techBlue rounded-xl overflow-hidden shadow-2xl p-6 transition-colors">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">Process Quality Index</h3>
              <div className="flex space-x-2">
                <span className="px-2 py-1 rounded bg-approvalGreen/10 text-approvalGreenDark dark:text-approvalGreen text-[10px] border border-approvalGreen/20">OPERATIONAL</span>
                <span className="px-2 py-1 rounded bg-techBlue/10 text-techBlue text-[10px] border border-techBlue/20">AUTO-SCAN</span>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', color: '#000', border: '1px solid #e2e8f0', fontSize: '12px', borderRadius: '8px' }}
                    darkContentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2D2D2D' }}
                    itemStyle={{ color: '#00D4FF' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#00D4FF" fillOpacity={1} fill="url(#colorVal)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-dark/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="text-[10px] text-gray-500 uppercase">Yield Rate</div>
                <div className="text-xl font-bold text-approvalGreenDark dark:text-approvalGreen">98.4%</div>
              </div>
              <div className="bg-gray-50 dark:bg-dark/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="text-[10px] text-gray-500 uppercase">Alert Frequency</div>
                <div className="text-xl font-bold text-alertOrange">-12.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatureSplit;
