
import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Box, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dashboardData = [
  { time: '00:00', value: 45 },
  { time: '04:00', value: 52 },
  { time: '08:00', value: 48 },
  { time: '12:00', value: 70 },
  { time: '16:00', value: 65 },
  { time: '20:00', value: 85 },
  { time: '23:59', value: 78 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-techBlue/10 border border-techBlue/20 text-techBlue text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            <span>Enterprise Grade Quality Control</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white transition-colors">
            Intelligent Quality <br />
            <span className="relative inline-block px-2 mr-2">
              <span className="relative z-10 text-white dark:text-gray-900">Analysis.</span>
              <span className="absolute inset-0 bg-gradient-to-r from-techBlue to-approvalGreen transform -skew-x-2"></span>
            </span> <br />
            Precise Data. <br />
            Reliable Decisions.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl transition-colors">
            Axon One empowers industrial leaders to analyze parts inspected by third parties, 
            optimize sorting processes, and gain full lot traceability through a single, 
            intelligent quality analytics platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-techBlue text-dark font-bold rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity neon-glow">
              Request Free Demo
              <ArrowRight className="ml-2" size={20} />
            </button>
            <div className="flex items-center space-x-3 text-sm">
              <span className="text-3xl font-bold text-approvalGreenDark dark:text-approvalGreen">99.7%</span>
              <span className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-[10px] leading-tight transition-colors">
                accuracy in data<br />analysis
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-1 bg-techBlue/30 blur-2xl rounded-full opacity-20"></div>
          
          {/* Dashboard Mockup Container */}
          <div className="relative bg-white dark:bg-[#111827] border border-gray-200 dark:border-uiBorder p-6 rounded-2xl shadow-2xl overflow-hidden transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-mono flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>LIVE_ANALYTICS_NODE_01</span>
              </div>
            </div>

            {/* Simulated Dashboard Content */}
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-xl p-4 border border-gray-100 dark:border-gray-800 transition-colors shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Defect Detection Rate</h3>
                  <p className="text-[10px] text-gray-500">Real-time production stream</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-techBlue">0.02%</span>
                  <div className="text-[10px] text-approvalGreenDark dark:text-approvalGreen">Stable</div>
                </div>
              </div>

              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dashboardData}>
                    <defs>
                      <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', color: '#000', border: '1px solid #e2e8f0', fontSize: '10px', borderRadius: '8px' }}
                      darkContentStyle={{ backgroundColor: '#111827', border: '1px solid #333' }}
                      itemStyle={{ color: '#00D4FF' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00D4FF" 
                      fillOpacity={1} 
                      fill="url(#heroGradient)" 
                      strokeWidth={3}
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white dark:bg-[#222]/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800/50 shadow-sm transition-colors">
                  <div className="flex items-center space-x-1 mb-1">
                    <Box size={10} className="text-techBlue" />
                    <span className="text-[9px] text-gray-400 dark:text-gray-500 uppercase font-bold">Total Lots</span>
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-white">1,284</div>
                </div>
                <div className="bg-white dark:bg-[#222]/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800/50 shadow-sm transition-colors">
                  <div className="flex items-center space-x-1 mb-1">
                    <Activity size={10} className="text-approvalGreenDark dark:text-approvalGreen" />
                    <span className="text-[9px] text-gray-400 dark:text-gray-500 uppercase font-bold">Precision</span>
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-white">99.8%</div>
                </div>
                <div className="bg-white dark:bg-[#222]/50 p-2 rounded-lg border border-gray-100 dark:border-gray-800/50 shadow-sm transition-colors">
                  <div className="flex items-center space-x-1 mb-1">
                    <Zap size={10} className="text-alertOrange" />
                    <span className="text-[9px] text-gray-400 dark:text-gray-500 uppercase font-bold">Latency</span>
                  </div>
                  <div className="text-sm font-bold text-gray-800 dark:text-white">14ms</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 bg-gray-50 dark:bg-gray-800/30 rounded flex items-center justify-center border border-gray-100 dark:border-gray-800/50 transition-colors shadow-sm">
                  <div className={`w-full h-1 bg-techBlue/10 dark:bg-techBlue/20 mx-3 rounded overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-techBlue/40 w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
