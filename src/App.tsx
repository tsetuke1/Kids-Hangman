import React, { useState, useEffect } from 'react';
import { GameState, Category } from './types/game';
import { WORDS_BY_CATEGORY, MAX_WRONG_GUESSES } from './data/words';
import CategorySelector from './components/CategorySelector';
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';
import LetterGrid from './components/LetterGrid';
import GameResult from './components/GameResult';
import { motion } from "framer-motion";
import LetterAnimate from './components/LettersAnimate';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentWord: '',
    category: null,
    guessedLetters: new Set(),
    wrongGuesses: 0,
    gameStatus: 'selecting'
  });

  const [currentHint, setCurrentHint] = useState<string>('');

  const selectRandomWord = (category: Category) => {
    const words = WORDS_BY_CATEGORY[category];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  };

  const handleCategorySelect = (category: Category) => {
    const wordData = selectRandomWord(category);
    setGameState({
      currentWord: wordData.word,
      category,
      guessedLetters: new Set(),
      wrongGuesses: 0,
      gameStatus: 'playing'
    });
    setCurrentHint(wordData.hint || '');
  };

  const handleLetterGuess = (letter: string) => {
    if (gameState.guessedLetters.has(letter) || gameState.gameStatus !== 'playing') {
      return;
    }

    const newGuessedLetters = new Set(gameState.guessedLetters);
    newGuessedLetters.add(letter);

    const isCorrectGuess = gameState.currentWord.includes(letter);
    const newWrongGuesses = isCorrectGuess ? gameState.wrongGuesses : gameState.wrongGuesses + 1;

    setGameState(prev => ({
      ...prev,
      guessedLetters: newGuessedLetters,
      wrongGuesses: newWrongGuesses
    }));
  };

  const handlePlayAgain = () => {
    if (gameState.category) {
      handleCategorySelect(gameState.category);
    }
  };

  const handleNewCategory = () => {
    setGameState({
      currentWord: '',
      category: null,
      guessedLetters: new Set(),
      wrongGuesses: 0,
      gameStatus: 'selecting'
    });
    setCurrentHint('');
  };

  // Check win/lose conditions
  useEffect(() => {
    if (gameState.gameStatus === 'playing') {
      const wordLetters = new Set(gameState.currentWord.split(''));
      const hasWon = Array.from(wordLetters).every(letter =>
        gameState.guessedLetters.has(letter)
      );

      if (hasWon) {
        setGameState(prev => ({ ...prev, gameStatus: 'won' }));
      } else if (gameState.wrongGuesses >= MAX_WRONG_GUESSES) {
        setGameState(prev => ({ ...prev, gameStatus: 'lost' }));
      }
    }
  }, [gameState.guessedLetters, gameState.wrongGuesses, gameState.currentWord, gameState.gameStatus]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/Spelling.jpg')` }}
    >
      {/* Optional: Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-yellow-100/70 to-blue-200/70 backdrop-blur-sm z-0"></div>

      {/* Actual content goes here */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* ... everything you already have stays the same inside here */}

        <div className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">

          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">


              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, bounce: 0.5, type: "spring" }}
                className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 mb-2 drop-shadow-sm"
              >
                🎉 Kids Hangman 🎈
              </motion.h1>

              <div className="flex justify-center space-x-4 items-center mb-4">
                <LetterAnimate letter="A" color="#ff0000" />
                <LetterAnimate letter="B" color="#ff00ff" />
                <LetterAnimate letter="C" color="#0000ff" />
              </div>

              <p className="text-2xl text-purple-800 font-semibold">
                Let's play and learn letters together!
              </p>
            </div>

            {/* Game Content */}
            <div className="max-w-4xl mx-auto">
              {gameState.gameStatus === 'selecting' ? (
                <CategorySelector onCategorySelect={handleCategorySelect} />
              ) : gameState.gameStatus === 'won' || gameState.gameStatus === 'lost' ? (
                <GameResult
                  gameStatus={gameState.gameStatus}
                  word={gameState.currentWord}
                  hint={currentHint}
                  onPlayAgain={handlePlayAgain}
                  onNewCategory={handleNewCategory}
                />
              ) : (
                <div className="space-y-8">
                  {/* Category and Hint */}
                  <div className="text-center bg-yellow-100 rounded-2xl p-6 shadow-xl border-4 border-yellow-300">
                    <div className="text-center sm:text-right flex-1 bg-pink-100 rounded-xl p-4 border-4 border-pink-300">
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-700">Category:</h3>
                        <p className="text-2xl font-bold text-blue-600 capitalize">
                          {gameState.category}
                        </p>
                      </div>
                      {currentHint && (
                        <div className="text-center sm:text-right flex-1 bg-yellow-50 rounded-xl p-4 border-2 border-yellow-200">
                          <h3 className="text-lg font-semibold text-gray-700">Hint:</h3>
                          <p className="text-xl text-purple-700 font-medium">
                            {currentHint}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Game Area */}
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Hangman Drawing */}
                    <div className="flex justify-center">
                      <HangmanDrawing wrongGuesses={gameState.wrongGuesses} />
                    </div>

                    {/* Word and Letters */}
                    <div className="space-y-8">
                      {/* Word Display */}
                      <div className="bg-purple-100 rounded-2xl p-6 shadow-xl border-4 border-purple-300">

                        <WordDisplay
                          word={gameState.currentWord}
                          guessedLetters={gameState.guessedLetters}
                          gameStatus={gameState.gameStatus}
                        />
                      </div>

                      {/* Letter Grid */}
                      <div className="bg-green-100 rounded-2xl p-6 shadow-xl border-4 border-green-300">

                        <h3 className="text-xl font-bold text-center mb-4 text-gray-700">
                          Click a letter to guess!
                        </h3>
                        <LetterGrid
                          guessedLetters={gameState.guessedLetters}
                          onLetterClick={handleLetterGuess}
                          disabled={gameState.gameStatus !== 'playing'}
                          currentWord={gameState.currentWord}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={handleNewCategory}
                      className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold 
           transform transition-all duration-300 hover:scale-110 active:scale-95 shadow-md"
                    >
                      🎨 Change Category
                    </button>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;