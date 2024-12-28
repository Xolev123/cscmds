import { Home, Settings, Code, Move, Beaker, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// main nav tabs at the top
const mainTabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'lab', label: 'Lab', icon: Beaker },
];

// sub tabs that show up in the bottom nav
const subTabs = {
  home: [
    { id: 'launch-options', label: 'Launch Options', icon: Settings },
    { id: 'autoexec', label: 'Autoexec CFG', icon: Code },
    { id: 'movement', label: 'Movement', icon: Move },
  ],
  lab: [
    { id: 'movement-lab', label: 'Movement', icon: Move },
    { id: 'settings-lab', label: 'Settings', icon: Settings },
    { id: 'tools', label: 'Tools', icon: Code },
  ]
};

export function Navigation({ activeMain, activeTab, setActiveMain, setActiveTab }: {
  activeMain: string;
  activeTab: string;
  setActiveMain: (tab: string) => void;
  setActiveTab: (tab: string) => void;
}) {
  const [isMainNavVisible, setIsMainNavVisible] = useState(false);

  return (
    <>
      {/* Main Navigation (Toggle with click) */}
      <div className={`fixed bottom-[72px] left-0 right-0 transition-all duration-200 ${
        isMainNavVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center gap-4 px-4">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMain(tab.id);
                    setActiveTab(subTabs[tab.id as keyof typeof subTabs][0].id);
                    setIsMainNavVisible(false);
                  }}
                  className={`flex items-center gap-2 py-3 px-6 rounded-md transition-colors duration-200 
                    ${activeMain === tab.id
                      ? 'text-blue-400 bg-white/5'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sub Navigation (Bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
        {/* Click Indicator */}
        <button 
          onClick={() => setIsMainNavVisible(!isMainNavVisible)}
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-8 flex items-center justify-center 
            bg-white/5 hover:bg-white/10 rounded-t-md border-t border-l border-r border-white/10 
            transition-colors duration-200"
        >
          {isMainNavVisible ? (
            <ChevronDown className="w-5 h-5 text-blue-400" />
          ) : (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          )}
        </button>

        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-around">
            {subTabs[activeMain as keyof typeof subTabs].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-4 px-6 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-blue-400'
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
    </>
  );
}