
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-uiBorder transition-colors">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-techBlue rounded flex items-center justify-center font-bold text-dark text-xl">A</div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            AXON <span className="text-techBlue">ONE</span>
            <span className="hidden sm:inline text-gray-400 dark:text-gray-400 font-light ml-2 border-l border-gray-300 dark:border-gray-600 pl-2">Analytics Platform</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500 dark:text-gray-300">
          <a href="#features" className="hover:text-techBlue transition-colors">Features</a>
          <a href="#use-cases" className="hover:text-techBlue transition-colors">Solutions</a>
          <a href="#roi" className="hover:text-techBlue transition-colors">Use Cases</a>
          <a href="#pricing" className="hover:text-techBlue transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-techBlue transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="px-6 py-2.5 rounded-full border border-techBlue text-techBlue font-semibold text-sm hover:bg-techBlue hover:text-dark transition-all neon-glow">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
