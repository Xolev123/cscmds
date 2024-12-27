import { MovementTechnique } from './types';

// hardcoding colors lmao!!!
export function MovementCard({ name, description, difficulty, usage, category }: MovementTechnique & { category: string }) {
  const colorSchemes = {
    common: {
      border: 'border-blue-500/20 hover:border-blue-500/40',
      title: 'text-blue-300'
    },
    advanced: {
      border: 'border-purple-500/20 hover:border-purple-500/40',
      title: 'text-purple-300'
    },
    expert: {
      border: 'border-orange-500/20 hover:border-orange-500/40',
      title: 'text-orange-300'
    }
  };

  const colors = colorSchemes[category as keyof typeof colorSchemes];

  return (
    <div className={`border rounded-lg p-4 transition-colors ${colors.border}`}>
      <h3 className={`text-xl font-semibold ${colors.title}`}>{name}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="flex gap-4 mt-2 text-sm">
        <span className="text-yellow-400">Difficulty: {difficulty}</span>
        <span className="text-gray-400">Usage: {usage}</span>
      </div>
    </div>
  );
}