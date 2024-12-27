import { Resource } from '../../data/resources';
import { Video, FileText } from 'lucide-react';
import { useState } from 'react';

export function ResourceCard({ resource }: { resource: Resource }) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = resource.type === 'video' ? getVideoId(resource.url) : null;

  return (
    <a 
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border rounded-lg p-4 transition-colors hover:bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2">
        {resource.type === 'video' ? (
          <Video className="w-5 h-5 text-red-400" />
        ) : (
          <FileText className="w-5 h-5 text-blue-400" />
        )}
        <h3 className="text-lg font-semibold text-gray-100">{resource.title}</h3>
      </div>
      <p className="text-gray-400 mt-2">{resource.description}</p>
      <p className="text-sm text-gray-500 mt-1">By {resource.author}</p>

      {/* Video Preview */}
      {resource.type === 'video' && videoId && (
        <div className={`
          absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+1rem)]
          w-[300px] h-[169px] rounded-lg overflow-hidden
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-300 transform
          group-hover:translate-y-0 translate-y-4
          shadow-2xl
          pointer-events-none
          z-50
        `}>
          <img 
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={resource.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
    </a>
  );
}