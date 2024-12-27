import React from 'react';

export function Home() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to CS2 Guide
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Master the art of movement and optimize your game with our comprehensive CS2 guides.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Movement Techniques</h2>
            <p>Learn advanced movement mechanics to gain a competitive edge:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Bunny Hopping</li>
              <li>Jump Bugs</li>
              <li>Long Jumps</li>
              <li>Air Strafing</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Game Optimization</h2>
            <p>Optimize your game settings for the best performance:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Launch Options</li>
              <li>Autoexec Configuration</li>
              <li>Performance Tips</li>
              <li>Custom Binds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}