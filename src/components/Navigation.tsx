import { useState } from 'react';
import { Home, Settings, Code, Move, Microscope, Tool } from 'lucide-react';

const mainTabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'lab', label: 'Lab', icon: Microscope },
];

const subTabs = {
  home: [
    { id: 'launch-options', label: 'Launch Options', icon: Settings },
    { id: 'autoexec', label: 'Autoexec CFG', icon: Code },
    { id: 'movement', label: 'Movement', icon: Move },
  ],
  lab: [
    { id: 'lab-movement', label: 'Movement Lab', icon: Move },
    { id: 'lab-settings', label: 'Settings Lab', icon: Settings },
    { id: 'lab-tools', label: 'Tools', icon: Tool },
  ]
};

export function Navigation({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-4 px-6 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="mt-1 text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}