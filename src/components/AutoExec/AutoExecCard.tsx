import { AutoExecCommand } from './types';

// btw need to make this more responsive on mobile
export function AutoExecCard({ command, description, reason, category }: AutoExecCommand) {
  const categoryColors = {
    Network: 'border-blue-500/20 hover:border-blue-500/40',
    Performance: 'border-purple-500/20 hover:border-purple-500/40',
    Mouse: 'border-orange-500/20 hover:border-orange-500/40'
  };

  return (
    <div className={`border rounded-lg p-4 transition-colors ${categoryColors[category as keyof typeof categoryColors]}`}>
      <code className="text-green-400 font-mono">{command}</code>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 text-sm mt-1">Why: {reason}</p>
    </div>
  );
}