import { FlashcardSet, Ion, QuizSet, Solution } from './types';

// --- VIRTUAL LAB DATA ---

export const IONS: Record<string, Ion> = {
  Ag: { symbol: 'Ag⁺', charge: 1, color: 'bg-gray-200', type: 'cation' },
  Pb: { symbol: 'Pb²⁺', charge: 2, color: 'bg-gray-400', type: 'cation' },
  Na: { symbol: 'Na⁺', charge: 1, color: 'bg-yellow-100', type: 'cation' },
  K: { symbol: 'K⁺', charge: 1, color: 'bg-purple-100', type: 'cation' },
  Ba: { symbol: 'Ba²⁺', charge: 2, color: 'bg-green-100', type: 'cation' },
  Ca: { symbol: 'Ca²⁺', charge: 2, color: 'bg-orange-100', type: 'cation' },
  Cu: { symbol: 'Cu²⁺', charge: 2, color: 'bg-blue-300', type: 'cation' },
  Mg: { symbol: 'Mg²⁺', charge: 2, color: 'bg-slate-200', type: 'cation' },
  
  NO3: { symbol: 'NO₃⁻', charge: -1, color: 'bg-blue-50', type: 'anion' },
  Cl: { symbol: 'Cl⁻', charge: -1, color: 'bg-green-50', type: 'anion' },
  I: { symbol: 'I⁻', charge: -1, color: 'bg-yellow-200', type: 'anion' },
  SO4: { symbol: 'SO₄²⁻', charge: -2, color: 'bg-yellow-50', type: 'anion' },
  CO3: { symbol: 'CO₃²⁻', charge: -2, color: 'bg-gray-100', type: 'anion' },
  OH: { symbol: 'OH⁻', charge: -1, color: 'bg-blue-100', type: 'anion' },
};

export const LAB_SOLUTIONS: Solution[] = [
  { id: '1', name: 'Silver Nitrate', formula: 'AgNO₃', cation: IONS.Ag, anion: IONS.NO3, color: 'bg-transparent' },
  { id: '2', name: 'Sodium Chloride', formula: 'NaCl', cation: IONS.Na, anion: IONS.Cl, color: 'bg-transparent' },
  { id: '3', name: 'Lead(II) Nitrate', formula: 'Pb(NO₃)₂', cation: IONS.Pb, anion: IONS.NO3, color: 'bg-transparent' },
  { id: '4', name: 'Potassium Iodide', formula: 'KI', cation: IONS.K, anion: IONS.I, color: 'bg-transparent' },
  { id: '5', name: 'Barium Chloride', formula: 'BaCl₂', cation: IONS.Ba, anion: IONS.Cl, color: 'bg-transparent' },
  { id: '6', name: 'Sodium Sulfate', formula: 'Na₂SO₄', cation: IONS.Na, anion: IONS.SO4, color: 'bg-transparent' },
  { id: '7', name: 'Copper(II) Sulfate', formula: 'CuSO₄', cation: IONS.Cu, anion: IONS.SO4, color: 'bg-blue-100' },
  { id: '8', name: 'Sodium Hydroxide', formula: 'NaOH', cation: IONS.Na, anion: IONS.OH, color: 'bg-transparent' },
  { id: '9', name: 'Calcium Chloride', formula: 'CaCl₂', cation: IONS.Ca, anion: IONS.Cl, color: 'bg-transparent' },
  { id: '10', name: 'Sodium Carbonate', formula: 'Na₂CO₃', cation: IONS.Na, anion: IONS.CO3, color: 'bg-transparent' },
  { id: '11', name: 'Magnesium Nitrate', formula: 'Mg(NO₃)₂', cation: IONS.Mg, anion: IONS.NO3, color: 'bg-transparent' },
  { id: '12', name: 'Potassium Carbonate', formula: 'K₂CO₃', cation: IONS.K, anion: IONS.CO3, color: 'bg-transparent' },
];

// --- FLASHCARDS DATA (50 Items, 5 Sets) ---

