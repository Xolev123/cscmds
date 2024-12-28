import { Home, Settings, Code, Move, Beaker, ChevronUp } from 'lucide-react';
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
      <div className={`fixed bottom-16 left-0 right-0 transition-all duration-300 ease-in-out transform
        ${isMainNavVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-screen-xl mx-auto bg-background/95 backdrop-blur-sm border border-white/10 rounded-lg mx-4 mb-2">
          <div className="flex justify-center gap-2 p-2">
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
                  className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-200 
                    ${activeMain === tab.id
                      ? 'text-blue-400 bg-white/5'
                      : 'text-gray-400 hover:text-blue-400 hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sub Navigation (Bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-white/10">
        {/* Toggle Button */}
        <button 
          onClick={() => setIsMainNavVisible(!isMainNavVisible)}
          className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-3 flex items-center justify-center"
        >
          <div className={`transform transition-all duration-300 ease-in-out ${
            isMainNavVisible ? 'rotate-180' : ''
          }`}>
            <ChevronUp 
              className={`w-4 h-4 transition-colors duration-200 ${
                isMainNavVisible ? 'text-blue-400' : 'text-gray-400'
              }`} 
            />
          </div>
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