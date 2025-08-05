import React from 'react';
import { Trophy, RotateCcw, Home } from 'lucide-react';

interface GameResultProps {
  gameStatus: 'won' | 'lost';
  word: string;
  hint?: string;
  onPlayAgain: () => void;
  onNewCategory: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ 
  gameStatus, 
  word, 
  hint, 
  onPlayAgain, 
  onNewCategory 
}) => {
  const isWon = gameStatus === 'won';

  return (
    <div className="text-center">
      <div className={`
        p-8 rounded-2xl shadow-2xl max-w-md mx-auto
        ${isWon ? 'bg-green-100 border-4 border-green-400' : 'bg-red-100 border-4 border-red-400'}
      `}>
        <div className="mb-6">
          {isWon ? (
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto animate-bounce" />
          ) : (
            <div className="text-6xl">😢</div>
          )}
        </div>
        
        <h2 className={`text-3xl font-bold mb-4 ${isWon ? 'text-green-600' : 'text-red-600'}`}>
          {isWon ? '🎉 You Won! 🎉' : '😔 Game Over'}
        </h2>
        
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">
            The word was:
          </p>
          <p className="text-4xl font-bold text-blue-600 mb-2">{word}</p>
          {hint && (
            <p className="text-sm text-gray-600 italic">
              "{hint}"
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onPlayAgain}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold 
                     transform transition-all duration-200 hover:scale-105 active:scale-95
                     flex items-center justify-center space-x-2"
          >
            <RotateCcw size={20} />
            <span>Play Again</span>
          </button>
          
          <button
            onClick={onNewCategory}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-bold 
                     transform transition-all duration-200 hover:scale-105 active:scale-95
                     flex items-center justify-center space-x-2"
          >
            <Home size={20} />
            <span>New Category</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameResult;