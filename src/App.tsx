import { useState } from 'react';
import { NewsTicker } from './components/NewsTicker/NewsTicker';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { LaunchOptions } from './pages/LaunchOptions';
import { AutoexecCfg } from './pages/AutoexecCfg';
import { Movement } from './pages/Movement';
import { MovementLab, Tools, SettingsLab } from './components/Lab';

import './styles/animations.css';
import './styles/theme.css';

// ffs had to add this to fix the gpu shit
function App() {
  const [activeMain, setActiveMain] = useState('home');
  const [activeTab, setActiveTab] = useState('launch-options');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'launch-options':
        return <LaunchOptions />;
      case 'autoexec':
        return <AutoexecCfg />;
      case 'movement':
        return <Movement />;
      case 'movement-lab':
        return <MovementLab />;
      case 'settings-lab':
        return <SettingsLab />;
      case 'tools':
        return <Tools />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <NewsTicker />
      <main className="max-w-screen-xl mx-auto px-4 pb-24 pt-20">
        {renderContent()}
      </main>
      <Navigation 
        activeMain={activeMain}
        activeTab={activeTab}
        setActiveMain={setActiveMain}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;