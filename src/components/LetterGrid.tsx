import React from 'react';

interface LetterGridProps {
  guessedLetters: Set<string>;
  onLetterClick: (letter: string) => void;
  disabled: boolean;
  currentWord: string;
}

const LetterGrid: React.FC<LetterGridProps> = ({ 
  guessedLetters, 
  onLetterClick, 
  disabled, 
  currentWord 
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const getLetterStatus = (letter: string) => {
    if (!guessedLetters.has(letter)) return 'available';
    if (currentWord.includes(letter)) return 'correct';
    return 'wrong';
  };

  return (
    <div className="grid grid-cols-6 md:grid-cols-9 gap-2 max-w-2xl mx-auto">
      {alphabet.split('').map(letter => {
        const status = getLetterStatus(letter);
        const isGuessed = guessedLetters.has(letter);
        
        return (
          <button
            key={letter}
            onClick={() => onLetterClick(letter)}
            disabled={disabled || isGuessed}
            className={`
              h-12 w-12 rounded-lg font-bold text-lg transition-all duration-200 transform
              ${status === 'available' && !disabled
                ? 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-110 shadow-lg hover:shadow-xl'
                : status === 'correct'
                ? 'bg-green-500 text-white scale-95 shadow-inner'
                : status === 'wrong'
                ? 'bg-red-500 text-white scale-95 shadow-inner'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
              ${!disabled && !isGuessed ? 'active:scale-95' : ''}
            `}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default LetterGrid;