import React, { useState, useEffect } from 'react';
import { LAB_SOLUTIONS, IONS } from '../constants';
import { PrecipitateResult, Solution } from '../types';
import { Beaker, RefreshCw } from 'lucide-react';

const VirtualLab: React.FC = () => {
  const [solA, setSolA] = useState<Solution>(LAB_SOLUTIONS[0]);
  const [solB, setSolB] = useState<Solution>(LAB_SOLUTIONS[1]);
  const [isMixed, setIsMixed] = useState(false);
  const [result, setResult] = useState<PrecipitateResult | null>(null);

  const handleMix = () => {
    setIsMixed(true);
    
    // Logic for precipitation based on rules
    // 1. Check combinations of cations and anions
    const catA = solA.cation;
    const anA = solA.anion;
    const catB = solB.cation;
    const anB = solB.anion;

    // Possible new compounds: (CatA + AnB) and (CatB + AnA)
    // We only care if one is insoluble.
    
    const checkInsoluble = (cat: string, an: string): { insol: boolean, color: string } => {
      // Simplistic rule checker based on the provided table data
      // Ag
      if (cat === 'Ag⁺' && (an === 'Cl⁻' || an === 'I⁻' || an === 'CO₃²⁻' || an === 'OH⁻')) return { insol: true, color: an === 'I⁻' ? 'bg-yellow-200' : 'bg-white' };
      // Pb
      if (cat === 'Pb²⁺' && (an === 'Cl⁻' || an === 'I⁻' || an === 'SO₄²⁻' || an === 'CO₃²⁻' || an === 'OH⁻')) return { insol: true, color: an === 'I⁻' ? 'bg-yellow-400' : 'bg-white' };
      // Ba
      if (cat === 'Ba²⁺' && (an === 'SO₄²⁻' || an === 'CO₃²⁻')) return { insol: true, color: 'bg-white' };
      // Ca
      if (cat === 'Ca²⁺' && (an === 'SO₄²⁻' || an === 'CO₃²⁻')) return { insol: true, color: 'bg-white' }; // CaSO4 slightly insol, treated as ppt here
      // Mg
      if (cat === 'Mg²⁺' && (an === 'CO₃²⁻' || an === 'OH⁻')) return { insol: true, color: 'bg-white' };
      // Cu
      if (cat === 'Cu²⁺' && (an === 'CO₃²⁻' || an === 'OH⁻')) return { insol: true, color: 'bg-blue-400' };
      // Fe (not in list but good to be safe)
      
      return { insol: false, color: '' };
    };

    const res1 = checkInsoluble(catA.symbol, anB.symbol);
    const res2 = checkInsoluble(catB.symbol, anA.symbol);

    if (res1.insol) {
      setResult({ hasPrecipitate: true, color: res1.color, precipitateIons: [catA.symbol, anB.symbol] });
    } else if (res2.insol) {
      setResult({ hasPrecipitate: true, color: res2.color, precipitateIons: [catB.symbol, anA.symbol] });
    } else {
      setResult({ hasPrecipitate: false });
    }
  };

  const handleReset = () => {
    setIsMixed(false);
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center gap-2">
        <Beaker className="w-8 h-8" />
        Virtual Precipitation Lab
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-2">Solution A</label>
            <select 
              disabled={isMixed}
              value={solA.id} 
              onChange={(e) => setSolA(LAB_SOLUTIONS.find(s => s.id === e.target.value) || solA)}
              className="w-full p-2 rounded border border-slate-300 focus:ring-2 focus:ring-indigo-500"
            >
              {LAB_SOLUTIONS.map(s => <option key={s.id} value={s.id}>{s.name} ({s.formula})</option>)}
            </select>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-2">Solution B</label>
            <select 
              disabled={isMixed}
              value={solB.id} 
              onChange={(e) => setSolB(LAB_SOLUTIONS.find(s => s.id === e.target.value) || solB)}
              className="w-full p-2 rounded border border-slate-300 focus:ring-2 focus:ring-indigo-500"
            >
              {LAB_SOLUTIONS.filter(s => s.id !== solA.id).map(s => <option key={s.id} value={s.id}>{s.name} ({s.formula})</option>)}
            </select>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleMix} 
              disabled={isMixed}
              className={`flex-1 py-3 rounded-lg font-bold text-white transition ${isMixed ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              Mix Solutions
            </button>
            <button 
              onClick={handleReset}
              className="px-4 py-3 rounded-lg border-2 border-slate-300 text-slate-600 hover:bg-slate-100"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>
          
          {isMixed && result && (
             <div className={`p-4 rounded-lg text-center ${result.hasPrecipitate ? 'bg-green-100 border border-green-300' : 'bg-blue-50 border border-blue-200'}`}>
                {result.hasPrecipitate ? (
                    <div>
                        <h3 className="text-lg font-bold text-green-800 mb-1">Precipitate Formed!</h3>
                        <p className="text-green-700">Insoluble solid detected.</p>
                        <p className="text-sm text-green-600 mt-2">Check the beaker to see which ions combined.</p>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-lg font-bold text-blue-800">No Reaction</h3>
                        <p className="text-blue-700">All ions remain dissolved.</p>
                    </div>
                )}
             </div>
          )}
        </div>

        {/* Visualizer */}
        <div className="relative h-80 bg-slate-100 rounded-xl border-2 border-slate-300 overflow-hidden flex items-end justify-center shadow-inner">
          {/* Beaker Glass */}
          <div className="relative w-48 h-64 border-b-4 border-l-4 border-r-4 border-slate-400/50 rounded-b-3xl bg-white/30 backdrop-blur-sm overflow-hidden mb-4">
             {/* Liquid */}
             <div className={`absolute bottom-0 left-0 right-0 h-4/5 transition-colors duration-1000 ${isMixed ? (result?.hasPrecipitate ? 'bg-slate-100' : 'bg-blue-50/50') : 'bg-blue-50/30'}`}>
                
                {/* Particles */}
                {/* We render a set of ions. Before mix: just A. After mix: A + B. */}
                <div className="absolute inset-0 p-4">
                    {/* Solution A Ions */}
                    {Array.from({length: 4}).map((_, i) => (
                        <Particle 
                            key={`a-cat-${i}`} 
                            symbol={solA.cation.symbol} 
                            color={solA.cation.color} 
                            isPrecipitating={isMixed && result?.hasPrecipitate && result.precipitateIons?.includes(solA.cation.symbol)}
                            delay={i * 0.5}
                        />
                    ))}
                    {Array.from({length: 4}).map((_, i) => (
                        <Particle 
                            key={`a-an-${i}`} 
                            symbol={solA.anion.symbol} 
                            color={solA.anion.color} 
                            isPrecipitating={isMixed && result?.hasPrecipitate && result.precipitateIons?.includes(solA.anion.symbol)}
                            delay={i * 0.7}
                        />
                    ))}

                    {/* Solution B Ions (Only appear if mixed) */}
                    {isMixed && Array.from({length: 4}).map((_, i) => (
                        <Particle 
                            key={`b-cat-${i}`} 
                            symbol={solB.cation.symbol} 
                            color={solB.cation.color} 
                            isPrecipitating={result?.hasPrecipitate && result.precipitateIons?.includes(solB.cation.symbol)}
                            delay={i * 0.4}
                        />
                    ))}
                    {isMixed && Array.from({length: 4}).map((_, i) => (
                        <Particle 
                            key={`b-an-${i}`} 
                            symbol={solB.anion.symbol} 
                            color={solB.anion.color} 
                            isPrecipitating={result?.hasPrecipitate && result.precipitateIons?.includes(solB.anion.symbol)}
                            delay={i * 0.6}
                        />
                    ))}

                    {/* Sediment Layer */}
                    {isMixed && result?.hasPrecipitate && (
                        <div className={`absolute bottom-0 left-0 right-0 h-8 ${result.color} opacity-80 rounded-b-xl animate-pulse`}>
                            <span className="absolute w-full text-center text-[10px] font-bold bottom-1 opacity-50">Precipitate</span>
                        </div>
                    )}
                </div>
             </div>
          </div>
          <div className="absolute bottom-2 text-slate-400 text-sm font-mono">Beaker View</div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800">
        <strong>Tip:</strong> Observe the particles. If a precipitate forms, the specific positive and negative ions responsible will clamp together at the bottom!
      </div>
    </div>
  );
};

// Helper component for floating particles
const Particle: React.FC<{ symbol: string; color: string; isPrecipitating?: boolean; delay: number }> = ({ symbol, color, isPrecipitating, delay }) => {
    // If precipitating, we force them to bottom
    const style = isPrecipitating 
        ? { 
            bottom: `${Math.random() * 20 + 5}px`, 
            left: `${Math.random() * 80 + 10}%`,
            transition: 'all 2s ease-in-out'
          }
        : {
            animation: `float ${3 + Math.random()}s infinite ease-in-out alternate`,
            animationDelay: `-${delay}s`,
            top: `${Math.random() * 60 + 10}%`,
            left: `${Math.random() * 80 + 10}%`
        };

    return (
        <div 
            className={`absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm text-[10px] font-bold border border-slate-300 ${color}`}
            style={style}
        >
            {symbol}
        </div>
    );
};

export default VirtualLab;