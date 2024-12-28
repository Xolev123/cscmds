import { Home, Settings, Code, Move, Beaker, ChevronUp } from 'lucide-react';

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
  return (
    <>
      {/* Main Navigation (Appears on hover) */}
      <div className="fixed bottom-[72px] left-0 right-0 pointer-events-none">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center gap-4 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMain(tab.id);
                    setActiveTab(subTabs[tab.id as keyof typeof subTabs][0].id);
                  }}
                  className={`pointer-events-auto flex items-center gap-2 py-2 px-4 rounded-md transition-colors duration-200 
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
      <nav className="group/nav fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10">
        {/* Hover Indicator */}
        <div className="absolute -top-6 left-0 right-0 h-6 flex items-center justify-center">
          <div className="w-12 h-[2px] bg-white/10 group-hover/nav:bg-blue-400/50 transition-colors duration-200" />
          <ChevronUp className="absolute top-1 w-4 h-4 text-white/20 group-hover/nav:text-blue-400/50 transition-colors duration-200" />
        </div>

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