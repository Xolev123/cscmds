import { LaunchOption } from './types';

export function LaunchOptionCard({ option, description, reason, category }: LaunchOption & { category: string }) {
  const borderColors = {
    common: 'border-blue-500/20 hover:border-blue-500/40',
    essential: 'border-purple-500/20 hover:border-purple-500/40',
    optional: 'border-orange-500/20 hover:border-orange-500/40'
  };

  return (
    <div className={`border rounded-lg p-4 transition-colors ${borderColors[category as keyof typeof borderColors]}`}>
      <code className="text-green-400 font-mono">{option}</code>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 text-sm mt-1">Why: {reason}</p>
    </div>
  );
}