import { useState } from 'react';
import { NewsTicker } from './components/NewsTicker/NewsTicker';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { LaunchOptions } from './pages/LaunchOptions';
import { AutoexecCfg } from './pages/AutoexecCfg';
import { Movement } from './pages/Movement';

import './styles/animations.css';
import './styles/theme.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <NewsTicker />
      <main className="max-w-screen-xl mx-auto px-4 pb-24 pt-8">
        {renderContent()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;