import React, { useState } from 'react';
import { QuizSet } from '../types';
import { CheckCircle, XCircle, Award, ArrowRight } from 'lucide-react';
import SolubilityTableModal from './SolubilityTableModal';

interface Props {
  title: string;
  sets: QuizSet[];
  hasTableReference?: boolean;
}

const Quiz: React.FC<Props> = ({ title, sets, hasTableReference }) => {
  const [currentSetIdx, setCurrentSetIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const currentSet = sets[currentSetIdx];
  const currentQ = currentSet.questions[qIdx];

  const handleSetChange = (idx: number) => {
    setCurrentSetIdx(idx);
    resetQuiz();
  };

  const resetQuiz = () => {
    setQIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setShowScore(false);
  };

  const handleOptionClick = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedOpt(optIdx);
    setIsAnswered(true);
    if (optIdx === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (qIdx < currentSet.questions.length - 1) {
      setQIdx(prev => prev + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
        <Award className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Quiz Completed!</h2>
        <p className="text-xl text-slate-600 mb-8">
          You scored <span className="font-bold text-indigo-600 text-3xl">{score}</span> out of <span className="font-bold text-slate-800 text-3xl">{currentSet.questions.length}</span>
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={resetQuiz}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
          >
            Retry Set
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        {hasTableReference && (
          <button 
            onClick={() => setShowTable(true)}
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200 text-sm font-medium"
          >
            Open Solubility Table
          </button>
        )}
      </div>

      {/* Set Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {sets.map((set, idx) => (
          <button
            key={set.name}
            onClick={() => handleSetChange(idx)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
              currentSetIdx === idx 
              ? 'bg-slate-800 text-white' 
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-6">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((qIdx + 1) / currentSet.questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 block">
            Question {qIdx + 1}
          </span>
          <h3 className="text-xl font-medium text-slate-900 mb-6 leading-relaxed">
            {currentQ.question}
          </h3>

          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              let btnClass = "w-full p-4 text-left rounded-lg border-2 transition-all flex justify-between items-center ";
              
              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  btnClass += "border-green-500 bg-green-50 text-green-800";
                } else if (idx === selectedOpt) {
                  btnClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  btnClass += "border-slate-100 text-slate-400 opacity-60";
                }
              } else {
                btnClass += "border-slate-200 hover:border-indigo-400 hover:bg-slate-50 text-slate-700";
              }

              return (
                <button 
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span>{opt}</span>
                  {isAnswered && idx === currentQ.correctAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {isAnswered && idx === selectedOpt && idx !== currentQ.correctAnswer && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Area */}
          {isAnswered && (
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-500 animate-in fade-in slide-in-from-bottom-2">
              <p className="font-bold text-slate-700 mb-1">Explanation:</p>
              <p className="text-slate-600">{currentQ.explanation}</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition ${
              isAnswered 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {qIdx === currentSet.questions.length - 1 ? 'Finish' : 'Next Question'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <SolubilityTableModal isOpen={showTable} onClose={() => setShowTable(false)} />
    </div>
  );
};

export default Quiz;