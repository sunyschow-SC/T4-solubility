import React, { useState } from 'react';
import { FLASHCARD_SETS } from '../constants';
import { ChevronLeft, ChevronRight, RotateCcw, List } from 'lucide-react';
import SolubilityTableModal from './SolubilityTableModal';

const Flashcards: React.FC = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const currentSet = FLASHCARD_SETS[currentSetIndex];
  const currentCard = currentSet.cards[cardIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCardIndex((prev) => (prev + 1) % currentSet.cards.length);
    }, 200);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
        setCardIndex((prev) => (prev - 1 + currentSet.cards.length) % currentSet.cards.length);
    }, 200);
  };

  const handleSetChange = (idx: number) => {
      setIsFlipped(false);
      setCardIndex(0);
      setCurrentSetIndex(idx);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Solubility Flashcards</h2>
        <button 
          onClick={() => setShowTable(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm font-medium"
        >
          Show Table
        </button>
      </div>

      {/* Set Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {FLASHCARD_SETS.map((set, idx) => (
          <button
            key={set.name}
            onClick={() => handleSetChange(idx)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
              currentSetIndex === idx 
              ? 'bg-slate-800 text-white' 
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      {/* Card Container */}
      <div className="perspective h-80 w-full cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl border-2 border-slate-100 flex flex-col items-center justify-center p-8">
            <span className="text-slate-400 text-sm font-mono absolute top-4 left-4">Compound</span>
            <span className="text-slate-400 text-sm absolute top-4 right-4">{cardIndex + 1} / {currentSet.cards.length}</span>
            <h3 className="text-3xl font-bold text-slate-800 text-center">{currentCard.compound}</h3>
            <p className="mt-8 text-indigo-500 text-sm animate-pulse">Click to flip</p>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-50 rounded-2xl shadow-xl border-2 border-indigo-100 flex flex-col items-center justify-center p-8">
            <span className="text-indigo-400 text-sm font-mono absolute top-4 left-4">Solubility</span>
            <h3 className={`text-4xl font-extrabold mb-4 ${currentCard.solubility === 'Soluble' ? 'text-green-600' : 'text-red-500'}`}>
                {currentCard.solubility}
            </h3>
            {currentCard.reason && (
                <p className="text-slate-600 text-center italic mt-2">"{currentCard.reason}"</p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button onClick={prevCard} className="p-3 rounded-full bg-white shadow hover:bg-slate-50 border border-slate-200">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
        </button>
        <button onClick={() => setIsFlipped(!isFlipped)} className="p-3 rounded-full bg-indigo-100 shadow hover:bg-indigo-200 text-indigo-700">
            <RotateCcw className="w-6 h-6" />
        </button>
        <button onClick={nextCard} className="p-3 rounded-full bg-white shadow hover:bg-slate-50 border border-slate-200">
            <ChevronRight className="w-6 h-6 text-slate-600" />
        </button>
      </div>

      <SolubilityTableModal isOpen={showTable} onClose={() => setShowTable(false)} />
    </div>
  );
};

export default Flashcards;