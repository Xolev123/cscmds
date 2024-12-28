import { Home, Settings, Code, Move, Beaker } from 'lucide-react';

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
      {/* Main Navigation (Above Bottom Nav) */}
      <nav className="fixed bottom-16 left-0 right-0 bg-white/10 backdrop-blur-md border-y border-white/10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-around">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMain(tab.id);
                    setActiveTab(subTabs[tab.id as keyof typeof subTabs][0].id);
                  }}
                  className={`flex items-center gap-2 py-3 px-6 transition-colors duration-200 ${
                    activeMain === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sub Navigation (Bottom) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4">
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