const fcDataRaw = [
  // Set A
  { c: 'Sodium Chloride', s: 'Soluble', r: 'All sodium salts are soluble.' },
  { c: 'Silver Chloride', s: 'Insoluble', r: 'Halides are soluble except Ag⁺ and Pb²⁺.' },
  { c: 'Potassium Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Calcium Carbonate', s: 'Insoluble', r: 'Carbonates are insoluble except Group 1 & Ammonium.' },
  { c: 'Barium Sulfate', s: 'Insoluble', r: 'Sulfates are soluble except Pb²⁺, Ba²⁺, Ca²⁺.' },
  { c: 'Ammonium Chloride', s: 'Soluble', r: 'All ammonium salts are soluble.' },
  { c: 'Lead(II) Iodide', s: 'Insoluble', r: 'Halides are soluble except Ag⁺ and Pb²⁺.' },
  { c: 'Copper(II) Hydroxide', s: 'Insoluble', r: 'Hydroxides are insoluble except Group 1.' },
  { c: 'Magnesium Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Sodium Carbonate', s: 'Soluble', r: 'All sodium salts are soluble.' },
  // Set B
  { c: 'Potassium Hydroxide', s: 'Soluble', r: 'All potassium salts are soluble.' },
  { c: 'Calcium Sulfate', s: 'Insoluble', r: 'Sulfates are soluble except Pb²⁺, Ba²⁺, Ca²⁺.' },
  { c: 'Zinc Carbonate', s: 'Insoluble', r: 'Carbonates are generally insoluble.' },
  { c: 'Silver Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Lead(II) Sulfate', s: 'Insoluble', r: 'Sulfates are soluble except Pb²⁺, Ba²⁺, Ca²⁺.' },
  { c: 'Sodium Hydrogen Carbonate', s: 'Soluble', r: 'All sodium salts and HCO₃⁻ are soluble.' },
  { c: 'Iron(III) Hydroxide', s: 'Insoluble', r: 'Most hydroxides are insoluble.' },
  { c: 'Potassium Iodide', s: 'Soluble', r: 'All potassium salts are soluble.' },
  { c: 'Magnesium Hydroxide', s: 'Insoluble', r: 'Most hydroxides are insoluble.' },
  { c: 'Ammonium Sulfate', s: 'Soluble', r: 'All ammonium salts are soluble.' },
  // Set C
  { c: 'Copper(II) Carbonate', s: 'Insoluble', r: 'Most carbonates are insoluble.' },
  { c: 'Calcium Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Barium Hydroxide', s: 'Soluble', r: 'Wait! Actually Barium Hydroxide is soluble (Group 2 trend), but for this level often considered slightly soluble/soluble.' },
  { c: 'Silver Bromide', s: 'Insoluble', r: 'Halides are soluble except Ag⁺ and Pb²⁺.' },
  { c: 'Sodium Oxide', s: 'Soluble', r: 'Reacts with water to form soluble hydroxide.' },
  { c: 'Zinc Chloride', s: 'Soluble', r: 'Most chlorides are soluble.' },
  { c: 'Potassium Carbonate', s: 'Soluble', r: 'All potassium salts are soluble.' },
  { c: 'Lead(II) Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Magnesium Sulfate', s: 'Soluble', r: 'Most sulfates are soluble.' },
  { c: 'Aluminum Hydroxide', s: 'Insoluble', r: 'Most hydroxides are insoluble.' },
  // Set D
  { c: 'Ammonium Carbonate', s: 'Soluble', r: 'All ammonium salts are soluble.' },
  { c: 'Iron(II) Sulfate', s: 'Soluble', r: 'Most sulfates are soluble.' },
  { c: 'Calcium Oxide', s: 'Insoluble', r: 'Reacts with water, technically solid oxide is insoluble base.' },
  { c: 'Silver Iodide', s: 'Insoluble', r: 'Halides are soluble except Ag⁺ and Pb²⁺.' },
  { c: 'Sodium Sulfite', s: 'Soluble', r: 'All sodium salts are soluble.' },
  { c: 'Potassium Sulfite', s: 'Soluble', r: 'All potassium salts are soluble.' },
  { c: 'Barium Carbonate', s: 'Insoluble', r: 'Most carbonates are insoluble.' },
  { c: 'Copper(II) Sulfate', s: 'Soluble', r: 'Most sulfates are soluble.' },
  { c: 'Zinc Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Magnesium Oxide', s: 'Insoluble', r: 'Most oxides are insoluble.' },
  // Set E
  { c: 'Lithium Chloride', s: 'Soluble', r: 'Group 1 salts are soluble.' },
  { c: 'Lead(II) Chloride', s: 'Insoluble', r: 'Halides are soluble except Ag⁺ and Pb²⁺.' },
  { c: 'Calcium Hydroxide', s: 'Soluble', r: 'Slightly soluble (Lime water).' },
  { c: 'Ammonium Nitrate', s: 'Soluble', r: 'All nitrates/ammonium salts are soluble.' },
  { c: 'Potassium Oxide', s: 'Soluble', r: 'Reacts with water to form soluble hydroxide.' },
  { c: 'Silver Carbonate', s: 'Insoluble', r: 'Most carbonates are insoluble.' },
  { c: 'Iron(III) Chloride', s: 'Soluble', r: 'Most chlorides are soluble.' },
  { c: 'Sodium Ethanoate', s: 'Soluble', r: 'All sodium salts are soluble.' },
  { c: 'Barium Nitrate', s: 'Soluble', r: 'All nitrates are soluble.' },
  { c: 'Magnesium Carbonate', s: 'Insoluble', r: 'Most carbonates are insoluble.' },
];

