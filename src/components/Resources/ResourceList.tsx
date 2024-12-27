import { Resource } from '../../data/resources';
import { ResourceCard } from './ResourceCard';

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map((resource) => (
        <ResourceCard key={resource.url} resource={resource} />
      ))}
    </div>
  );
}