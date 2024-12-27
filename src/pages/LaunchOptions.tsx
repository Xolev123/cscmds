import { LaunchOptionCard } from '../components/LaunchOptions/Card';
import { commonOptions } from '../data/launchOptions/common';
import { essentialOptions } from '../data/launchOptions/essential';
import { optionalOptions } from '../data/launchOptions/optional';

export function LaunchOptions() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-100">Launch Options</h1>
      <p className="text-xl text-gray-400">Configure your CS2 launch options for optimal performance</p>

      <section className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-blue-400">Common Options</h2>
            <span className="text-blue-400/60 text-sm">Basic optimizations</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {commonOptions.map((opt) => (
              <LaunchOptionCard key={opt.option} {...opt} category="common" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-purple-400">Essential Options</h2>
            <span className="text-purple-400/60 text-sm">Recommended for all players</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {essentialOptions.map((opt) => (
              <LaunchOptionCard key={opt.option} {...opt} category="essential" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-orange-400">Optional Options</h2>
            <span className="text-orange-400/60 text-sm">Situational improvements</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {optionalOptions.map((opt) => (
              <LaunchOptionCard key={opt.option} {...opt} category="optional" />
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400">Pro Tip</h3>
        <p className="text-gray-300">
          Add these options to your CS2 launch options in Steam by right-clicking the game, 
          selecting Properties, and entering them in the Launch Options field.
        </p>
      </div>
    </div>
  );
}