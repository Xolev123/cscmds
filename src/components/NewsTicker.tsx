import { useEffect, useState } from 'react';

const NEWS_ITEMS = [
  "CS2 Latest Update: Performance Improvements and Bug Fixes",
  "New Case Released: Revolution Case with exclusive knives",
  "Major Tournament Announcement: PGL Copenhagen 2024",
  "Valve addresses movement mechanics in latest patch"
];

export function NewsTicker() {
  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % NEWS_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-white py-2 overflow-hidden">
      <div className="animate-slide">
        <p className="text-center">{NEWS_ITEMS[currentNews]}</p>
      </div>
    </div>
  );
}