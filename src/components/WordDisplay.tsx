import React from 'react';

interface WordDisplayProps {
  word: string;
  guessedLetters: Set<string>;
  gameStatus: 'playing' | 'won' | 'lost' | 'selecting';
}

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters, gameStatus }) => {
  const displayWord = word
    .split('')
    .map(letter => {
      if (letter === ' ') return ' ';
      return guessedLetters.has(letter) || gameStatus === 'lost' ? letter : '_';
    })
    .join('');

  return (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-bold tracking-widest font-mono">
        {displayWord.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block mx-1 ${
              char === '_' 
                ? 'text-gray-400 border-b-4 border-blue-400 pb-2 min-w-[3rem]' 
                : char === ' '
                ? 'mx-4'
                : gameStatus === 'won'
                ? 'text-green-500 animate-bounce'
                : gameStatus === 'lost' && !guessedLetters.has(char)
                ? 'text-red-500'
                : 'text-blue-600'
            } transition-all duration-300`}
            style={{ 
              animationDelay: gameStatus === 'won' ? `${index * 100}ms` : '0ms' 
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordDisplay;