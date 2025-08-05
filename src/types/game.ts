export type Category = 'fruits' | 'animals' | 'vegetables' | 'trivia';

export interface GameState {
  currentWord: string;
  category: Category | null;
  guessedLetters: Set<string>;
  wrongGuesses: number;
  gameStatus: 'playing' | 'won' | 'lost' | 'selecting';
}

export interface WordData {
  word: string;
  hint?: string;
}