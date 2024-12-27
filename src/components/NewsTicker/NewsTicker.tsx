import { NewsItem } from './NewsItem';
import { NEWS_ITEMS } from './NewsData';

// i love straight jlorkin gradient masks to hide janky transitions
export function NewsTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-opacity-20 bg-blue-900 backdrop-blur-md border-b border-blue-500/30">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
      <div className="relative max-w-screen-xl mx-auto">
        <div className="flex items-center h-12">
          <div className="flex-1 overflow-hidden">
            <div className="inline-flex animate-scroll-x">
              {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, index) => (
                <NewsItem key={`${item.id}-${index}`} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}