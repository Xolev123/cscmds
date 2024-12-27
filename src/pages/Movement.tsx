import { MovementCard } from '../components/Movement/MovementCard';
import { commonTechniques, advancedTechniques, expertTechniques } from '../components/Movement/movementData';
import { ResourceList } from '../components/Resources/ResourceList';
import { movementResources } from '../data/resources';

export function Movement() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-100">Movement Techniques</h1>
      <p className="text-xl text-gray-400">Master advanced movement mechanics to gain a competitive edge</p>

      <section className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-blue-400">Common Techniques</h2>
            <span className="text-blue-400/60 text-sm">Essential movement skills</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {commonTechniques.map((tech) => (
              <MovementCard key={tech.name} {...tech} category="common" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-purple-400">Advanced Techniques</h2>
            <span className="text-purple-400/60 text-sm">Intermediate movement mechanics</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {advancedTechniques.map((tech) => (
              <MovementCard key={tech.name} {...tech} category="advanced" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-orange-400">Expert Techniques</h2>
            <span className="text-orange-400/60 text-sm">Advanced movement mastery</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {expertTechniques.map((tech) => (
              <MovementCard key={tech.name} {...tech} category="expert" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-green-400">Learning Resources</h2>
            <span className="text-green-400/60 text-sm">Tutorials and guides</span>
          </div>
          <ResourceList resources={movementResources} />
        </div>
      </section>

      <div className="mt-8 p-4 bg-blue-500/10 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-400">Training Tips</h3>
        <p className="text-gray-300">
          Practice these techniques in offline servers or community practice maps. 
          Start with common techniques and gradually progress to more advanced ones.
        </p>
      </div>
    </div>
  );
}