export const FLASHCARD_SETS: FlashcardSet[] = [
  { name: 'Set A', cards: fcDataRaw.slice(0, 10).map((d, i) => ({ id: i, compound: d.c, solubility: d.s as any, reason: d.r })) },
  { name: 'Set B', cards: fcDataRaw.slice(10, 20).map((d, i) => ({ id: i + 10, compound: d.c, solubility: d.s as any, reason: d.r })) },
  { name: 'Set C', cards: fcDataRaw.slice(20, 30).map((d, i) => ({ id: i + 20, compound: d.c, solubility: d.s as any, reason: d.r })) },
  { name: 'Set D', cards: fcDataRaw.slice(30, 40).map((d, i) => ({ id: i + 30, compound: d.c, solubility: d.s as any, reason: d.r })) },
  { name: 'Set E', cards: fcDataRaw.slice(40, 50).map((d, i) => ({ id: i + 40, compound: d.c, solubility: d.s as any, reason: d.r })) },
];

// --- SOLUBILITY QUIZ DATA (50 Questions, 5 Sets) ---

const solQuizRaw = [
    // SET A
    { q: "Which of the following is soluble in water?", opts: ["PbSO4", "AgCl", "Na2CO3", "CaCO3"], ans: 2, exp: "Sodium salts are always soluble." },
    { q: "Identify the insoluble chloride.", opts: ["NaCl", "KCl", "AgCl", "MgCl2"], ans: 2, exp: "Silver chloride is insoluble." },
    { q: "Are all nitrates soluble?", opts: ["Yes", "No", "Only Group 1", "Only Group 2"], ans: 0, exp: "All nitrates are soluble." },
    { q: "Which cation forms an insoluble sulfate?", opts: ["Mg2+", "Cu2+", "Ba2+", "Zn2+"], ans: 2, exp: "BaSO4 is insoluble." },
    { q: "Potassium carbonate is:", opts: ["Soluble", "Insoluble", "Slightly Soluble", "Unstable"], ans: 0, exp: "Potassium salts are soluble." },
    { q: "Which hydroxide is soluble?", opts: ["Cu(OH)2", "Fe(OH)2", "NaOH", "Mg(OH)2"], ans: 2, exp: "NaOH is a Group 1 hydroxide." },
    { q: "What is the solubility of PbI2?", opts: ["Soluble", "Insoluble", "Gas", "Liquid"], ans: 1, exp: "Lead(II) iodide is a yellow precipitate." },
    { q: "Ammonium phosphate is:", opts: ["Soluble", "Insoluble", "Unknown", "Gas"], ans: 0, exp: "All ammonium salts are soluble." },
    { q: "Which pair contains two soluble salts?", opts: ["AgCl, NaCl", "KNO3, Na2SO4", "BaSO4, MgSO4", "CaCO3, K2CO3"], ans: 1, exp: "Both KNO3 and Na2SO4 are soluble." },
    { q: "Calcium hydroxide is considered:", opts: ["Insoluble", "Slightly Soluble", "Highly Soluble", "Gas"], ans: 1, exp: "It is lime water, slightly soluble." },
    
    // SET B
    { q: "Magnesium carbonate is:", opts: ["Soluble", "Insoluble", "Blue", "Gas"], ans: 1, exp: "Most carbonates are insoluble." },
    { q: "Which halide is insoluble?", opts: ["KBr", "PbBr2", "NaBr", "MgBr2"], ans: 1, exp: "Lead(II) halides are insoluble." },
    { q: "Is NaHCO3 soluble?", opts: ["Yes", "No", "Only in hot water", "Only in acid"], ans: 0, exp: "All sodium salts and bicarbonates are soluble." },
    { q: "Which oxide reacts with water to form a soluble hydroxide?", opts: ["CuO", "ZnO", "Fe2O3", "CaO"], ans: 3, exp: "CaO forms Ca(OH)2 (lime water)." },
    { q: "What color is AgCl precipitate?", opts: ["Yellow", "White", "Blue", "Brown"], ans: 1, exp: "Silver chloride is white." },
    { q: "Which sulfate is insoluble?", opts: ["ZnSO4", "PbSO4", "MgSO4", "CuSO4"], ans: 1, exp: "Lead(II) sulfate is insoluble." },
    { q: "Sodium sulfide is:", opts: ["Soluble", "Insoluble", "Gas", "Solid only"], ans: 0, exp: "Sodium salts are soluble." },
    { q: "Which is a soluble base (Alkali)?", opts: ["Cu(OH)2", "KOH", "Fe(OH)3", "Mg(OH)2"], ans: 1, exp: "KOH is a soluble alkali." },
    { q: "Are acetates (ethanoates) generally soluble?", opts: ["Yes", "No", "Only Group 1", "Never"], ans: 0, exp: "Ethanoates are generally soluble." },
    { q: "Zinc hydroxide is:", opts: ["Soluble", "Insoluble", "Gas", "Liquid"], ans: 1, exp: "Most metal hydroxides are insoluble." },

    // SET C
    { q: "Which silver salt is soluble?", opts: ["AgCl", "AgBr", "AgI", "AgNO3"], ans: 3, exp: "All nitrates are soluble." },
    { q: "Copper(II) carbonate is:", opts: ["Soluble", "Insoluble", "White", "Transparent"], ans: 1, exp: "Copper carbonate is insoluble." },
    { q: "Which ion makes all its salts soluble?", opts: ["Cl-", "SO4 2-", "Na+", "OH-"], ans: 2, exp: "All Na+ salts are soluble." },
    { q: "Barium Sulfate is used in medicine because it is:", opts: ["Soluble", "Insoluble", "Toxic", "Acidic"], ans: 1, exp: "It is insoluble so it isn't absorbed by the body." },
    { q: "Which compound forms a yellow precipitate?", opts: ["AgCl", "PbI2", "BaSO4", "CaCO3"], ans: 1, exp: "PbI2 is yellow." },
    { q: "Is (NH4)2CO3 soluble?", opts: ["Yes", "No", "Maybe", "Only in acid"], ans: 0, exp: "Ammonium salts are soluble." },
    { q: "Which calcium compound is insoluble?", opts: ["CaCl2", "Ca(NO3)2", "CaCO3", "Ca(HCO3)2"], ans: 2, exp: "Calcium carbonate (limestone) is insoluble." },
    { q: "Which metal ion forms an insoluble chloride?", opts: ["K+", "Mg2+", "Pb2+", "Zn2+"], ans: 2, exp: "PbCl2 is insoluble (soluble in hot water)." },
    { q: "Iron(III) Nitrate is:", opts: ["Insoluble", "Soluble", "Gas", "Blue"], ans: 1, exp: "All nitrates are soluble." },
    { q: "Which is insoluble?", opts: ["Na2O", "K2O", "CuO", "CaO"], ans: 2, exp: "Copper oxide is insoluble." },

    // SET D
    { q: "Silver Carbonate is:", opts: ["Soluble", "Insoluble", "Gas", "Liquid"], ans: 1, exp: "Most carbonates are insoluble." },
    { q: "Which is NOT an alkali?", opts: ["NaOH", "KOH", "NH3(aq)", "Cu(OH)2"], ans: 3, exp: "Cu(OH)2 is insoluble, so not an alkali." },
    { q: "Magnesium Sulfate is:", opts: ["Insoluble", "Soluble", "Gas", "Red"], ans: 1, exp: "Most sulfates are soluble." },
    { q: "Which cation forms a white precipitate with Chloride?", opts: ["Cu2+", "Fe3+", "Ag+", "Na+"], ans: 2, exp: "AgCl is white." },
    { q: "Potassium Dichromate is:", opts: ["Soluble", "Insoluble", "Gas", "Colorless"], ans: 0, exp: "Potassium salts are soluble." },
    { q: "Which lead compound is soluble?", opts: ["PbSO4", "PbCl2", "Pb(NO3)2", "PbCO3"], ans: 2, exp: "Nitrates are soluble." },
    { q: "Aluminum Nitrate is:", opts: ["Soluble", "Insoluble", "Gas", "Solid"], ans: 0, exp: "Nitrates are soluble." },
    { q: "Which is a precipitate?", opts: ["NaCl(aq)", "KNO3(aq)", "BaSO4(s)", "HCl(aq)"], ans: 2, exp: "(s) denotes solid precipitate." },
    { q: "Is Zinc Nitrate soluble?", opts: ["Yes", "No", "Sometimes", "Never"], ans: 0, exp: "Nitrates are soluble." },
    { q: "Which carbonate dissolves in water?", opts: ["CaCO3", "MgCO3", "Na2CO3", "CuCO3"], ans: 2, exp: "Group 1 carbonates are soluble." },

    // SET E
    { q: "Lead(II) Bromide is:", opts: ["Soluble", "Insoluble", "Gas", "Blue"], ans: 1, exp: "Lead halides are insoluble." },
    { q: "Ammonium Sulfate is:", opts: ["Soluble", "Insoluble", "Unstable", "Toxic"], ans: 0, exp: "Ammonium salts are soluble." },
    { q: "Which forms an insoluble hydroxide?", opts: ["Na+", "K+", "Fe3+", "NH4+"], ans: 2, exp: "Transition metal hydroxides are insoluble." },
    { q: "Calcium Sulfate is:", opts: ["Soluble", "Insoluble (or slightly)", "Gas", "Blue"], ans: 1, exp: "Considered insoluble/slightly soluble in this context." },
    { q: "Sodium Phosphate is:", opts: ["Soluble", "Insoluble", "Gas", "Acidic"], ans: 0, exp: "Sodium salts are soluble." },
    { q: "Which is soluble?", opts: ["AgI", "PbSO4", "Mg(NO3)2", "BaSO4"], ans: 2, exp: "Magnesium Nitrate is soluble." },
    { q: "Potassium Permanganate is:", opts: ["Soluble", "Insoluble", "Gas", "White"], ans: 0, exp: "Potassium salts are soluble." },
    { q: "Which pair forms a precipitate when mixed?", opts: ["NaCl + KNO3", "AgNO3 + NaCl", "HCl + NaOH", "K2SO4 + NaNO3"], ans: 1, exp: "Forms AgCl(s)." },
    { q: "Identify the spectator ions in Ag+ + NO3- + Na+ + Cl- -> AgCl + ...", opts: ["Ag+, Cl-", "Na+, NO3-", "Ag+, Na+", "Cl-, NO3-"], ans: 1, exp: "Na+ and NO3- do not react." },
    { q: "Lithium Carbonate is:", opts: ["Soluble", "Insoluble", "Gas", "Blue"], ans: 0, exp: "Group 1 carbonates are generally soluble (though Li is less so, usually taught as soluble in trends)." }
];

