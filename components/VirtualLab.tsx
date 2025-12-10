import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LAB_SOLUTIONS } from '../constants';
import { Solution } from '../types';
import { Beaker, RefreshCw, Play, RotateCcw } from 'lucide-react';

interface ParticleObj {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  color: string;
  type: 'cation' | 'anion';
  isStuck: boolean;
  bondedId: string | null;
}

const VirtualLab: React.FC = () => {
  const [solA, setSolA] = useState<Solution>(LAB_SOLUTIONS[0]);
  const [solB, setSolB] = useState<Solution>(LAB_SOLUTIONS[1]);
  const [isReacting, setIsReacting] = useState(false);
  const [precipitateCount, setPrecipitateCount] = useState(0);
  const [renderParticles, setRenderParticles] = useState<ParticleObj[]>([]);

  // Simulation State Refs (Mutable to avoid re-renders during animation)
  const physicsRef = useRef<ParticleObj[]>([]);
  const requestRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Particles based on selection
  const initParticles = useCallback(() => {
    const newParticles: ParticleObj[] = [];
    
    const createIons = (sol: Solution, sourceId: string) => {
      // Create 5 cations and 5 anions for each solution
      for (let i = 0; i < 5; i++) {
        newParticles.push({
          id: `${sourceId}-cat-${i}`,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          symbol: sol.cation.symbol,
          color: sol.cation.color,
          type: 'cation',
          isStuck: false,
          bondedId: null
        });
        newParticles.push({
          id: `${sourceId}-an-${i}`,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          symbol: sol.anion.symbol,
          color: sol.anion.color,
          type: 'anion',
          isStuck: false,
          bondedId: null
        });
      }
    };

    createIons(solA, 'A');
    createIons(solB, 'B');
    
    physicsRef.current = newParticles;
    setRenderParticles([...newParticles]); // Trigger render of DOM elements
    setPrecipitateCount(0);
  }, [solA, solB]);

  // Handle Reset / Init
  useEffect(() => {
    setIsReacting(false);
    initParticles();
    return () => cancelAnimationFrame(requestRef.current);
  }, [initParticles]);

  // Solubility Check Helper
  const isPairInsoluble = (p1: ParticleObj, p2: ParticleObj) => {
    // Only Cation + Anion react
    if (p1.type === p2.type) return false;

    const cat = p1.type === 'cation' ? p1 : p2;
    const an = p1.type === 'anion' ? p1 : p2;
    const cSym = cat.symbol;
    const aSym = an.symbol;

    // Rules logic matches constants.ts
    // Ag+
    if (cSym === 'Ag⁺' && ['Cl⁻','I⁻','CO₃²⁻','OH⁻','Br⁻'].includes(aSym)) return true;
    // Pb2+
    if (cSym === 'Pb²⁺' && ['Cl⁻','I⁻','SO₄²⁻','CO₃²⁻','OH⁻','Br⁻'].includes(aSym)) return true;
    // Ba2+
    if (cSym === 'Ba²⁺' && ['SO₄²⁻','CO₃²⁻'].includes(aSym)) return true;
    // Ca2+
    if (cSym === 'Ca²⁺' && ['SO₄²⁻','CO₃²⁻'].includes(aSym)) return true;
    // Mg2+
    if (cSym === 'Mg²⁺' && ['CO₃²⁻','OH⁻'].includes(aSym)) return true;
    // Cu2+
    if (cSym === 'Cu²⁺' && ['CO₃²⁻','OH⁻'].includes(aSym)) return true;

    return false;
  };

  // Animation Loop
  const animate = useCallback(() => {
    const particles = physicsRef.current;
    let currentPpt = 0;

    // 1. Update Physics
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (p.isStuck) {
        // Sinking behavior
        if (p.y < 92) {
            p.y += 0.3; // Sink speed
        } else {
            p.vx = 0;
            p.vy = 0;
        }
        currentPpt++;
      } else {
        // Floating behavior
        p.x += p.vx;
        p.y += p.vy;

        // Wall collisions
        if (p.x <= 2 || p.x >= 98) p.vx *= -1;
        if (p.y <= 2 || p.y >= 96) p.vy *= -1;
      }

      // Update DOM
      const el = document.getElementById(p.id);
      if (el) {
        el.style.left = `${p.x}%`;
        el.style.top = `${p.y}%`;
      }
    }

    // 2. Collision Detection (Only when Reaction Started)
    if (isReacting) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Skip if already stuck
          if (p1.isStuck || p2.isStuck) continue;

          // Calculate distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          // Approximate aspect ratio correction (assuming square-ish beaker for simplicity, 
          // or roughly equal unit scale in % for small distances)
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < 5) { // Collision threshold
             if (isPairInsoluble(p1, p2)) {
                 // REACT: Form precipitate
                 p1.isStuck = true;
                 p2.isStuck = true;
                 p1.bondedId = p2.id;
                 p2.bondedId = p1.id;

                 // Snap together
                 const midX = (p1.x + p2.x) / 2;
                 const midY = (p1.y + p2.y) / 2;
                 p1.x = midX - 1.5;
                 p1.y = midY;
                 p2.x = midX + 1.5;
                 p2.y = midY;
             } else {
                 // BOUNCE: Elastic collision (simplified)
                 // Simply swap velocities to simulate momentum transfer
                 const tempVx = p1.vx;
                 const tempVy = p1.vy;
                 p1.vx = p2.vx;
                 p1.vy = p2.vy;
                 p2.vx = tempVx;
                 p2.vy = tempVy;
                 
                 // Separate slightly to prevent sticking
                 p1.x += p1.vx * 2;
                 p1.y += p1.vy * 2;
             }
          }
        }
      }
    }

    setPrecipitateCount(Math.floor(currentPpt / 2));
    requestRef.current = requestAnimationFrame(animate);
  }, [isReacting]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const toggleReaction = () => {
    setIsReacting(prev => !prev);
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
              disabled={isReacting}
              value={solA.id} 
              onChange={(e) => setSolA(LAB_SOLUTIONS.find(s => s.id === e.target.value) || solA)}
              className="w-full p-2 rounded border border-slate-300 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {LAB_SOLUTIONS.map(s => <option key={s.id} value={s.id}>{s.name} ({s.formula})</option>)}
            </select>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-medium text-slate-700 mb-2">Solution B</label>
            <select 
              disabled={isReacting}
              value={solB.id} 
              onChange={(e) => setSolB(LAB_SOLUTIONS.find(s => s.id === e.target.value) || solB)}
              className="w-full p-2 rounded border border-slate-300 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {LAB_SOLUTIONS.filter(s => s.id !== solA.id).map(s => <option key={s.id} value={s.id}>{s.name} ({s.formula})</option>)}
            </select>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={toggleReaction} 
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-white transition flex items-center justify-center gap-2 ${isReacting ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isReacting ? <><RotateCcw className="w-5 h-5"/> Reset / Stop</> : <><Play className="w-5 h-5"/> Mix & React</>}
            </button>
          </div>
          
          <div className={`p-4 rounded-lg text-center transition-colors duration-500 ${precipitateCount > 0 ? 'bg-green-100 border border-green-300' : 'bg-slate-100 border border-slate-200'}`}>
            {precipitateCount > 0 ? (
                <div>
                    <h3 className="text-lg font-bold text-green-800 mb-1">Precipitate Forming!</h3>
                    <p className="text-green-700">{precipitateCount} particle pairs bonded.</p>
                </div>
            ) : (
                <div>
                    <h3 className="text-lg font-bold text-slate-700">{isReacting ? "Monitoring..." : "Ready to Mix"}</h3>
                    <p className="text-slate-600 text-sm">
                        {isReacting ? "Particles are colliding. Watch for bonding." : "Select solutions and click Mix to start."}
                    </p>
                </div>
            )}
          </div>
        </div>

        {/* Visualizer */}
        <div className="relative h-80 bg-slate-100 rounded-xl border-2 border-slate-300 overflow-hidden flex items-end justify-center shadow-inner">
          <div ref={containerRef} className="relative w-56 h-72 border-b-4 border-l-4 border-r-4 border-slate-400/50 rounded-b-3xl bg-white/30 backdrop-blur-sm overflow-hidden mb-4">
             {/* Liquid */}
             <div className="absolute inset-0 bg-blue-50/40">
                {renderParticles.map((p) => (
                    <div 
                        key={p.id}
                        id={p.id}
                        className={`absolute flex items-center justify-center w-8 h-8 rounded-full shadow-sm text-[10px] font-bold border border-slate-300 select-none ${p.color}`}
                        style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        {p.symbol}
                    </div>
                ))}
             </div>
          </div>
          <div className="absolute bottom-2 text-slate-400 text-sm font-mono">Real-time Simulation</div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800">
        <strong>Tip:</strong> The particles from both solutions are now in the beaker. Click <strong>Mix & React</strong> to let them chemically interact. If they form an insoluble compound, they will stick together and sink!
      </div>
    </div>
  );
};

export default VirtualLab;