
import React from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-gray-200 dark:border-uiBorder transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-techBlue rounded flex items-center justify-center font-bold text-dark text-xl">A</div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors">AXON <span className="text-techBlue">ONE</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 transition-colors">
              High-performance industrial analytics for manufacturing and quality leaders. Precision data, delivered in real-time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-techBlue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-techBlue transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest transition-colors">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest transition-colors">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-techBlue dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900 dark:text-white uppercase text-xs tracking-widest transition-colors">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>solutions@axonone.ai</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1" />
                <span>1200 Industrial Pkwy,<br />Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-uiBorder flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-4 md:space-y-0 transition-colors">
          <p>© 2025 AXON ONE Analytics Platform. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
