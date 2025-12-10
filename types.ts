export enum ModuleType {
  HOME = 'HOME',
  VIRTUAL_LAB = 'VIRTUAL_LAB',
  FLASHCARDS = 'FLASHCARDS',
  SOLUBILITY_QUIZ = 'SOLUBILITY_QUIZ',
  ACID_BASE_QUIZ = 'ACID_BASE_QUIZ'
}

export interface Ion {
  symbol: string;
  charge: number;
  color: string; // Tailwind class for text/bg color representation
  type: 'cation' | 'anion';
}

export interface Solution {
  id: string;
  name: string;
  formula: string;
  cation: Ion;
  anion: Ion;
  color: string; // Liquid color
}

export interface PrecipitateResult {
  hasPrecipitate: boolean;
  name?: string;
  formula?: string;
  color?: string;
  precipitateIons?: string[]; // Symbols of ions forming the solid
}

export interface FlashcardData {
  id: number;
  compound: string;
  solubility: 'Soluble' | 'Insoluble';
  reason?: string; // Optional explanation based on rules
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
}

export interface QuizSet {
  name: string; // e.g., "Set A"
  questions: QuizQuestion[];
}

export interface FlashcardSet {
  name: string;
  cards: FlashcardData[];
}