import { ExternalLink } from 'lucide-react';

export function MovementLab() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Movement Tips</h2>
        
        {/* Bhop Tips */}
        <div className="bg-white/5 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-100">Bunny Hop Optimization</h3>
          
          <div className="space-y-2 text-gray-300">
            <p>Key tips for consistent bhops:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Scroll <span className="text-blue-400">slower</span> rather than faster - rapid scrolling can cause missed inputs</li>
              <li>Keep a consistent scroll rhythm that matches the game's tick rate</li>
              <li>Practice the timing between jumps - too early or late will break momentum</li>
            </ul>
          </div>

          {/* Scroll Wheel Testing Tool */}
          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-100 mb-2">Test Your Scroll Wheel</h4>
            <p className="text-gray-400 mb-4">
              Use this tool to check if your mouse wheel is registering inputs correctly.
              Inconsistent or reversed inputs can affect bhop performance.
            </p>
            <a 
              href="https://fractalglider.github.io/fun/2018/02/13/testing-mouse-scroll-wheel.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Open Scroll Wheel Tester <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Additional sections can be added here */}
    </div>
  );
} 