import { LaunchOption } from '../../types/launchOptions';
import { CategoryColors } from '../../utils/categoryColors';

interface LaunchOptionCardProps extends LaunchOption {
  category: keyof CategoryColors;
}

export function LaunchOptionCard({ option, description, reason, category }: LaunchOptionCardProps) {
  return (
    <div className={`border rounded-lg p-4 transition-colors ${CategoryColors[category]}`}>
      <code className="text-green-400 font-mono">{option}</code>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 text-sm mt-1">Why: {reason}</p>
    </div>
  );
}