import React, { useState } from 'react';
import { ModuleType } from './types';
import { SOLUBILITY_QUIZ_SETS, ACID_BASE_QUIZ_SETS } from './constants';
import VirtualLab from './components/VirtualLab';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import { Beaker, BookOpen, BrainCircuit, Home, FlaskConical } from 'lucide-react';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>(ModuleType.HOME);

  const renderContent = () => {
    switch (activeModule) {
      case ModuleType.VIRTUAL_LAB:
        return <VirtualLab />;
      case ModuleType.FLASHCARDS:
        return <Flashcards />;
      case ModuleType.SOLUBILITY_QUIZ:
        return (
          <Quiz 
            title="Solubility Rules Quiz" 
            sets={SOLUBILITY_QUIZ_SETS} 
            hasTableReference={true} 
          />
        );
      case ModuleType.ACID_BASE_QUIZ:
        return (
          <Quiz 
            title="Acids & Bases Quiz" 
            sets={ACID_BASE_QUIZ_SETS} 
            hasTableReference={false} // Table mostly relevant for salts, but user can open it in other modes
          />
        );
      case ModuleType.HOME:
      default:
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Sunchow's Learning Platform
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Master Grade 11 Chemistry through interactive labs and tailored revision tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ModuleCard 
                icon={<Beaker className="w-10 h-10 text-blue-500" />}
                title="Virtual Lab"
                desc="Simulate precipitation reactions visually. Mix solutions and observe the ions."
                onClick={() => setActiveModule(ModuleType.VIRTUAL_LAB)}
              />
              <ModuleCard 
                icon={<BookOpen className="w-10 h-10 text-green-500" />}
                title="Flashcards"
                desc="Revise the solubility of 50 ionic compounds. Flip to learn."
                onClick={() => setActiveModule(ModuleType.FLASHCARDS)}
              />
              <ModuleCard 
                icon={<BrainCircuit className="w-10 h-10 text-orange-500" />}
                title="Solubility Quiz"
                desc="Test your knowledge of the solubility table with 5 sets of questions."
                onClick={() => setActiveModule(ModuleType.SOLUBILITY_QUIZ)}
              />
              <ModuleCard 
                icon={<FlaskConical className="w-10 h-10 text-red-500" />}
                title="Acids & Bases Quiz"
                desc="Challenge yourself on definitions, examples, and reactions (Excluding Alkali reactions)."
                onClick={() => setActiveModule(ModuleType.ACID_BASE_QUIZ)}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 font-bold text-xl text-slate-800 cursor-pointer hover:opacity-80 transition"
            onClick={() => setActiveModule(ModuleType.HOME)}
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">S</div>
            <span>Sunchow's</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <NavBtn label="Home" active={activeModule === ModuleType.HOME} onClick={() => setActiveModule(ModuleType.HOME)} />
            <NavBtn label="Lab" active={activeModule === ModuleType.VIRTUAL_LAB} onClick={() => setActiveModule(ModuleType.VIRTUAL_LAB)} />
            <NavBtn label="Flashcards" active={activeModule === ModuleType.FLASHCARDS} onClick={() => setActiveModule(ModuleType.FLASHCARDS)} />
            <NavBtn label="Quiz (Solubility)" active={activeModule === ModuleType.SOLUBILITY_QUIZ} onClick={() => setActiveModule(ModuleType.SOLUBILITY_QUIZ)} />
            <NavBtn label="Quiz (Acid/Base)" active={activeModule === ModuleType.ACID_BASE_QUIZ} onClick={() => setActiveModule(ModuleType.ACID_BASE_QUIZ)} />
          </nav>

           {/* Mobile Menu Icon Placeholder (simplified for this task) */}
           <button className="md:hidden p-2 text-slate-600" onClick={() => setActiveModule(ModuleType.HOME)}>
             <Home className="w-6 h-6" />
           </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-6 text-center text-sm">
        <p>© 2023 Sunchow's Learning Platform. Grade 11 Chemistry.</p>
      </footer>
    </div>
  );
};

const ModuleCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; onClick: () => void }> = ({ icon, title, desc, onClick }) => (
  <button 
    onClick={onClick}
    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 text-left transition-all duration-300 group hover:-translate-y-1"
  >
    <div className="mb-4 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-slate-100 transition">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </button>
);

const NavBtn: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`text-sm font-medium transition ${active ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
  >
    {label}
  </button>
);

export default App;