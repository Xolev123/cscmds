import { AutoExecCard } from '../components/AutoExec/AutoExecCard';
import { networkCommands, performanceCommands, mouseCommands } from '../components/AutoExec/autoexecData';

export function AutoexecCfg() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-100">Autoexec CFG Guide</h1>
      <p className="text-xl text-gray-400">Optimize your game settings with these autoexec commands</p>

      <section className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-blue-400">Network Commands</h2>
            <span className="text-blue-400/60 text-sm">Connection optimization</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {networkCommands.map((cmd) => (
              <AutoExecCard key={cmd.command} {...cmd} />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-purple-400">Performance Commands</h2>
            <span className="text-purple-400/60 text-sm">FPS and game optimization</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {performanceCommands.map((cmd) => (
              <AutoExecCard key={cmd.command} {...cmd} />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-orange-400">Mouse Commands</h2>
            <span className="text-orange-400/60 text-sm">Input optimization</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mouseCommands.map((cmd) => (
              <AutoExecCard key={cmd.command} {...cmd} />
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400">Setup Guide</h3>
        <p className="text-gray-300">
          Create an autoexec.cfg file in your CS2 config folder and add these commands. 
          The game will automatically execute them on startup.
        </p>
      </div>
    </div>
  );
}