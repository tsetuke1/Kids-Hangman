import React from 'react';

interface HangmanDrawingProps {
  wrongGuesses: number;
}

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ wrongGuesses }) => {
  const parts = [
    // Base
    <line key="base" x1="20" y1="380" x2="180" y2="380" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />,
    // Pole
    <line key="pole" x1="50" y1="380" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />,
    // Top beam
    <line key="beam" x1="50" y1="50" x2="150" y2="50" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />,
    // Noose
    <line key="noose" x1="150" y1="50" x2="150" y2="80" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />,
    // Head
    <circle key="head" cx="150" cy="100" r="20" fill="none" stroke="#F59E0B" strokeWidth="4" />,
    // Body
    <line key="body" x1="150" y1="120" x2="150" y2="250" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg p-4 shadow-lg border-4 border-purple-200">
        <svg width="200" height="400" className="drop-shadow-sm">
          {parts.slice(0, wrongGuesses)}
        </svg>
      </div>
      <div className="mt-4 text-center">
        <div className="text-2xl font-bold text-red-500">
          {6 - wrongGuesses} chances left!
        </div>
        <div className="flex space-x-1 mt-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                i < wrongGuesses ? 'bg-red-400' : 'bg-green-400'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HangmanDrawing;