export const SOLUBILITY_QUIZ_SETS: QuizSet[] = [
    { name: 'Set A', questions: solQuizRaw.slice(0, 10).map((q, i) => ({ id: i, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set B', questions: solQuizRaw.slice(10, 20).map((q, i) => ({ id: i + 10, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set C', questions: solQuizRaw.slice(20, 30).map((q, i) => ({ id: i + 20, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set D', questions: solQuizRaw.slice(30, 40).map((q, i) => ({ id: i + 30, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set E', questions: solQuizRaw.slice(40, 50).map((q, i) => ({ id: i + 40, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
];

// --- ACID BASE QUIZ DATA (50 Questions, 5 Sets) ---
// Focus: Daily examples, definition, reaction of acids. NO Alkali reactions.

const abQuizRaw = [
    // SET A - Daily Examples & Definitions
    { q: "What is the daily example of Ethanoic acid?", opts: ["Stomach juice", "Vinegar", "Drain cleaner", "Antacid"], ans: 1, exp: "Vinegar contains ethanoic acid." },
    { q: "What is the daily example of Hydrochloric acid?", opts: ["Stomach juice", "Vinegar", "Lemon", "Soda"], ans: 0, exp: "Found in stomach juice." },
    { q: "Acids have a _____ taste.", opts: ["Bitter", "Sour", "Salty", "Sweet"], ans: 1, exp: "Acids taste sour." },
    { q: "Acids turn blue litmus paper ____.", opts: ["Red", "Blue", "Green", "White"], ans: 0, exp: "Acid turns blue litmus red." },
    { q: "What is the mobile ion produced by acids in water?", opts: ["OH-", "H+", "Na+", "Cl-"], ans: 1, exp: "Acids produce H+(aq)." },
    { q: "Which acid is found in car batteries?", opts: ["Nitric acid", "Sulphuric acid", "Citric acid", "Carbonic acid"], ans: 1, exp: "Sulphuric acid is used in batteries." },
    { q: "Citric acid is a _____ acid found in lemons.", opts: ["Liquid", "Solid", "Gas", "Strong"], ans: 1, exp: "Citric acid is a solid acid." },
    { q: "Which is a mineral acid?", opts: ["Citric acid", "Ethanoic acid", "Nitric acid", "Tartaric acid"], ans: 2, exp: "HCl, H2SO4, HNO3 are mineral acids." },
    { q: "Drain cleaner typically contains:", opts: ["Conc. Sulphuric Acid", "Dilute Nitric Acid", "Vinegar", "Lemon juice"], ans: 0, exp: "Strong acids like Conc. H2SO4 are used." },
    { q: "Carbonic acid is found in:", opts: ["Soft drinks", "Oven cleaner", "Drain cleaner", "Antacid"], ans: 0, exp: "Carbonic acid is in carbonated drinks." },

    // SET B - Basicity & Definitions
    { q: "What is the basicity of HCl?", opts: ["1", "2", "3", "4"], ans: 0, exp: "Monobasic: produces 1 H+ per molecule." },
    { q: "What is the basicity of H2SO4?", opts: ["1", "2", "3", "0"], ans: 1, exp: "Dibasic: produces 2 H+ per molecule." },
    { q: "What is the basicity of H3PO4?", opts: ["1", "2", "3", "4"], ans: 2, exp: "Tribasic: produces 3 H+ per molecule." },
    { q: "Ethanoic acid (CH3COOH) is:", opts: ["Monobasic", "Dibasic", "Tribasic", "Tetrabasic"], ans: 0, exp: "Only the H in -COOH is ionizable." },
    { q: "Basicity is the max number of _____ produced by one molecule.", opts: ["OH- ions", "H+ ions", "O atoms", "Salt molecules"], ans: 1, exp: "Definition of basicity." },
    { q: "Which is required for an acid to show acidic properties?", opts: ["Organic solvent", "Water", "Heat", "Light"], ans: 1, exp: "Water is needed for ionization." },
    { q: "Does dry citric acid turn dry blue litmus red?", opts: ["Yes", "No", "Sometimes", "Purple"], ans: 1, exp: "No water = No H+ ions = No acidic properties." },
    { q: "Hydrogen chloride in organic solvent contains:", opts: ["H+ ions", "HCl molecules", "Cl- ions", "OH- ions"], ans: 1, exp: "It remains as molecules and does not ionize." },
    { q: "H3O+ is called:", opts: ["Hydroxide ion", "Hydronium ion", "Hydride ion", "Hydrogen gas"], ans: 1, exp: "H+ combines with water to form H3O+." },
    { q: "Which acid is weak/reversible in ionization?", opts: ["HCl", "HNO3", "Ethanoic Acid", "H2SO4"], ans: 2, exp: "Organic acids like Ethanoic are weak." },

    // SET C - Reactions of Acids (Metal & Base)
    { q: "Acid + Metal -> ____ + Hydrogen", opts: ["Water", "Salt", "Base", "CO2"], ans: 1, exp: "General equation: Acid + Metal -> Salt + H2." },
    { q: "Acid + Metal Oxide -> ____ + Water", opts: ["Hydrogen", "Salt", "Oxygen", "CO2"], ans: 1, exp: "Neutralization: Acid + Base -> Salt + Water." },
    { q: "H2SO4 + MgO -> ____ + H2O", opts: ["MgSO4", "MgCl2", "MgS", "Mg(OH)2"], ans: 0, exp: "Forms Magnesium Sulphate." },
    { q: "HCl + NH3 -> ____", opts: ["NH4Cl + H2O", "NH4Cl", "N2 + H2", "Cl2"], ans: 1, exp: "Special case: Acid + Ammonia -> Ammonium Salt (no water)." },
    { q: "Which gas is produced when Acid reacts with Mg?", opts: ["O2", "CO2", "H2", "NH3"], ans: 2, exp: "Metal + Acid -> Hydrogen." },
    { q: "Reaction of Acid + Base is called:", opts: ["Precipitation", "Neutralization", "Decomposition", "Combustion"], ans: 1, exp: "Neutralization reaction." },
    { q: "HNO3 + NaOH -> ____ + H2O", opts: ["NaNO2", "NaNO3", "NH3", "NaCl"], ans: 1, exp: "Sodium Nitrate is formed." },
    { q: "Why is water not formed in HCl(g) + NH3(g)?", opts: ["No Oxygen present", "It is a redox", "It is incorrect", "Hydrogen is gas"], ans: 0, exp: "Ammonium salt is the only product." },
    { q: "Which metal does NOT react with dilute acid?", opts: ["Mg", "Zn", "Cu", "Fe"], ans: 2, exp: "Copper is below hydrogen in reactivity series." },
    { q: "Observation when Mg reacts with HCl:", opts: ["Blue solution", "Colorless gas bubbles", "Red ppt", "Yellow gas"], ans: 1, exp: "Hydrogen gas bubbles." },

    // SET D - Reactions of Acids (Carbonates)
    { q: "Acid + Carbonate -> Salt + Water + ____", opts: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Ammonia"], ans: 2, exp: "Produces CO2 gas." },
    { q: "H2SO4 + Na2CO3 -> ____ + H2O + CO2", opts: ["NaS", "NaSO3", "Na2SO4", "NaCl"], ans: 2, exp: "Sodium Sulphate." },
    { q: "Observation when Acid reacts with Carbonate:", opts: ["Effervescence", "Precipitation", "Color change to blue", "No visible change"], ans: 0, exp: "Effervescence due to CO2." },
    { q: "Limewater turns _____ with CO2.", opts: ["Clear", "Milky", "Blue", "Red"], ans: 1, exp: "Forms insoluble CaCO3." },
    { q: "HCl + KHCO3 -> ____ + H2O + CO2", opts: ["K2CO3", "KCl", "KOH", "KH"], ans: 1, exp: "Potassium Chloride." },
    { q: "Which acid causes acid rain (Sulphurous)?", opts: ["H2SO3", "HCl", "CH3COOH", "Citric"], ans: 0, exp: "SO2 + H2O -> H2SO3." },
    { q: "Gas produced by Acid + Hydrogencarbonate:", opts: ["H2", "CO2", "O2", "NH3"], ans: 1, exp: "Same as carbonate: CO2." },
    { q: "Role of water in acid reactions:", opts: ["Solvent only", "Produces H+", "Produces OH-", "Catalyst"], ans: 1, exp: "Required to produce H+ ions." },
    { q: "Carbonic acid formula:", opts: ["HCO3", "H2CO3", "CO2", "CH3COOH"], ans: 1, exp: "H2CO3." },
    { q: "Acid rain damages limestone buildings because:", opts: ["Limestone is acidic", "Limestone reacts with acid", "Limestone melts", "It freezes"], ans: 1, exp: "CaCO3 + Acid -> Salt + Water + CO2 (corrosion)." },

    // SET E - Alkalis & Bases (Definitions only, NO reactions)
    { q: "Alkalis have a _____ taste.", opts: ["Sour", "Bitter", "Salty", "Sweet"], ans: 1, exp: "Alkalis are bitter." },
    { q: "Alkalis feel _____.", opts: ["Rough", "Slippery", "Hot", "Dry"], ans: 1, exp: "Soapy/Slippery feel." },
    { q: "Alkalis turn red litmus _____.", opts: ["Blue", "Red", "Green", "White"], ans: 0, exp: "Red to Blue." },
    { q: "Common name for NaOH:", opts: ["Slaked lime", "Caustic soda / drain cleaner", "Limestone", "Baking soda"], ans: 1, exp: "Sodium Hydroxide is Caustic Soda." },
    { q: "Lime water contains:", opts: ["CaO", "Ca(OH)2", "CaCO3", "CaCl2"], ans: 1, exp: "Calcium Hydroxide." },
    { q: "NH3(aq) is used as:", opts: ["Drain cleaner", "Window cleaner", "Baking soda", "Antacid"], ans: 1, exp: "Ammonia is in window cleaner." },
    { q: "Is Copper(II) Oxide a base?", opts: ["Yes", "No", "It is an acid", "It is a salt"], ans: 0, exp: "Metal oxides are bases." },
    { q: "Is Copper(II) Oxide an Alkali?", opts: ["Yes", "No", "Sometimes", "Maybe"], ans: 1, exp: "No, it is insoluble in water." },
    { q: "Antacid contains:", opts: ["HCl", "Mg(OH)2", "NaOH", "H2SO4"], ans: 1, exp: "Magnesium Hydroxide neutralizes stomach acid." },
    { q: "Difference between Base and Alkali:", opts: ["Alkalis are soluble bases", "Bases are soluble alkalis", "No difference", "Alkalis are acidic"], ans: 0, exp: "Alkalis are water-soluble bases." }
];

export const ACID_BASE_QUIZ_SETS: QuizSet[] = [
    { name: 'Set A', questions: abQuizRaw.slice(0, 10).map((q, i) => ({ id: i, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set B', questions: abQuizRaw.slice(10, 20).map((q, i) => ({ id: i + 10, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set C', questions: abQuizRaw.slice(20, 30).map((q, i) => ({ id: i + 20, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set D', questions: abQuizRaw.slice(30, 40).map((q, i) => ({ id: i + 30, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
    { name: 'Set E', questions: abQuizRaw.slice(40, 50).map((q, i) => ({ id: i + 40, question: q.q, options: q.opts, correctAnswer: q.ans, explanation: q.exp })) },
];
